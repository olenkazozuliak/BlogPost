# Node Blog Project

This project is a simple Node.js blog application using the Express framework and MongoDB as the database. It provides basic functionality for creating, editing, and deleting blog posts.

## Project Structure

The project structure is organized as follows:

- `index.js`: The main entry point of the application.
- `routes/blogRoutes.js`: Defines the routes for handling different functionalities such as adding, editing, and deleting posts.
- `views/`: Contains EJS templates for rendering different pages.
- `models/`: The data model for the blog posts.

## Prerequisites

- Node.js installed on your machine.
- MongoDB Atlas account and a cluster set up.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the project root and add your MongoDB Atlas connection string:

    ```env
    MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
    PORT=3000
    ```

4. Run the application:

    ```bash
    npm start
    ```

## Usage

- Access the application in your web browser at [http://localhost:3000](http://localhost:3000).
- Navigate to the main page or the "Add post" page.
- Create, edit, or delete posts as needed.

## Dependencies

- Express: A fast, unopinionated, minimalist web framework for Node.js.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- Body-parser: Middleware to parse incoming request bodies.
- Method-override: Middleware to support HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

## Routes

- **GET `/`**: Displays the main page with a list of posts.
- **GET `/add-post`**: Displays the "Add post" page.
- **POST `/add-post`**: Handles the addition of a new post.
- **GET `/posts`**: Displays all posts.
- **GET `/edit-post/:id`**: Displays the "Edit post" page for a specific post.
- **PUT `/edit-post/:id`**: Handles the editing of a post.
- **DELETE `/posts/:id`**: Deletes a specific post.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Make sure to follow the [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
# BlogPost
