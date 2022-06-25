Introduction
You can order your burger here Build My Burger!
A Burger builder Application built using React Js and ReduxJs. The application uses all the new features introduced in EcmaScript 6. The Application also used proper authentication and validation and implements routing using React Router. The App is Mobile Responsive as well.
Prerequisites
Get a Firebase Realtime Database and put your endpoint URL into .env.development.local under REACT_APP_API_BASE. Set up authentication by e-mail/password and place your API key under REACT_APP_API_KEY.
Your database should have an ingredient key with data:
{
  meat: 0,
  bacon: 0,
  salad: 0,
  cheese: 0
}
Getting Started
Importing
npm clone https://github.com/manavbabber/foodies-hub.git
npm install
npm start
How it works
1) Build a burger as per your choice (select veggies/sauces etc).
2) Check your balance before buying the item.
3) The delivery will be at your house at any time.
4) Enjoy your meal!
You can see your past delivery details.
Available Scripts
In the project directory, you can run:
yarn start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.
yarn test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
yarn run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about deployment for more information.
Key topics learned when building the app:
How to output lists and conditional content
Styling of React components
A deep dive into the internals of React and advanced component features
How to access http content from within React app (AJAX) - axios package
Posting and fetching data from firebase database
Forms and form validation in React app
Implementing Redux
