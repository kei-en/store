# Muimbaji Store

Muimbaji Store is a submodule project that handles the shop part of the Muimbaji web app. Muimbaji is the main project, and this submodule serves as the ecommerce platform for selling the artist's merchandise.

## Project Overview

The project is divided into two main parts:

### Frontend

The frontend is bootstrapped with create-next-app. It fetches data from the backend and showcases product information, as well as user information if they are logged in.

- Frontend Directory: [frontend](./frontend/)
- Frontend README: [Frontend Readme](./frontend/README.md)

### Backend

The backend is built using Strapi and is connected to a PostgreSQL database. It provides an admin panel for managing products on the main site.

Backend Directory: [store-backend](./store-backend/)
Backend README: [Backend Readme](./store-backend/README.md)

## Installation

To set up the Muimbaji Store, follow these steps:

Clone the repository with submodules: git clone --recurse-submodules https://github.com/kei-en/store
Navigate into the directory: cd store
Install dependencies for both frontend and backend:

- [Frontend Installation](./frontend#installation)
- [Backend Installation](./store-backend#installation)

## Usage

Ensure both the frontend and backend are running simultaneously. Follow the instructions in the respective README files for details:

- [Frontend Usage](./frontend#usage)
- [Backend Usage](./store-backend#usage)

## Related Projects

- [Muimbaji](https://github.com/kei-en/muimbaji): The main project that extends to this (store) submodule

## Author

- **Karanja J Njuguna** - <[kei-en](https://github.com/kei-en)>
