# JobSample---Data-Intern

# Image Gallery Automation

This project consists of two main parts:

1. A JavaScript script that interacts with an HTML form to display images in a gallery.
2. A Node.js script that automates the process of retrieving, renaming, and organizing images from a public API.

# Image Gallery - Part 1

This is the first part of the project, which consists of a simple web application that allows users to search for images based on a keyword and display them in a gallery.

## Project Structure

Part1/ ├── node_modules/ # Dependencies installed via npm ├── public/ # Static files for the frontend │ ├── index.html # Main HTML file │ ├── script.js # JavaScript for handling user input and displaying images │ ├── style.css # Basic styles for the page ├── package.json # Project dependencies and scripts ├── package-lock.json # Auto-generated dependency lock file └── server.js # Express server to serve static files

## Technologies Used

- HTML, CSS, JavaScript (Frontend)
- Node.js and Express (Backend server for static file serving)
- Unsplash API (for fetching images)

## How It Works

1. The user enters a keyword into a search field on the webpage.
2. The frontend script (`script.js`) fetches an image related to that keyword from the Unsplash API.
3. The fetched image is displayed dynamically in the gallery section of the webpage.
4. The `server.js` file is a simple Express server that serves the static files inside the `public/` directory.

## Running the Project

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Install dependencies by running: npm install 
3. Start the server: node sever.js





## Part 2: Image Download and Categorization Automation (Backend)

This section is a Node.js script that automates downloading images by category, renaming them, and organizing them into folders.

**Technologies and tools used:**

- Node.js
- axios (HTTP client for API requests)
- fs and path modules (for file system operations)
- loremflickr.com API (for category-based image retrieval)

**How it works:**

- A list of predefined categories is set in the script (e.g., nature, technology, city).
- For each category, multiple images are downloaded from the API.
- Each image is renamed using the format `category_number.jpg`.
- Images are stored in local directories named after their respective categories.

## Running the Download Script

To run the backend automation script, follow these steps:

1. Make sure you have Node.js installed on your machine.
2. Install dependencies: "npm install axios"
3. Run the script:"node index.js"



