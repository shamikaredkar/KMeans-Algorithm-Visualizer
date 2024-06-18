# KMeans-Algorithm-Visualizer

![K-Means Visualizer](https://github.com/shamikaredkar/KMeans-Algorithm-Visualizer/blob/main/KMeans-Preview.png)

## Purpose
The K-Means Visualizer is a web application that helps users understand and visualize the K-Means clustering algorithm. It provides an interactive platform to experiment with different numbers of data points and clusters, visualizing how the algorithm iteratively updates centroids and assigns data points to clusters.

## Features
- Initialize centroids randomly.
- Assign data points to the nearest centroid.
- Update centroids based on the average of assigned points.
- Converge when centroids no longer move significantly.
- Display the clustering process step-by-step.
- Provide a detailed explanation of each stage of the K-Means algorithm.
- Interactive UI for user input and control.

## Usage
- Enter the number of data points and clusters.
- Click the "New" button to initialize data points and centroids.
- Click the "Start" button to begin the clustering visualization.
- Click the "Stop" button to pause the visualization.
- Click the "Restart" button to start the clustering process from the beginning.

## Code Structure
### HTML
`index.html`: The main HTML file that includes the structure of the app.

### CSS
`style.css`: Styles the main components of the app using Bulma and custom styles.

### JavaScript
`k-means.js`: Handles the functionality of the app, including the K-Means algorithm and DOM manipulation.

`dom.js`: Manages the interaction with the user interface, such as opening and closing modals and handling button clicks.

### Bulma
The K-Means Visualizer uses Bulma, a modern CSS framework, for styling the components. Bulma provides a clean and responsive design with minimal effort, ensuring the app looks great on all devices.

## How It Works
### HTML
The main container of the app includes the input fields for the number of data points and clusters, the control buttons, and the SVG element where the clustering visualization is displayed.

### CSS
The CSS styles the body, the main container, the input fields, buttons, and the modals. Bulma is used for overall layout and responsiveness, while custom styles ensure the app's unique look and feel.

### JavaScript
The JavaScript files include the following main functions:

- `init()`: Initializes the centroids and data points based on user input.
- `start()`: Starts the clustering process by setting intervals for the epoch and make functions.
- `epoch()`: Alternates between moving centroids and updating groups.
- `stop()`: Stops the clustering process by clearing the intervals.
- `restart()`: Resets the centroids and data points to their initial state.
- `make()`: Updates the SVG elements to reflect the current state of the data points and centroids.
- `moveCentroid()`: Calculates the new positions of the centroids based on the average of the assigned data points.
- `updateGroups()`: Assigns each data point to the nearest centroid.

## Main Functions in Detail
- `init()`: Initializes the centroids and data points based on user input. Centroids are randomly placed within the SVG canvas, and data points are generated randomly.
- `start()`: Starts the clustering process by setting intervals for the `epoch` and `make` functions.
- `epoch()`: Alternates between moving centroids and updating groups. It first moves the centroids to the average positions of their assigned data points, then reassigns data points to the nearest centroids.
- `stop()`: Stops the clustering process by clearing the intervals.
- `restart()`: Resets the centroids and data points to their initial state. It repositions the centroids and data points to their original locations.
- `make()`: Updates the SVG elements to reflect the current state of the data points and centroids. It updates the positions and colors of the data points and centroids, and draws lines between data points and their assigned centroids.
- `moveCentroid()`: Calculates the new positions of the centroids based on the average of the assigned data points.
- `updateGroups()`: Assigns each data point to the nearest centroid by calculating the Euclidean distance between each data point and each centroid.

