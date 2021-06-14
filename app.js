const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [], //Step 1
    getGuess: function () {
        let input;
        
        
        do {
            input = parseInt(window.prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
        } while (isNaN (input) || input < this.smallestNum || input > this.biggestNum)

        return input
    },
    
    render: function (input) {
        const highOrLow = input < this.secretNum ? 'too low':'too high'

        if (input === parseInt(this.secretNum)){
            alert (`You won in ${this.prevGuesses.length} guesses!`)
        } else { 
            alert (`You're guess is ${highOrLow} . Previous guesses:${this.prevGuesses.join(', ')}`)
        }
    },


    play: function() {
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        console.log(this.secretNum) // Move back to the end of play: function at end!!!
        let userGuess
        do {
            userGuess = (this.getGuess ())
            console.log(userGuess)
            this.prevGuesses.push (userGuess)

            this.render(userGuess)

            console.log(this.prevGuesses)
        } while (userGuess !== this.secretNum);


        // let userGuess;
        // do {
        //     this.getGuess ()
        // } while (userGuess !== this.secretNum)
    }
}

game.play ()




//   Completing the following tasks will result in a working *Guess the Number* game:

//   1. Add a `prevGuesses` property to the `game` object initialized to an empty array.
//   2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: *Enter a guess between [smallestNum] and [biggestNum]:*. Hint - use a template literal for the prompt message.
//   3. Ensure that the `getGuess` method returns a value that:
//       - Is a *number*, not a *string*.
//       - Is between `smallestNum` and `biggestNum`, inclusive.
//       - Hints:
//           - This is a great use case for a `while` loop.
//           - `parseInt` returns `NaN` if the string cannot be parsed into a number.
//   4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
//       - Hint: this is a great use for a while loop (or even a do...while loop!)
//   5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
//       - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
//       - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
//       - Hints:
//           - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may have not built your program to use any, that's ok if that's the case!)
//           - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
//           - The list of previous guesses can be generated using the array `join` method.
//   6. The `play` method should end (`return`) when the guess matches `secretNum`.
