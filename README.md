# Mnemo

A web app that connects people, places and memories.

<!-- PROJECT SHIELDS -->

[![GitHub contributors](https://img.shields.io/github/contributors/mateusk/mnemo.svg)](https://github.com/mateusk/mnemo/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/mateusk/mnemo.svg)](https://github.com/mateusk/mnemo/issues/)
[![GitHub license](https://img.shields.io/github/license/mateusk/mnemo.svg)](https://github.com/mateusk/mnemo/blob/main/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/mateusk/mnemo.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/mateusk/mnemo/network/)
[![GitHub stars](https://img.shields.io/github/stars/mateusk/mnemo.svg?style=social&label=Star&maxAge=2592000)](https://github.com/mateusk/mnemo/stargazers/)

<!-- TABLE OF CONTENTS -->

## Table of contents

- [Mnemo](#mnemo)
  - [Table of contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Wireframes](#wireframes)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Running the app](#running-the-app)
  - [Running tests](#running-tests)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)
  - [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

![Mnemo app wireframe example](../mnemo/images/wireframe.png)

Mnemo is a web application that allows users to share memories by geotagging them to places. Memories are composed of short, "Tweet-like" text snippets that can be about anything that might have existed or happened, for a moment or for a while, anywhere. Memories uploaded by users are anonymised.

The app is being designed as mobile-first. Users can check existing memories by consulting their feed, which fetches memories associated with nearby locations. Users can also search for memories by using a map UI and by searching for specific places.

This app is being developed as part of my Software Engineering Course at [Coyotiv - School of Software Engineering](https://www.coyotiv.com/school-of-software-engineering/). It features two main applications: a backend developed with [Node.js](https://nodejs.org/en/), [Mongoose](https://mongoosejs.com), [Express.js](https://expressjs.com)
and [MongoDB](https://www.mongodb.com); a frontend application made with [Vue.js](https://vuejs.org)
and [Axios](https://www.npmjs.com/package/axios); development and production environments using [Docker](https://www.docker.com) containers; and automated testing using [Jest](https://jestjs.io).

### Wireframes

You can check the in-development app wireframes [here](https://mateusk.github.io/mnemo-wireframe/).

### Built With

- [Node.js](https://nodejs.org/en/)
- [Mongoose](https://mongoosejs.com)
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Jest](https://jestjs.io)
- [Docker](https://www.docker.com)
- [Vue.js](https://vuejs.org)
- [Axios](https://www.npmjs.com/package/axios)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js](https://nodejs.org/en/download/package-manager/)
- [Docker](https://docs.docker.com/get-docker/)
- A code editor or IDE ([Visual Studio Code](https://code.visualstudio.com) recommended)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/mateusk/mnemo.git
   ```

2. Install NPM packages for `frontend` and `backend` applications. From the project root folder:

   ```sh
   cd frontend
   npm install
   ```

   ```sh
   cd backend
   npm install
   ```

3. With Docker Desktop running, install MongoDB in a Docker container, by executing in terminal:

   ```sh
   docker pull mongo
   docker run --name mongodb -p 27017:27017 -d mongo
   ```

<!-- USAGE EXAMPLES -->

## Running the app

1. Start the development environment in terminal by running:

   ```sh
   docker-compose up
   ```

2. To add some dummy data to the app database, go to the following URLs using your browser:

   - http://mnemo.localhost/api/users/initialize
   - http://mnemo.localhost/api/memories/initialize
   - http://mnemo.localhost/api/places/initialize

3. The app should be running at: http://mnemo.localhost/. At the moment the fronted app is really simple, only displaying data fetched using the REST API from the backend.

## Running tests

While the app is running (using the `docker-compose up` command), automated tests can be run in a second terminal instance by executing the following from the project root:

```sh
docker-compose run --rm backend npm run test
```

At the moment, only three backend endpoint tests are implemented (for `/api/users`, `/api/places` and `/api/memories` endpoints).

<!-- ROADMAP -->

<!-- ## Roadmap

See the [open issues](https://github.com/mateusk/mnemo/issues) for a list of proposed features (and known issues). -->

<!-- CONTRIBUTING -->

## Contributing

This is an open source project, therefore anyone is invited to contribute. To do so:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/mateusk/mnemo/main/LICENSE) for more information.

<!-- CONTACT -->

## Contact

Mateus Knelsen

[@mateusknelsen](https://twitter.com/mateusknelsen)

[hello@mateus.works](mailto:hello@mateus.works)

Portfolio: [https://mateus.works](https://mateus.works)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- Special thanks to all [Coyotiv - School of Software Engineering](https://www.coyotiv.com/school-of-software-engineering/) mentors: [Armağan Amcalar](https://arm.ag), [Stephen Ingram](https://www.linkedin.com/in/stephen-ingram-3078aa19/), [Mihriban Minaz](https://www.linkedin.com/in/mihriminaz/), [Furkan İlgenci](https://www.linkedin.com/in/furkanilgenci/) and [Yusuf Yalim](https://about.me/yusufyalim)
- My wife and life partner [Paloma Oliveira](http://discombobulate.me)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/mateusk/mnemo.svg?style=for-the-badge
[contributors-url]: https://github.com/mateusk/mnemo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mateusk/mnemo.svg?style=for-the-badge
[forks-url]: https://github.com/mateusk/mnemo/network/members
[stars-shield]: https://img.shields.io/github/stars/mateusk/mnemo.svg?style=for-the-badge
[stars-url]: https://github.com/mateusk/mnemo/stargazers
[issues-shield]: https://img.shields.io/github/issues/mateusk/repo.svg?style=for-the-badge
[issues-url]: https://github.com/mateusk/mnemo/issues
[license-shield]: https://img.shields.io/github/license/mateusk/repo.svg?style=for-the-badge
[license-url]: https://github.com/mateusk/mnemo/main/LICENSE
[linkedin-url]: https://www.linkedin.com/in/mateus-knelsen/
