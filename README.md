# FIGS Frontend Take-home Exercise

This exercise should take 1-2 hours to complete, but if you want to spend more time then knock yourself out.

## Prequisites

A basic knowledge of React 16, CSS, and the Fetch API. Brush up if you need to.

## The Problem

Today we're going to be messing around with layouts and fetching data.

There are two parts to this test:

1. Fixing a bug in this application's existing code.
2. Implementing a layout for the application.

The application fetches pictures of cats from [TheCatAPI](https://thecatapi.com/) and displays pictures for the user.

### Part 1: The Bug

The existing code does not successfully fetch any images. Please fix this!

There is a unit test file (`useCatImages.test.js`) that should pass when you have fixed the problem. There is no need to modify this file.

### Part 2: The Layout

We need to implement a layout for this app to display images sanely on devices.

The layout rules are as follows:

| Device  | Breakpoint                     | Columns | Layout Width                                                                                                         |
| ------- | ------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------- |
| Phone   | max width of `812px`           | 1       | images must maintain a 1:1 aspect ratio, be horizontally centered and take up a width of `90vw`                             |
| Desktop | min width greater than `812px` | 3       | images must maintain a 1:1 aspect ratio, take up 3 columns and have equal whitespace on each side and in-between each image |

Requirements:

1. Build the layout according to the provided rules.
2. Build a toggle button to let the user toggle between the two layouts regardless of viewport.
3. Add appropriate unit tests to verify your implementation.

There is a sample test which tests the basic one column layout as currently implemented.

### Bonus Points

If you are so inclined:

1. Add loading and error states so the users has some indication if the API still has not responded or responded with an error.
2. Add a basic transition animation for the images so that they don't just suddenly appear on the page.

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
