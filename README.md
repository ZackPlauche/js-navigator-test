# Phone Contacts Viewer

A simple web app that lets you access and view your mobile phone contacts using the browser's Contacts API.

## Requirements

- Node.js installed on your computer
- Mobile phone with a modern browser that supports the Contacts API (primarily Chrome on Android)

## How to Use

1. Clone or download this repository
2. Open a terminal or command prompt in the project directory
3. Run the server:

```
node server.js
```

4. The server will display several URLs in the console. Note the IP address URLs.
5. On your mobile device, make sure you're connected to the same Wi-Fi network as your computer.
6. Open a web browser on your mobile device and navigate to one of the IP addresses shown in the console (e.g., http://192.168.1.100:3000/)
7. Tap the "Get Contacts" button and grant permission when prompted.
8. Select the contacts you want to view, and they will be displayed on the page.

## iOS Compatibility

The Contact Picker API has very limited support on iOS:

- Safari on iOS does not fully support the Contact Picker API as implemented in Chrome for Android
- You may see a warning message when accessing the app from an iOS device
- While the app will attempt to work on iOS, it is unlikely to successfully access contacts
- For iOS devices, you would typically need to create a native app using Swift/Objective-C or a hybrid app using Capacitor/Cordova to access contacts

## Notes

- This app uses the Contact Picker API, which is currently supported mainly in Chrome on Android (version 80+)
- The contacts are never sent to the server; all processing happens locally in your browser
- On supported browsers, you'll see a native contact picker UI when you tap "Get Contacts"
- This is a demo application intended for testing purposes only 