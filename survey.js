// Focus on the following:

//     The example usage shown at the beginning
//     The .question(query, callback) function
//     The .close() function


// Use their example code (copied below) to serve as our starting "boilerplate" code.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (listen) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
        rl.question("What's your favourite thing to eat for that meal?", (food) => {
          rl.question("Which sport is your absolute favourite?", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
              console.log(`${answer} likes doing ${activity} while listening ${listen}. Their favorite meal is ${meal} especially ${food}. Their favorite sport is ${sport} and superpower is ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

// Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:

//     What's your name? Nicknames are also acceptable :)
//     What's an activity you like doing?
//     What do you listen to while doing that?
//     Which meal is your favourite (eg: dinner, brunch, etc.)
//     What's your favourite thing to eat for that meal?
//     Which sport is your absolute favourite?
//     What is your superpower? In a few words, tell us what you are amazing at!
