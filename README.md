[![Build Status](https://travis-ci.org/piximi/application.svg?branch=master)](https://travis-ci.org/piximi/application)

# Piximi

A web-based deep learning tool for classification of human cells, created with Tensorflow.js and React.
https://application.piximi.org

**Please make sure to clean your browser cache, since we are continuously developing new features:)**

![alt text](./public/piximi.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Development

### Option 1: Develop Locally Without Docker
1. Install npm and Node.js: https://www.npmjs.com/get-npm
2. Verify the installation by: `node --version` and `npm -v`
3. Install the node dependencies with `npm install`
4. Clone the project: `git clone https://github.com/piximi/application.git` and move into the repo with `cd application`
5. Run `npm start` from within the root directory of the repo, which should pop up a new tab your browser pointing at http://localhost:3000

### Option 2: Develop Using Docker-Compose
1. Clone the project: `git clone https://github.com/piximi/application.git` and move into the repo with `cd application`
2. Make sure you have docker-compose installed: `docker-compose version`
3. From within the root directory, run `docker-compose up`. (Note you might want to run `docker-compose up --build` whenever you make changes to the `Dockerfile.dev`.)
4. You should be able to see the application page at http://localhost:3000

## Deployment

You can deploy by running: ``` npm deploy ```

You can define where to deploy in the package.json file under: ** homepage **

## Contributing

Please read [CONTRIBUTING.md](https://github.com/piximi/application/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
