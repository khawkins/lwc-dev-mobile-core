/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
export class AndroidMockData {
    public static mockRawPackagesString = `Warning: File test string.........       
  Installed packages:=====================] 100% Computing updates...             
    Path                                                | Version      | Description                                     | Location                                            
    -------                                             | -------      | -------                                         | -------                                             
    build-tools;28.0.3                                  | 28.0.3       | Android SDK Build-Tools 28.0.3                  | build-tools/28.0.3/                                 
    build-tools;29.0.2                                  | 29.0.2       | Android SDK Build-Tools 29.0.2                  | build-tools/29.0.2/                                 
    build-tools;30.0.2                                  | 30.0.2       | Android SDK Build-Tools 30.0.2                  | build-tools/30.0.2/                                 
    platforms;android-25                                | 3            | Android SDK Platform 25                         | platforms/android-25/                               
    platforms;android-26                                | 2            | Android SDK Platform 26                         | platforms/android-26/                               
    platforms;android-27                                | 3            | Android SDK Platform 27                         | platforms/android-27/                               
    platforms;android-28                                | 6            | Android SDK Platform 28                         | platforms/android-28/                               
    platforms;android-29                                | 3            | Android SDK Platform 29                         | platforms/android-29/                               
    platforms;android-30                                | 3            | Android SDK Platform 30                         | platforms/android-30/                               
    platforms;android-31                                | 3            | Android SDK Platform 31                         | platforms/android-31/                               
    platforms;android-Tiramisu                          | 2            | Android SDK Platform Tiramisu                   | platforms/android-Tiramisu/                         
    system-images;android-28;default;x86_64             | 4            | Intel x86 Atom_64 System Image                  | system-images/android-28/default/x86_64/            
    system-images;android-28;google_apis;x86            | 10           | Google APIs Intel x86 Atom System Image         | system-images/android-28/google_apis/x86/           
    system-images;android-28;google_apis_playstore;x86  | 9            | Google Play Intel x86 Atom System Image         | system-images/android-28/google_apis_playstore/x86/ 
    system-images;android-29;default;x86_64             | 7            | Intel x86 Atom_64 System Image                  | system-images/android-29/default/x86_64/            
    system-images;android-29;google_apis;x86            | 8            | Google APIs Intel x86 Atom System Image         | system-images/android-29/google_apis/x86/           
    system-images;android-30;google_apis;x86            | 9            | Google APIs Intel x86 Atom System Image         | system-images/android-30/google_apis/x86/           
    system-images;android-30;google_apis;x86_64         | 9            | Google APIs Intel x86 Atom_64 System Image      | system-images/android-30/google_apis/x86_64/        
    system-images;android-31;google_apis;arm64-v8a      | 9            | Google Play ARM 64 v8a System Image             | system-images/android-30/google_apis/x86_64/        
    system-images;android-Tiramisu;google_apis;x86_64   | 1            | Google APIs Intel x86 Atom_64 System Image      | system-images/android-Tiramisu/google_apis/x86_64/  
    tools                                               | 26.1.1       | Android SDK Tools 26.1.1                        | tools/                                              
  Available Packages:
    Path                                                                                     | Version      | Description                                                         
  `;

    public static badMockRawPackagesString = 'Installed packages:=====================]';

    public static mockRawStringPackageLength = 17;

    public static avdList = `
    Available Android Virtual Devices:
        Name: Android_TV_1080p_API_30
      Device: tv_1080p (Google)
        Path: /Users/test/.android/avd/Android_TV_1080p_API_30.avd
      Target: Google TV
              Based on: Android 11.0 (R) Tag/ABI: google-tv/x86
        Skin: 1920x1080
      Sdcard: 512M
    ---------
        Name: Medium_Desktop_API_34
      Device: desktop_medium (Google)
        Path: /Users/test/.android/avd/Medium_Desktop_API_34.avd
      Target: Desktop (Google Inc.)
              Based on: Android API 34 Tag/ABI: android-desktop/x86_64
        Skin: 3840x2160
      Sdcard: 512 MB
    ---------
        Name: Wear_OS_Large_Round_API_30
      Device: wearos_large_round (Google)
        Path: /Users/test/.android/avd/Wear_OS_Large_Round_API_30.avd
      Target: China version of Wear OS 3
              Based on: Android 11.0 (R) Tag/ABI: android-wear/x86
        Skin: 454x454
      Sdcard: 512 MB
    ---------
      Name: Pixel_5_API_31
      Device: pixel_5 (Google)
        Path: /Users/test/.android/avd/Pixel_5_API_31.avd
      Target: Google APIs (Google Inc.)
              Based on: Android 12.0 (S) Tag/ABI: google_apis/arm64-v8a
        Skin: pixel_5
      Sdcard: 512M
    ---------
        Name: Nexus_6_API_30
      Device: Nexus 6 (Google)
        Path: /Users/test/.android/avd/Nexus_6_API_30.avd
      Target: Google APIs (Google Inc.)
              Based on: Android 11.0 (R) Tag/ABI: google_apis/x86
        Skin: nexus_6
      Sdcard: 512M
    ---------
        Name: Pixel_3_API_29
      Device: pixel_3 (Google)
        Path: /Users/test/.android/avd/Pixel_3_API_29.avd
      Target: Google Play (Google Inc.)
              Based on: Android 10.0 (Q) Tag/ABI: google_apis_playstore/x86_64
        Skin: pixel_3
      Sdcard: 512M
    ---------
        Name: Pixel_4_XL_API_29
      Device: pixel_4_xl (Google)
        Path: /Users/test/.android/avd/Pixel_4_XL_API_29.avd
      Target: Google APIs (Google Inc.)
              Based on: Android 10.0 (Q) Tag/ABI: google_apis/x86_64
        Skin: pixel_4_xl
      Sdcard: 512M
    ---------
        Name: Pixel_XL_API_28
      Device: pixel_xl (Google)
        Path: /Users/test/.android/avd/Pixel_XL_API_28.avd
      Target: Google APIs (Google Inc.)
              Based on: Android 9.0 (Pie) Tag/ABI: google_apis/x86_64
        Skin: pixel_xl_silver
      Sdcard: 512M
  `;

    public static emuNames = `
    Android_TV_1080p_API_30
    Medium_Desktop_API_34
    Wear_OS_Large_Round_API_30
    Pixel_5_API_31
    Nexus_6_API_30
    Pixel_3_API_29
    Pixel_4_XL_API_29
    Pixel_XL_API_28
  `;
}
