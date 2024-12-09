# API Application - CRUD with MongoDB

This project is an API application designed to perform Create, Read, Update, and Delete (CRUD) operations, with data stored in a MongoDB database.

## Features

- **Create**: Add new data to the database.
- **Read**: Retrieve data from the database.
- **Update**: Modify existing data in the database.
- **Delete**: Remove data from the database.

## Prerequisites

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (or access to MongoDB Atlas)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
Install Dependencies:

bash
Copiar código
npm install
Set Up Environment Variables: Create a .env file in the root directory with the following:

env
Copiar código
MONGO_URI=<your-mongodb-connection-string>
PORT=<port-number>
Run the Application:

bash
Copiar código
npm start
Endpoints
The API provides the following endpoints:

Base URL: http://localhost:<port>
GET /items: Retrieve all items from the database.
POST /items: Add a new item to the database.
GET /items/:id: Retrieve a specific item by ID.
PUT /items/:id: Update an existing item by ID.
DELETE /items/:id: Delete an item by ID.
Project Structure
bash
Copiar código
├── src
│   ├── controllers
│   │   └── itemController.js
│   ├── models
│   │   └── itemModel.js
│   ├── routes
│   │   └── itemRoutes.js
│   └── app.js
├── .env
├── package.json
├── README.md
└── server.js
Usage
Use a tool like Postman or cURL to interact with the API.
Ensure the MongoDB service is running locally or connected to MongoDB Atlas.
Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
