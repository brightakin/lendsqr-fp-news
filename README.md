## Setup

Created a GitHub repository named lendsqr-fp-news.

Cloned the repository to my local machine.

Initialize React Native Project with the following command: npx react-native init lendsqr --template react-native-template-typescript

Install the required dependencies with the following command:
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs redux react-redux @reduxjs/toolkit axios firebase react-native-firebase/app react-native-firebase/auth react-native-firebase/crashlytics react-native-firebase/perf react-native-firebase/remote-config react-native-firebase/messaging react-native-code-push

Created Firebase Project: Create a Firebase project named lendsqr-fp-news.

Add Firebase to Project:

Downloaded the google-services.json file and place it in the android/app directory.
Downloaded the GoogleService-Info.plist file and add it to the iOS project in Xcode.
Added dependencies to the native applications(android and ios)
Firebase Services Setup:

Enabled Authentication with Google Sign-In.
Enabled Crashlytics.
Enabled Performance Monitoring.
Enabled Remote Config.
Enabled Cloud Messaging.
API Integration

RapidAPI - Free News API was asking for a subscription so I opted for a free substitute
Sign Up: Sign up for an account on the new api platform.
Fetch News Data:
Used Axios to retrieve news data from the API.

## Application Structure

Redux Setup
State Management: Used Redux Toolkit for managing application state.

Set Up CodePush

Deployed the application with Firebase App Tester
