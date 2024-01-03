# Contacts Management Application - Backend

This repository contains the backend code for a Contacts Management Application, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to manage their contacts by providing CRUD operations through a RESTful API.



## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone <https://github.com/mohammodrubel/Task-Backend.git>
    ```

2. Install dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Set up the environment variables:

    Create a `.env` file in the root of the `backend` folder with the following content:

    ```env
    PORT=9000
    MONGODB_URI=mongodb://localhost:9000/contacts
    ```

    Adjust the `PORT` and `MONGODB_URI` values as needed.

4. Run the application:

    ```bash
    npm start
    ```

The backend server should now be running on the specified port.

## Project Structure

The project follows a standard structure for a Node.js and Express.js application. Key directories include:

- `controllers`: Handles the logic for each API endpoint.
- `models`: Defines the MongoDB schema using Mongoose.
- `routes`: Contains route definitions for each API endpoint.
- `service`:Handel database business logic.

## Configuration

Adjust the configuration in the `.env` file for the desired port and MongoDB URI.

## API Endpoints

### Add Contacts

- **Endpoint:** `api/v1/contact/create-contact`
- **Method:** `POST`
- **Request Body:**

    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "123-456-7890",
        "address": "123 Main St",
        "profilePicture": "https://example.com/profile.jpg"
    }
    ```

- **Response:**

    ```json
    {
        "success": true,
        "message": "Contact create successfully",
        "data": {
            "contact": {
                "_id": "contact-id",
                "name": "John Doe",
                "email": "john.doe@example.com",
                "phone": "123-456-7890",
                "address": "123 Main St",
                "profilePicture": "https://example.com/profile.jpg"
            }
        }
    }
    ```

### Get All Contacts

- **Endpoint:** `/api/v1/contact/`
- **Method:** `GET`
- **Response:**

    ```json
    {
        "success": true,
        "message": "Contacts retrieved successfully",
        "data": {
            "contacts": [
                {
                    "_id": "contact-id",
                    "name": "John Doe",
                    "email": "john.doe@example.com",
                    "phone": "123-456-7890",
                    "address": "123 Main St",
                    "profilePicture": "https://example.com/profile.jpg"
                },
                // ... other contacts
            ]
        }
    }
    ```

### Update Contact

- **Endpoint:** `/api/v1/contact/:id`
- **Method:** `PUT`
- **Request Params:**
    - `id`: Contact ID

- **Request Body:**

    ```json
    {
        "name": "Updated Name",
        // ... other updated fields
    }
    ```

- **Response:**

    ```json
    {
        "success": true,
        "message": "updated successfully",
        "data": {
            "contact": {
                "_id": "contact-id",
                "name": "Updated Name",
                // ... other updated fields
            }
        }
    }
    ```

### Delete Contact

- **Endpoint:** `api/v1/contact/:id`
- **Method:** `DELETE`
- **Request Params:**
    - `id`: Contact ID

- **Response:**

    ```json
    {
        "success": true,
        "message": "Contact deleted successfully"
    }
    ```

### Mark as Favorite

- **Endpoint:** `/api/v1/contact/toggle/:id`
- **Method:** `PUT`
- **Request Params:**
    - `id`: Contact ID

- **Response:**

    ```json
    {
        "success": true,
        "message": "Contact marked as favorite successfully",
        "data": {
            "contact": {
                "_id": "contact-id",
                "name": "John Doe",
                "isFavorite": true
            }
        }
    }
    ```

## Error Handling

The application handles various types of errors, including:

- Mongoose validation errors
- Mongoose cast errors
- Duplicate contact errors

Errors are returned in the following format:

```json
{
    "success": false,
    "message": "Error message",
    "errorSource": [
        {
            "path": "Field name",
            "message": "Something went wrong"
        },
        // ... other relevant information
    ]
}
