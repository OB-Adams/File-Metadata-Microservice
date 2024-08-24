# File Metadata Microservice

This is a Node.js microservice that allows users to upload a file and get back its metadata, including the file's name, mimetype, and size.

## Overview

This microservice accepts file uploads via a POST request to the /api/fileanalyse endpoint and responds with metadata about the uploaded file.

## Features

- Upload a file and retrieve its metadata.
- Metadata includes the file's name, mimetype, and size.

## Endpoints

### GET /

- Description: Serves the homepage.
- Response: An HTML page with a form for file upload.

### POST /api/fileanalyse

- Description: Analyzes the uploaded file and returns its metadata.
- Request Body: A file uploaded with the form field name upfile.
- Response: JSON object containing the file's metadata.
   {
    "name": "filename.ext",
    "mimetype": "file/type",
    "size": "12345 bytes"
  }
  
## Installation and Setup

1. Clone the repository:
```
git clone https://github.com/OB-Adams/file-metadata-microservice.git
cd file-metadata-microservice
```
   
2. Install dependencies:
```
npm install
```
   
3. Create a `.env` file with the following content:
```
PORT=3000
```
   
4. Start the server:
```
node server.js
```
   
5. Navigate to http://localhost:3000 in your browser.

## Project Structure

- views/: Contains the HTML file served at the root route.
- public/: Contains static assets like CSS and JavaScript.
- server.js: Main server file where the Express app is configured.

## Dependencies

- express: Web framework for Node.js.
- cors: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- express-fileupload: Middleware for handling file uploads.
- dotenv: Loads environment variables from a .env file.

## Environment Variables

- `PORT`: The port on which the server listens (default is `3000`).

## License

This project is licensed under the MIT License.