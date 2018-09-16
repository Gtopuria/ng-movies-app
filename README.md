# MovieApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## RUN PROJECT

1. ``npm install``
2. ``npm run start-local`` - start app locally.
``npm run start`` - for heroku deployment
.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run ``npm run test`` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Used libraries/frameworks

- Angular 6
- Redux
- RxJs
- Bootstrap 4

## Deployment

Deployed to heroku [DEMO](https://ng-redux-sample-app.herokuapp.com)

## App 

- App contains two pages, movies list page and details page.
- Movies can be filtered by name and genre(additional properties can be defined as an array ``props: ['key', 'genres']``).
- App is fully using `Redux` for state management with custom helpers for immutability.
