# My RRWeb Service

This is a Node.js service that provides data storage and retrieval for RRWeb data monitoring.

## Installation

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Install the dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the server:

   ```shell
   npm start
   ```

2. Store RRWeb data:

   Send a POST request to `/store` with the RRWeb data in the request body.

3. Retrieve RRWeb data:

   Send a GET request to `/retrieve` to retrieve the stored RRWeb data.

## Project Structure

```
my-rrweb-service
├── src
│   ├── server.js
│   ├── routes
│   │   ├── store.js
│   │   └── retrieve.js
│   └── controllers
│       ├── storeController.js
│       └── retrieveController.js
├── package.json
└── README.md
```

- `src/server.js`: Entry point of the Node.js server. Sets up middleware and routes.
- `src/routes/store.js`: Handles the route for storing RRWeb data.
- `src/routes/retrieve.js`: Handles the route for retrieving RRWeb data.
- `src/controllers/storeController.js`: Processes and stores RRWeb data.
- `src/controllers/retrieveController.js`: Retrieves stored RRWeb data.
- `package.json`: Configuration file for npm.
- `README.md`: Documentation for the project.

## Dependencies

- express: ^4.17.1
- body-parser: ^1.19.0

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.