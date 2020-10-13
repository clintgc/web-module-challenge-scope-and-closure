// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter 1 code uses counterMaker function to define the value of const counter1 using private variables to count where as counter2 code declares a global scope variable and counts inside the function and then returns the value.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses closure because it uses a function to define the value of the object counter1
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter1 code is important when you don't want the variable to be changed by other functions and when you want to avoid namespace issues. counter2 when you know other functions will be changing the value of the global variable.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(maxScore)
{
  return Math.round(Math.random() * Math.floor(maxScore));
}
console.log(inning(2));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

// finalScore uses local scope variables

function finalScore1(inning, totalInnings){
  let home = 0, away = 0;
  for (var i = 1; i <= totalInnings; i++)
  {
    home += inning(2);
    away += inning(2);
  }
  return {home, away};
};

console.log(finalScore1(inning, 9))

//finalScore uses local scope object
 
function finalScore2(inning, totalInnings){
  let scores = {home: 0, away:0}
  for (var i = 1; i <= totalInnings; i++)
  {
    scores.home += inning(2);
    scores.away += inning(2);
  }
  return scores;
};

console.log(finalScore2(inning, 9))



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

/*function scoreboard(inning, totalInnings) 
{
  let scores = {home: 0, away:0}
  for (var i = 1; i <= totalInnings; i++)
  {
    scores.home += inning(2);
    scores.away += inning(2);
    console.log(`${i} inning: Away ${scores.away} - Home ${scores.home}`);
  }
  return `Final Score: Away ${scores.away} - Home ${scores.home}`;

};


console.log(scoreboard(inning, 9))
*/

function inning(){
  const points = Math.round(Math.random() * 2);
    return points;
}

//function for end game score
function finalScore(inning,inningNumber){
  let score = {Home: 0, Away:0};
for (let i =0; i < inningNumber; i++){
  score.away += inning();
  score.home += inning();
  
}
  return finalScore();
}

//function for score per inning
function getInningScore(inning, inningNumber)
  {
    let score ={home: 0, away:0}
    for (var i = 1; i <= inningNumber; i++)
    {
      score.away += inning();
      score.home += inning();
      console.log(`${i} inning: Away ${score.away} - Home ${score.home}`);
    }
    return `Final Score: Away ${score.away} - Home ${score.home}`;
  };

//function to return all in a statement
function scoreboard(getInningScore, inning, inningNumber)
  {
    return getInningScore(inning, inningNumber); 
  };
  console.log(scoreboard(getInningScore, inning, 9));