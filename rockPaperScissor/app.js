let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
	const choice = ['r','p','s'];
	const randomNumber = Math.floor(Math.random()*3);
	return choice[randomNumber];
}

function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissor";
}

function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "USER".fontsize(3).sup();
	const smallCompWord = "COMP".fontsize(3).sup();
	const userchoice_div = document.getElementById(userChoice);
	result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " Beats " + convertToWord(computerChoice) + smallCompWord + ", You win!";
	userchoice_div.classList.add('green-glow');
	setTimeout(() => userchoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "USER".fontsize(3).sup();
	const smallCompWord = "COMP".fontsize(3).sup();
	const userchoice_div = document.getElementById(userChoice);
	result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " Loses to " + convertToWord(computerChoice) + smallCompWord + ", You Lost!";
	userchoice_div.classList.add('red-glow');
	setTimeout(() => userchoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice){
	const smallUserWord = "USER".fontsize(3).sup();
	const smallCompWord = "COMP".fontsize(3).sup();
	const userchoice_div = document.getElementById(userChoice);
	result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " Eqauls " + convertToWord(computerChoice) + smallCompWord + ", It's a Draw!";
	userchoice_div.classList.add('gray-glow');
	setTimeout(() => userchoice_div.classList.remove('gray-glow'), 500);
}

function game(userChoice){
	const computerChoice = getComputerChoice();	
	switch(userChoice+computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main(){
	rock_div.addEventListener('click', () => game("r")); 

	paper_div.addEventListener('click', () => game("p"));

	scissor_div.addEventListener('click', () => game("s"));
}

main();