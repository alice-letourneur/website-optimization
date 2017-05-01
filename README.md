## Website Performance Optimization portfolio project

[![Status](https://img.shields.io/badge/status-in%20progress-yellow.svg)]()

My challenge is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up.

### Part 1: Optimize PageSpeed Insights score for index.html

#### Goal 

`index.html` should achieve a PageSpeed score of at least 90 for Mobile and Desktop.

#### Optimizations

- [x] Optimize images for index.html
- [x] Minify JS
- [x] Minify CSS
- [x] Minify HTML
- [x] Unblocking CSS for print style With Media Queries
- [x] Unblocking CSS for smartphone portrait mode With Media Queries
- [x] Removed In Element CSS
- [x] Remove render-blocking JavaScript : GA script
- [x] Using web font loader
- [x] Inlining critical CSS

### Part 2: Optimize Frames per Second in pizza.html

#### Goal

Optimizations made to `views/js/main.js` make `views/pizza.html` render with a consistent frame-rate at 60fps when scrolling.
Time to resize pizzas is less than 5 ms using the pizza size slider on the views/pizza.html page. Resize time is shown in the browser developer tools.

#### Optimizations

`in progress`

- [x]  Adding requestAnimationFrame to allow updatePositions function to be called depending on my browser's frame rate.
 
