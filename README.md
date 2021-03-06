## Website Performance Optimization portfolio project

[![Status](https://img.shields.io/badge/status-completed-green.svg)]()

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
Time to resize pizzas is less than 5 ms using the pizza size slider on the views/pizza.html page.

#### Optimizations


- [x]  Optimising scroll event with window.requestAnimationFrame
- [x]  Reducing the number of images appended on the background
- [x]  Moving the selection of elements with class .mover outside the function updatePositions as we only need to select them once
- [x]  Moving access to document.body.scrollTop outside of the loop to improve performance
- [x]  Resize sliding pizza image to avoid having to resize element in the function that initially generates the pizzas
- [x]  Moving the selection of elements with class .randomPizzaContainer outside the function changePizzaSizes as we only need to select them once
- [x]  Removing calculation of dx function as it is unnecessary, size is now calculated only using the SizeSwitcher function.

### Test it

1. Clone or download the repository:
	```bash
	$ git clone https://github.com/alice-letourneur/website-optimization.git
	```

2. Go to the root of the project and install all project's dependencies:
	```bash
	$ npm install
	```

3. To implement the task runner type:
	```bash
	$ gulp
	```

A working post-task runner code will be available in 'dist' folder.

4. Run a local server
	```bash
	$> cd /path/to/your-project-folder
	$> python -m SimpleHTTPServer 8080
	```

5. Open a browser and visit localhost:8080

or 

Go to click this link https://alice-letourneur.github.io/website-optimization/


