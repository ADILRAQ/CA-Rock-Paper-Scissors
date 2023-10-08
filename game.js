"use strict";

const   choiceValid = choice => choice === 'rock' || choice === 'paper' || choice === 'scissor';

const getRandomChoice = function()
{
	let randomNb = Math.floor(Math.random() * 3);

	if (randomNb == 0)
		return 'rock';
	else if (randomNb == 1)
		return 'paper';
	else
		return 'scissor';
}

function	getResult(player, opponent)
{
	if (player == opponent)
		return ('Draw');
	// WIN:
	// paper -> rock  &&  rock -> scissor  &&  scissor -> paper
	if ((player == 'paper' && opponent == 'rock')
		|| (player == 'rock' && opponent == 'scissor')
		|| (player == 'scissor' && opponent == 'paper'))
		return ('Player');
	return ('Opponent');
}

(function	startGame()
{
	// Initialaize the variable with your choice
	const   playerChoice = 'rock';

	if (choiceValid(playerChoice))
	{
		const   opponentChoice = getRandomChoice();

		console.log(`OPPONENT: ${opponentChoice}`);
		console.log(`Player: ${playerChoice}`);

		const	result = getResult(playerChoice, opponentChoice);

		if (result == 'Draw')
			console.log('Draw, there\'s no winner');
		else
			console.log(`->> Winner is: ${result} <<-`);
	}
	else
		console.log("Bad choice, Please enter : 'rock', 'paper' or 'scissor !");
})();