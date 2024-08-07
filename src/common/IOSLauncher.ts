/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { Logger, Messages } from '@salesforce/core';
import { IOSUtils } from './IOSUtils.js';
import { IOSAppPreviewConfig, LaunchArgument } from './PreviewConfigFile.js';
import { CommonUtils } from './CommonUtils.js';
import { PreviewUtils } from './PreviewUtils.js';

Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('@salesforce/lwc-dev-mobile-core', 'common');

export class IOSLauncher {
    private simulatorName: string;

    public constructor(simulatorName: string) {
        this.simulatorName = simulatorName;
    }

    /**
     * Attempts to preview a Lightning Web Component. It will create the target simulator if it doesn't already exist.
     * It will launch the simulator and wait for it to boot and will then proceed to preview the LWC. If the preview
     * target is the browser then it will launch the simulator browser for previewing the LWC. If the preview target
     * is a native app then it will install & launch the native app for previewing the LWC.
     *
     * @param compName Name of the LWC component.
     * @param projectDir Path to the LWC project root directory.
     * @param appBundlePath Optional path to the app bundle of the native app. This will be used to install the app if not already installed.
     * @param targetApp The bundle ID of the app to be launched.
     * @param appConfig An AndroidAppPreviewConfig object containing app configuration info.
     * @param serverPort The port for local dev server.
     * @param targetingLwrServer Indicates whether we're previewing using LWC Dev Server (default behavior) or LWR Server.
     */
    public async launchPreview(
        compName: string,
        projectDir: string,
        appBundlePath: string | undefined,
        targetApp: string,
        appConfig: IOSAppPreviewConfig | undefined,
        serverPort: string,
        targetingLwrServer: boolean = false,
        logger?: Logger
    ): Promise<void> {
        const availableDevices: string[] = await IOSUtils.getSupportedDevices(logger);
        const supportedRuntimes: string[] = await IOSUtils.getSupportedRuntimes(logger);
        const currentSimulator = await IOSUtils.getSimulator(this.simulatorName, logger);
        const currentSimulatorUDID = currentSimulator?.udid;
        let deviceUDID = '';
        CommonUtils.startCliAction(
            messages.getMessage('startPreviewAction'),
            messages.getMessage('searchForDeviceStatus', [this.simulatorName])
        );
        if (!currentSimulatorUDID || currentSimulatorUDID.length === 0) {
            CommonUtils.updateCliAction(messages.getMessage('createDeviceStatus', [this.simulatorName]));
            deviceUDID = await IOSUtils.createNewDevice(
                this.simulatorName,
                availableDevices[0],
                supportedRuntimes[0],
                logger
            );
        } else {
            CommonUtils.updateCliAction(messages.getMessage('foundDeviceStatus', [this.simulatorName]));
            deviceUDID = currentSimulatorUDID;
        }

        CommonUtils.updateCliAction(
            messages.getMessage('startDeviceStatus', [`${this.simulatorName} (${deviceUDID})`])
        );
        return IOSUtils.bootDevice(deviceUDID, true, logger)
            .then(() => IOSUtils.launchSimulatorApp(logger))
            .then(() => {
                const useServer = PreviewUtils.useLwcServerForPreviewing(targetApp, appConfig);
                const address = useServer ? 'http://localhost' : undefined; // TODO: dynamically determine server address
                const port = useServer ? serverPort : undefined;

                if (PreviewUtils.isTargetingBrowser(targetApp)) {
                    let url = '';
                    if (targetingLwrServer) {
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        url = `${address}:${port}`;
                    } else {
                        const compPath = PreviewUtils.prefixRouteIfNeeded(compName);
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        url = `${address}:${port}/lwc/preview/${compPath}`;
                    }

                    CommonUtils.updateCliAction(messages.getMessage('launchBrowserStatus', [url]));
                    return IOSUtils.launchURLInBootedSimulator(deviceUDID, url, logger);
                } else {
                    CommonUtils.updateCliAction(messages.getMessage('launchAppStatus', [targetApp]));
                    const targetAppArguments: LaunchArgument[] = appConfig?.launch_arguments ?? [];

                    targetAppArguments.push({ name: PreviewUtils.COMPONENT_NAME_ARG_PREFIX, value: compName });
                    targetAppArguments.push({ name: PreviewUtils.PROJECT_DIR_ARG_PREFIX, value: projectDir });

                    if (address) {
                        targetAppArguments.push({ name: PreviewUtils.SERVER_ADDRESS_PREFIX, value: address });
                    }

                    if (port) {
                        targetAppArguments.push({ name: PreviewUtils.SERVER_PORT_PREFIX, value: port });
                    }

                    return IOSUtils.launchAppInBootedSimulator(
                        deviceUDID,
                        appBundlePath,
                        targetApp,
                        targetAppArguments,
                        logger
                    );
                }
            })
            .then(() => {
                CommonUtils.stopCliAction();
                return Promise.resolve();
            })
            .catch((error) => {
                CommonUtils.stopCliAction(messages.getMessage('genericErrorStatus'));
                throw error;
            });
    }
}
