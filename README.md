# React User Management App

This is a React-based web application where an **admin** can log in and manage a list of users. It allows the admin to perform CRUD operations (Create, Read, Update, Delete) on the users using the free **ReqRes API** (https://reqres.in). 

The app also supports features such as user pagination, viewing user details, and managing the login state using React Context.

## Features

- **Login**: Admin can log in to the system.
- **View Users List**: After logging in, the admin can view a paginated list of users.
- **View User Details**: Admin can click on any user to view their detailed information.
- **Create User**: Admin can create a new user.
- **Edit User**: Admin can edit existing users.
- **Delete User**: Admin can delete users, with confirmation via a modal.
- **Logout**: Admin can log out of the system.

## Tech Stack

- **ReactJS**: Frontend library for building the user interface.
- **React Router**: For managing routes and navigation within the app.
- **Axios**: For making API requests to the backend (ReqRes API).
- **CSS Modules**: For modular CSS styling.
- **React Context API**: For managing the authentication state across the app.

## Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js** and **npm**

## Getting Started

Follow these steps to set up the project locally:


**Login Admin Information**: 
   - Clearly states the login credentials for the **admin**:
     - **Email**: `eve.holt@reqres.in`
     - **Password**: `cityslicka`
   - These credentials are required to log in as an **admin** to the application.

Everything else in the app remains the same, with detailed instructions on how to log in and use the user management features.


###  Clone the Repository

```bash
git clone https://github.com/NeginKhademian/userManagement.git
cd react-user-management-app


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

