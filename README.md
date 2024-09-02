# Movie Search Application

This is a frontend movie search application that allows users to search for movies, view detailed information, and save their favorite movies. The app features a responsive design, ensuring compatibility across various devices.

## Deployment

## Features

### 1. Search Functionality
- **Dynamic Search Bar:** Users can enter a movie title in the search bar, and results are displayed dynamically as they type (auto-suggestion).
- **No Results Handling:** The app gracefully handles cases where no results are found by displaying a user-friendly message.

### 2. Movie Details
- **Detailed View:** Users can click on a movie from the search results to view more detailed information.
- **Information Displayed:** Includes movie title, release date, synopsis, genre, cast, and ratings.
- **Visuals:** A movie poster or thumbnail image is displayed alongside the movie details.

### 3. Favorites
- **Save to Favorites:** Users can save movies to their favorites list.
- **Persistent Data:** Favorites are stored using local storage or session storage, so the data persists even after the browser is closed or refreshed.

### 4. Responsive Design
- **Mobile-Friendly:** The app is designed to be fully responsive, ensuring a smooth experience on mobile devices.
- **Tablet and Desktop Compatibility:** The layout adapts to larger screens, maintaining usability across different devices.

## Technologies Used

- **HTML5 & CSS3:** For the structure and styling of the application.
- **JavaScript:** For handling dynamic functionality such as search and favorites.
- **API Integration:** Fetching movie data from a public movie database API (e.g., OMDb API, The Movie Database API).
- **Responsive Design Framework:** (Optional) You may use a framework like Bootstrap or custom CSS for responsiveness.
- **Local Storage/Session Storage:** For persisting the favorites list.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/charanbadagala/movie-search-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd movie-search-app
    ```
3. Open the `index.html` file in your preferred web browser:
    ```bash
    open index.html
    ```

## Usage

1. **Search for a Movie:** Start typing the title of a movie in the search bar. The search results will update dynamically as you type.
2. **View Movie Details:** Click on a movie from the search results to view detailed information.
3. **Add to Favorites:** Click the "Add to Favorites" button on the movie details page to save the movie to your favorites list.
4. **View Favorites:** Access your favorites list from the navigation menu. Your saved movies will be displayed here.
