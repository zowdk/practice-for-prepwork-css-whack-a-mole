# a/A Open Project: CSS Whack-A-Mole

[app Academy](https://www.appacademy.io/) is a San Francisco-based software engineering bootcamp that offers courses both online and on campus. This repository contains my personal solution to "CSS Whack-A-Mole" as part of [a/A Open](https://www.appacademy.io/course/app-academy-open), the free version of a/A's entire online full-stack curriculum. 

 <img src="./img/gameplay-thumbnail.png" alt="one mole popping its shead up out of a mound of dirt" width="900"/>

## Live Site Demo

Give Whack-A-Mole a try [here](https://zowdk.github.io/practice-for-prepwork-css-whack-a-mole/) 

## Objective

The objective was to use CSS positioning, hover effects, transitions and overflow to create a a Whack-A-Mole game with provided images.  

## Implementation Highlights

### Make it responsive

 - So that all the moles can be seen and the game can still be played on smaller screens.
 - To practice using CSS grid and media queries.


<!--  ![Whack-A-Mole](img/responsive-thumbnail.png) { width: 320px } -->
 <img src="./img/responsive-thumbnail.png" alt="whack-a-mole at smaller screens" width="350"/>


### Expanded playing field

- Added more moles to make use of the entire screen, a fuller grid, and for some added challenge.

 <img src="./img/gameplay-thumbnail.png" alt="one mole popping its shead up out of a mound of dirt" width="900"/>

### Animated "whacked" moles

- Created a visual effect when a popped-up mole is "whacked"

https://user-images.githubusercontent.com/80650207/193791431-e8261479-2ead-4460-aa45-0f107a1a45e2.mov


## User Stories

- Layout of the mole-head and mole-hill should be layered so that the dirt-pile appears in front of the mole. 
- The mole-head and dirt-pile should be absolutely positioned. 

- The mole-head and dirt-pile should be contained within a parent element called 'wgs" or 'whackable game space'. 
- The 'wgs' should have relative positioning. 

- The mole-head, dirt-pile and their container should each have meaningful class names to represent their HTML elements.
- The mole-head should be properly aligned within the dirt-pile, so the mole can go down into its hole to hide from your whacker.

- Each mole-head should change from 'visible' to a "hidden state" and hide vertically beneath the dirt-pile after ~2.5 seconds, or when clicked.
- Each 'wgs' element should be contained wtihin a div 'pf' to create more specific layouts for the 'playing field'. 

- The 'pf' should have a display of grid to clearly define the rows and columns. 
- Media queries should be used to make sure the mole-heads can be seen on smaller screen sizes. 

- Mole-heads and dirt-piles should shrink proportionally along with the 'pf' so they can be seen on smaller screens.
- A scoreboard should display the number of moles-left and the total-points.

- Players should be given a preset number of moles per game, so we know when the game is over. 
- When a popped-up mole-head gets clicked/ 'whacked', the scoreboard should add 1 point, and the moles-left counter should decrease by 1 .  

- There should be a visual effect so that the player knows when they have clicked on/ 'whacked' a popped-up mole-head. 
- After there are no moles left, the scoreboard should display "Game Over". 

## Known Issues

### Offset animation for "whacked" moles at smaller screens


https://user-images.githubusercontent.com/80650207/193823465-3b9dfd8e-eb61-4641-acb9-4bd778d63afb.mov

## Acknowledgements 

- Exploding shapes animation inspired by [Souleste](https://codepen.io/Souleste)

< /  > by [@zowdk](https://twitter.com/zowdk)



