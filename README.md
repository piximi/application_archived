# Piximi

[![Travis (.org) branch](https://img.shields.io/travis/piximi/application/develop.svg?label=Develop%20Build%20on%20Travis%20CI%20&style=flat-square&logo=Travis)](https://travis-ci.org/piximi/application)
[![Travis (.org) branch](https://img.shields.io/travis/piximi/application/production.svg?label=Production%20Build%20on%20Travis%20CI%20&style=flat-square&logo=Travis)](https://travis-ci.org/piximi/application)

A web-based deep learning tool for classification of human cells, created with Tensorflow.js and React.
https://www.piximi.app

**Please make sure to clean your browser cache, since we are continuously developing new features:)**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Development session

### Set up your development environment

#### Option 1: Develop locally without Docker
1. Install npm and Node.js: https://www.npmjs.com/get-npm
2. Verify the installation by: `node --version` and `npm -v`
3. Install the node dependencies with `npm install`
4. Clone the project: `git clone https://github.com/piximi/application.git` and move into the repo with `cd application`
5. Run `npm start` from within the root directory of the repo, which should pop up a new tab your browser pointing at http://localhost:3000

#### Option 2: Develop using Docker-Compose
1. Clone the project: `git clone https://github.com/piximi/application.git` and move into the repo with `cd application`
2. Make sure you have docker-compose installed: `docker-compose version`
3. From within the root directory, run `docker-compose up`. (Note you might want to run `docker-compose up --build` whenever you make changes to the `Dockerfile.dev`.)
4. You should be able to see the application page at http://localhost:3000. _You won't need to restart the server as long as the docker-compose is running, the app will be dynamically relaoded._

### Development process

There is no _master_ branch in this repo, and `develop` is the default branch that you should branch off when you want to make changes. Although in some rare cases the maintainers of the repo could merge hot-fix PRs directly to `production` branch,
in general developers follow the process:

1. Branch off the latest remote `develop` branch either in a forked repo or the same repo (requries write access to the repo).
2. Make changes, commit the changes and create a PR against the `develop` branch.
3. Make sure all of the tests pass.
4. Ask the maintainers of the repo to merge the PR for you, usually they will be the reviewers of your PR.
5. PRs merged to `develop` will trigger a deployment to the dev server.

Maintainers can merge the `develop` to `production` to trigger a deployment/promotion to the prod server. External contributors will need to follow the CONTRIBUTING guide.

## Deployment process

You can deploy by running: ``` npm deploy ```

You can define where to deploy in the package.json file under: ** homepage **

## Contributing

Please read [CONTRIBUTING.md](https://github.com/piximi/application/blob/develop/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
