# Rosebud

Wordle with a twist for film buffs. Instead of guessing randomly, players guess a film title using keyphrase hints provided in addition to the color hints. Play the game [here](https://rosebud-wordle.herokuapp.com/), hosted on Heroku.

* The on-screen keyboard is still under development. So, only available for computer users for now.

## About

Guess a 7-letter movie title (single word) in 6 attempts using 3 hints provided.

* Orange denotes letter in the title at the right position.
* Blue denotes letter in the title NOT at the right position.
* Grey denotes letter not in the title.

## How to run locally

1. Clone the repository on your local device using `git clone https://github.com/visajshah/rosebud.git`.
2. Run `npm install` to install all the required dependencies.
3. Start the application using `npm run start`.
4. Start the JSON server using `json-server ./data/db.json --port 3001`.
