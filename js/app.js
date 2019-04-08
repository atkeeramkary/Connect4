
console.log("Hello World");
// $(document).ready(function() {

// 	console.log('working');
// });


// class C4Grid {
// 	constructor(selector){
// 		this.ROWS = 6;
// 		this.COLS = 7;
// 		this.selector = selector
		
// 	}
// 	createGrid() {
// 		const $board = $(this.selector);

// 		console.log($board);
// 		for (let row = 0; row < this.ROWS; row++){
// 			const $row = $('<div>')
// 			.addClass('row');
// 			for (let col = 0; col < this.COLS; col++) {
// 				const $col = $('<div>')
// 				.addClass('col empty');
// 				$row.append($col);	
// 			}
// 			$board.append($row); 
// 		}

		
// 	}


// } 

// $(document).ready(function() {
// const connect4 = new C4Grid('#connect4')

// });
const game = {
	whoseTurn: "player1",
	clickSquare: function() {
		// if player1s turn
		// make the square clicked red
		// else
		// make it blue



	}
}

const anil = {
	gender: "male",
	shirtColor: "grey", 
	sayHello() {

		console.log("hello I am wearing a " + this.shirtColor + " shirt.");
	}
}




const pickSquare = (event) => {

	console.log(event)

	// console.log(event.target.id); // be sure to check event.target -- that's where the info is
	// event is what will be passed into the handler as an argument

	// event.target is the vanilla and we need to turn it back to jquery for it function properly
	console.log(event.target);

	const $squareSelection = $(event.target)

	console.log($squareSelection);

	// $squareSelection.css('background-color', 'red');

	// call method in game object
	//game.clickSquare($squareSelection) 

	if (game.whoseTurn == "player1") {
		$squareSelection.css('background-color', 'red');
		game.whoseTurn = "player2"

	} 
	else {
		$squareSelection.css('background-color','blue');
		game.whoseTurn = "player1"

	}

	
	// if player1s turn
	// make the square clicked red
	// else
	// make it blue

}


const allSquares = $('.square');
allSquares.on("click", (event) => {
	console.log(event)

	pickSquare(event)
}); // when allSquares is clicked, pickSquare will run


// function switchPlayer(event) { 
		

// 		// const pickSquare1 = (event) => {

// 	// console.log(event.target.id); // be sure to check event.target -- that's where the info is
// 	// event is what will be passed into the handler as an argument

// 	// event.target is the vanilla and we need to turn it back to jquery for it function properly
// 	console.log(event.target);

// 	console.log("switch player now");


// 	const $squareSelection1 = $(event.target)


// 	console.log($squareSelection1);

// 	$squareSelection1.css('background-color', 'blue');

// }



// console.log(allSquares);

// const squares = $('#sq-6-1');
// $('#sq-6-1').click(function() {
// 	squares.css('background-color', 'red');
// });
// const squares1 = $('#sq-6-2');
// $('#sq-6-1').click(function() {
// 	squares1.css('background-color', 'red');
// });

// const squares2 = $('#sq-6-3');
// $('#sq-6-1').click(function() {
// 	squares2.css('background-color', 'red');
// });

// allSquares.addEventListener('click', pickSquare)

// const $square = document.querySelectorAll('.square')
// $square.on('click', () => {

// 	console.log("you picked square # " ${'.square'});

/// listen for .square
// see if you can print the id -- hint: use event.target
// const square = document.getElementById('sq-6-1')

// const logTheClick = () => {
//   console.log("you picked square 6-1");

// }

// square.addEventListener('click', logTheClick)


// const square2 = document.getElementById('sq-6-2')
// const logTheClick1 = () => {
//   console.log("you selected square # sq-6-2");
//   square2.style.backgroundColor = "red";
// }

// square2.addEventListener('click', logTheClick1)


// const firstMove = document.getElementById('connect-4-grid')
// const clickLog = () => {

// 	console.log("you selected square # " );
// }

// I need to use jquery to turn 'connect-4-grid' into an event listener which listens and responds to clicks 
// first i need to declare what is 'connect-4-grid'