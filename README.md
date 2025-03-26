# Phone Contacts Viewer

A simple web app that lets you access and view your mobile phone contacts using the browser's Contacts API.

## Compatibility

- This app works primarily with Chrome on Android devices
- See iOS compatibility notes below

## How to Use

1. Open the HTML file directly in your mobile browser
2. Tap the "Get Contacts" button and grant permission when prompted
3. Select the contacts you want to view, and they will be displayed on the page

## iOS Compatibility

The Contact Picker API has very limited support on iOS:

- Safari on iOS does not fully support the Contact Picker API as implemented in Chrome for Android
- You may see a warning message when accessing the app from an iOS device
- While the app will attempt to work on iOS, it is unlikely to successfully access contacts
- For iOS devices, you would typically need to create a native app using Swift/Objective-C or a hybrid app using Capacitor/Cordova to access contacts

## Notes

- This app uses the Contact Picker API, which is currently supported mainly in Chrome on Android (version 80+)
- The contacts are never sent to any server; all processing happens locally in your browser
- On supported browsers, you'll see a native contact picker UI when you tap "Get Contacts"
- This is a demo application intended for testing purposes only 