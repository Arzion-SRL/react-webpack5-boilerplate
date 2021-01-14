# React Boilerplate
Another React + Webpack 5 boilerplate

Start your next react project in seconds using this boilerplate.

## Table of Contents

- [Installation](#installation)
- [Webpack 5](#webpack-5)
- [Usage](#usage)
- [Docker](#docker)
- [Built with](#build-with)
- [Support](#support)
- [Versioning and Contributing](#versioning-and-contributing)
- [Authos](#authors)
- [Acknowledgments](#acknowledgments)

## Installation

Clone the repository and install all the dependencies

```bash
git clone https://github.com/Arzion-SRL/react-webpack5-boilerplate.git
npm install
```

## Webpack 5

### Environment Variables

I'm using the webpack.DefinePlugin for environment variables.

```javascript
new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(false),
    VERSION: JSON.stringify('1234'),
    BACKEND_URL: JSON.stringify('https://reqres.in/api'),
}),
```

Following this [link](https://eslint.org/docs/user-guide/configuring#specifying-globals) you can take a look of how to properly setup *eslint* for allow global env variables.

## Usage

For development
```bash
npm run start
```

Running Linter
```bash
npm run lint
```

For production, use the following command to compile sources generating the bundle in the dist/* folder.
```bash
npm run build
```

## Docker

Build the container first:

```bash
docker build -t react-webpack5-boilerplate .
```

Run the container:

```bash
docker run --name react --rm -d -p 8080:80 react-webpack5-boilerplate
```

Run the container and mount a volume:

```bash
docker run -v /host/directory:/container/directory --name react --rm -d -p 8080:80 react-webpack5-boilerplate
```

> Note: the `--rm` flag automatically removes the container when it exits, so you just need to stop it and not to remove it manually, more info [here](https://docs.docker.com/engine/reference/run/#clean-up---rm)

Use the bash shell of the container:

```bash
docker exec -t -i react /bin/bash
```

Stop the container:

```bash
docker stop react
```

## Built With
- [React](https://reactjs.org/) :: A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) :: A Predictable State Container for JS Apps.
- [React Router](https://reactrouter.com/web/guides/quick-start) :: A routing library for React.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) :: Thunk middleware for Redux.
- [Axios](https://github.com/axios/axios) :: Promise based HTTP client for the browser and node.js
- [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension) :: Extension for Redux
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) :: Typechecking With PropTypes
- [Webpack 5](https://webpack.js.org/) :: Module bundler.
- [Babel](https://babeljs.io/) :: A Javascript compiler.
- [EsLint](https://eslint.org) :: Find and fix problems in your JavaScript code.
- [Prettier](https://prettier.io) :: Opinionated Code Formatter.

## Support

Please [open an issue](https://github.com/Arzion-SRL/react-webpack5-boilerplate/issues/new) for support.

## Versioning and Contributing

We use [SemVer](http://semver.org/) for versioning and [gitmoji](https://gitmoji.dev) for commit messages. For the versions available, see the [tags on this repository](https://github.com/Arzion-SRL/react-webpack5-boilerplate/tags).

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/Arzion-SRL/react-webpack5-boilerplate/compare/).


## Authors

* **JonyR** - *Initial work* - [JonyR](https://github.com/jonyr)

See also the list of [contributors](https://github.com/Arzion-SRL/react-webpack5-boilerplate/contributors) who participated in this project.

## Acknowledgments

- [React Setup](https://www.andrewmin.info/blog/react-setup/) :: Setup ESLint + Prettier + AirBnB Style with Create React App
- [Folder Structure](https://dev.to/gkhan205/best-scalable-react-app-architecture-2020-9fn) :: Best Scalable React App Structure 2020
- [Redux Duck](https://medium.com/@matthew.holman/what-is-redux-ducks-46bcb1ad04b7) & [Duck Proposal](https://github.com/erikras/ducks-modular-redux) :: What is Redux Ducks?
- [Split Webpack](https://dev.to/didof/how-to-split-dev-prod-webpack-configuration-n53) How to split dev/prod webpack configuration
