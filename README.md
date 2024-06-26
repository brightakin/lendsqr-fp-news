Created the GitHub Repository


Repository Creation: Created a GitHub repository named lendsqr-fp-news.
Clone Repository: Cloned the repository to my local machine.
Initialize React Native Project:
Open terminal
Copy code
npx react-native init lendsqr --template react-native-template-typescript
Install the required dependencies:


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
Example:

axios.request(options).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});
Application Structure

Redux Setup
State Management: Used Redux Toolkit for managing application state.

Features Implementation

User Authentication
Sign Up and Login Screens:
Used Firebase Authentication for Google Sign-In on the second screen.
Protect News Routes: Ensured news listing and details can only be accessed by authenticated users.
News Listing and Details Screens
News Listing:
Fetch news articles from the Free News API.
Display title, image, topic, and publication date.
News Details:
Navigate to details screen on item tap.
Display full news details including summary and author.
Created a Middleware for analytics
User Activities Logging:
Created middleware to log user activities and screen changes.
Used Firebase Analytics to log events.

Over-the-Air Updates with CodePush

Set Up CodePush:

Integrated with React Native:
javascript
Copy code
import codePush from 'react-native-code-push';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };

class App extends Component {
  render() {
    // App content
  }
}

App = codePush(codePushOptions)(App);
Testing and Error Handling

Unit Tests:

Wrote unit tests using Jest.
Example test:
javascript
Copy code
import { render } from '@testing-library/react-native';
import NewsList from './NewsList';

test('renders correctly', () => {
  const { getByText } = render(<NewsList />);
  expect(getByText('News')).toBeTruthy();
});
Runtime Error Handling:

Add a button on the news listing screen that throws a runtime error when pressed.
javascript
Copy code
<Button title="Throw Error" onPress={() => { throw new Error('Test Error'); }} />
Deployment

Deploy with Firebase App Tester:

Follow the Firebase App Distribution documentation to deploy your app.
Submit URLs:

Submit the app URL and GitHub repository URL using the provided submission form.
