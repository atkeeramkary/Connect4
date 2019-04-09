
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
	fourInARow: false,
	clickSquare: function() {
		// if player1s turn
		// make the square clicked red
		// else
		// make it blue



	},



	checkWin: function() {
		// const columns = $('.column') 

		// $('.square').append(columns)	

		// for(i = 0; i < columns.length; i++) {
		// 	console.log("column" + i);
		// }

		
	}
}



const player1 = {
	slotsFilled: [],
	checkWin: function() {

		if (
			this.slotsFilled.includes("sq-1-7") && 
			this.slotsFilled.includes("sq-3-5") &&
			this.slotsFilled.includes("sq-2-6") &&
			this.slotsFilled.includes("sq-4-4") 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes("sq-1-6") && 
			this.slotsFilled.includes("sq-2-5") &&
			this.slotsFilled.includes("sq-3-4") &&
			this.slotsFilled.includes("sq-4-3") 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes("sq-1-5") && 
			this.slotsFilled.includes("sq-3-3") &&
			this.slotsFilled.includes("sq-2-4") &&
			this.slotsFilled.includes("sq-4-2") 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes("sq-1-4") && 
			this.slotsFilled.includes("sq-3-2") &&
			this.slotsFilled.includes("sq-2-3") &&
			this.slotsFilled.includes("sq-4-1") 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-7') && 
			this.slotsFilled.includes('sq-3-6') &&
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-5-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-6') && 
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-5-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-5') && 
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-5-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-4') && 
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-4-2') &&
			this.slotsFilled.includes('sq-5-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-7') && 
			this.slotsFilled.includes('sq-4-6') &&
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-6-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-6') && 
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-6-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-5') && 
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-6-2') 

		) {
			return true 
		}
		if (
			this.slotsFilled.includes('sq-3-4') && 
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-5-2') &&
			this.slotsFilled.includes('sq-6-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-7') && 
			this.slotsFilled.includes('sq-5-6') &&
			this.slotsFilled.includes('sq-6-5') &&
			this.slotsFilled.includes('sq-7-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-6') && 
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-6-4') &&
			this.slotsFilled.includes('sq-7-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-5') && 
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-6-3') &&
			this.slotsFilled.includes('sq-7-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-4') && 
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-6-2') &&
			this.slotsFilled.includes('sq-7-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-7') && 
			this.slotsFilled.includes('sq-3-6') &&
			this.slotsFilled.includes('sq-2-5') &&
			this.slotsFilled.includes('sq-1-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-6') && 
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-2-4') &&
			this.slotsFilled.includes('sq-1-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-5') && 
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-2-3') &&
			this.slotsFilled.includes('sq-1-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-4') && 
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-2-2') &&
			this.slotsFilled.includes('sq-1-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-5-7') && 
			this.slotsFilled.includes('sq-4-6') &&
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-2-4') 

		) {
			return true 
		}


		if (
			this.slotsFilled.includes('sq-5-6') && 
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-2-3') 

		) {
			return true 
		}


		if (
			this.slotsFilled.includes('sq-5-5') && 
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-2-2') 

		) {
			return true 
		}


		if (
			this.slotsFilled.includes('sq-5-4') && 
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-3-2') &&
			this.slotsFilled.includes('sq-2-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-7') && 
			this.slotsFilled.includes('sq-5-6') &&
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-3-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-5') && 
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-3-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-6') && 
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-3-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-4') && 
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-4-2') &&
			this.slotsFilled.includes('sq-3-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-7') && 
			this.slotsFilled.includes('sq-6-6') &&
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-4-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-6') && 
			this.slotsFilled.includes('sq-6-5') &&
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-4-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-5') && 
			this.slotsFilled.includes('sq-6-4') &&
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-4-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-4') && 
			this.slotsFilled.includes('sq-6-3') &&
			this.slotsFilled.includes('sq-5-2') &&
			this.slotsFilled.includes('sq-4-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-1') && 
			this.slotsFilled.includes('sq-2-1') &&
			this.slotsFilled.includes('sq-3-1') &&
			this.slotsFilled.includes('sq-4-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-1') && 
			this.slotsFilled.includes('sq-3-1') &&
			this.slotsFilled.includes('sq-4-1') &&
			this.slotsFilled.includes('sq-5-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-1') && 
			this.slotsFilled.includes('sq-4-1') &&
			this.slotsFilled.includes('sq-5-1') &&
			this.slotsFilled.includes('sq-6-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-1') && 
			this.slotsFilled.includes('sq-5-1') &&
			this.slotsFilled.includes('sq-6-1') &&
			this.slotsFilled.includes('sq-7-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-2') && 
			this.slotsFilled.includes('sq-2-2') &&
			this.slotsFilled.includes('sq-3-2') &&
			this.slotsFilled.includes('sq-4-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-2') && 
			this.slotsFilled.includes('sq-3-2') &&
			this.slotsFilled.includes('sq-4-2') &&
			this.slotsFilled.includes('sq-5-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-2') && 
			this.slotsFilled.includes('sq-4-2') &&
			this.slotsFilled.includes('sq-5-2') &&
			this.slotsFilled.includes('sq-6-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-2') && 
			this.slotsFilled.includes('sq-5-2') &&
			this.slotsFilled.includes('sq-6-2') &&
			this.slotsFilled.includes('sq-7-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-3') && 
			this.slotsFilled.includes('sq-2-3') &&
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-4-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-3') && 
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-5-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-3') && 
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-6-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-3') && 
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-6-3') &&
			this.slotsFilled.includes('sq-7-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-4') && 
			this.slotsFilled.includes('sq-2-4') &&
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-4-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-4') && 
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-5-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-4') && 
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-6-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-4') && 
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-6-4') &&
			this.slotsFilled.includes('sq-7-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-5') && 
			this.slotsFilled.includes('sq-2-5') &&
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-4-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-5') && 
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-5-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-5') && 
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-6-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-5') && 
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-6-5') &&
			this.slotsFilled.includes('sq-7-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-6') && 
			this.slotsFilled.includes('sq-2-6') &&
			this.slotsFilled.includes('sq-3-6') &&
			this.slotsFilled.includes('sq-4-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-6') && 
			this.slotsFilled.includes('sq-3-6') &&
			this.slotsFilled.includes('sq-4-6') &&
			this.slotsFilled.includes('sq-5-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-6') && 
			this.slotsFilled.includes('sq-4-6') &&
			this.slotsFilled.includes('sq-5-6') &&
			this.slotsFilled.includes('sq-6-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-6') && 
			this.slotsFilled.includes('sq-5-6') &&
			this.slotsFilled.includes('sq-6-6') &&
			this.slotsFilled.includes('sq-7-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-7') && 
			this.slotsFilled.includes('sq-2-7') &&
			this.slotsFilled.includes('sq-3-7') &&
			this.slotsFilled.includes('sq-4-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-7') && 
			this.slotsFilled.includes('sq-3-7') &&
			this.slotsFilled.includes('sq-4-7') &&
			this.slotsFilled.includes('sq-5-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-7') && 
			this.slotsFilled.includes('sq-4-7') &&
			this.slotsFilled.includes('sq-5-7') &&
			this.slotsFilled.includes('sq-6-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-7') && 
			this.slotsFilled.includes('sq-5-7') &&
			this.slotsFilled.includes('sq-6-7') &&
			this.slotsFilled.includes('sq-7-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-1') && 
			this.slotsFilled.includes('sq-1-2') &&
			this.slotsFilled.includes('sq-1-3') &&
			this.slotsFilled.includes('sq-1-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-2') && 
			this.slotsFilled.includes('sq-1-3') &&
			this.slotsFilled.includes('sq-1-4') &&
			this.slotsFilled.includes('sq-1-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-3') && 
			this.slotsFilled.includes('sq-1-4') &&
			this.slotsFilled.includes('sq-1-5') &&
			this.slotsFilled.includes('sq-1-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-4') && 
			this.slotsFilled.includes('sq-1-5') &&
			this.slotsFilled.includes('sq-1-6') &&
			this.slotsFilled.includes('sq-1-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-1') && 
			this.slotsFilled.includes('sq-2-2') &&
			this.slotsFilled.includes('sq-2-3') &&
			this.slotsFilled.includes('sq-2-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-2') && 
			this.slotsFilled.includes('sq-2-3') &&
			this.slotsFilled.includes('sq-2-4') &&
			this.slotsFilled.includes('sq-2-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-3') && 
			this.slotsFilled.includes('sq-2-4') &&
			this.slotsFilled.includes('sq-2-5') &&
			this.slotsFilled.includes('sq-2-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-4') && 
			this.slotsFilled.includes('sq-2-5') &&
			this.slotsFilled.includes('sq-2-6') &&
			this.slotsFilled.includes('sq-2-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-1') && 
			this.slotsFilled.includes('sq-3-2') &&
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-3-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-2') && 
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-3-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-3') && 
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-3-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-4') && 
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-3-6') &&
			this.slotsFilled.includes('sq-3-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-1') && 
			this.slotsFilled.includes('sq-4-2') &&
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-4-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-2') && 
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-4-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-3') && 
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-4-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-4') && 
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-4-6') &&
			this.slotsFilled.includes('sq-4-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-5-1') && 
			this.slotsFilled.includes('sq-5-2') &&
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-5-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-5-2') && 
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-5-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-5-3') && 
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-5-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-5-4') && 
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-5-6') &&
			this.slotsFilled.includes('sq-5-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-1') && 
			this.slotsFilled.includes('sq-6-2') &&
			this.slotsFilled.includes('sq-6-3') &&
			this.slotsFilled.includes('sq-6-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-2') && 
			this.slotsFilled.includes('sq-6-3') &&
			this.slotsFilled.includes('sq-6-4') &&
			this.slotsFilled.includes('sq-6-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-3') && 
			this.slotsFilled.includes('sq-6-4') &&
			this.slotsFilled.includes('sq-6-5') &&
			this.slotsFilled.includes('sq-6-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-4') && 
			this.slotsFilled.includes('sq-6-5') &&
			this.slotsFilled.includes('sq-6-6') &&
			this.slotsFilled.includes('sq-6-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-1') && 
			this.slotsFilled.includes('sq-7-2') &&
			this.slotsFilled.includes('sq-7-3') &&
			this.slotsFilled.includes('sq-7-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-2') && 
			this.slotsFilled.includes('sq-7-3') &&
			this.slotsFilled.includes('sq-7-4') &&
			this.slotsFilled.includes('sq-7-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-3') && 
			this.slotsFilled.includes('sq-7-4') &&
			this.slotsFilled.includes('sq-7-5') &&
			this.slotsFilled.includes('sq-7-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-4') && 
			this.slotsFilled.includes('sq-7-5') &&
			this.slotsFilled.includes('sq-7-6') &&
			this.slotsFilled.includes('sq-7-7') 

		) {
			return true 
		}


	}


}




const player2 = {
	slotsFilled: [],
	checkWin: function() {
		if (
			this.slotsFilled.includes("sq-1-7") && 
			this.slotsFilled.includes("sq-3-5") &&
			this.slotsFilled.includes("sq-2-6") &&
			this.slotsFilled.includes("sq-4-4") 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes("sq-1-6") && 
			this.slotsFilled.includes("sq-2-5") &&
			this.slotsFilled.includes("sq-3-4") &&
			this.slotsFilled.includes("sq-4-3") 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes("sq-1-5") && 
			this.slotsFilled.includes("sq-3-3") &&
			this.slotsFilled.includes("sq-2-4") &&
			this.slotsFilled.includes("sq-4-2") 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes("sq-1-4") && 
			this.slotsFilled.includes("sq-3-2") &&
			this.slotsFilled.includes("sq-2-3") &&
			this.slotsFilled.includes("sq-4-1") 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-7') && 
			this.slotsFilled.includes('sq-3-6') &&
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-5-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-6') && 
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-5-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-5') && 
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-5-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-4') && 
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-4-2') &&
			this.slotsFilled.includes('sq-5-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-7') && 
			this.slotsFilled.includes('sq-4-6') &&
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-6-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-6') && 
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-6-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-5') && 
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-6-2') 

		) {
			return true 
		}
		if (
			this.slotsFilled.includes('sq-3-4') && 
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-5-2') &&
			this.slotsFilled.includes('sq-6-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-7') && 
			this.slotsFilled.includes('sq-5-6') &&
			this.slotsFilled.includes('sq-6-5') &&
			this.slotsFilled.includes('sq-7-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-6') && 
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-6-4') &&
			this.slotsFilled.includes('sq-7-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-5') && 
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-6-3') &&
			this.slotsFilled.includes('sq-7-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-4') && 
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-6-2') &&
			this.slotsFilled.includes('sq-7-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-7') && 
			this.slotsFilled.includes('sq-3-6') &&
			this.slotsFilled.includes('sq-2-5') &&
			this.slotsFilled.includes('sq-1-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-6') && 
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-2-4') &&
			this.slotsFilled.includes('sq-1-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-5') && 
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-2-3') &&
			this.slotsFilled.includes('sq-1-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-4') && 
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-2-2') &&
			this.slotsFilled.includes('sq-1-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-5-7') && 
			this.slotsFilled.includes('sq-4-6') &&
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-2-4') 

		) {
			return true 
		}


		if (
			this.slotsFilled.includes('sq-5-6') && 
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-2-3') 

		) {
			return true 
		}


		if (
			this.slotsFilled.includes('sq-5-5') && 
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-2-2') 

		) {
			return true 
		}


		if (
			this.slotsFilled.includes('sq-5-4') && 
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-3-2') &&
			this.slotsFilled.includes('sq-2-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-7') && 
			this.slotsFilled.includes('sq-5-6') &&
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-3-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-5') && 
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-3-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-6') && 
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-3-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-4') && 
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-4-2') &&
			this.slotsFilled.includes('sq-3-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-7') && 
			this.slotsFilled.includes('sq-6-6') &&
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-4-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-6') && 
			this.slotsFilled.includes('sq-6-5') &&
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-4-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-5') && 
			this.slotsFilled.includes('sq-6-4') &&
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-4-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-4') && 
			this.slotsFilled.includes('sq-6-3') &&
			this.slotsFilled.includes('sq-5-2') &&
			this.slotsFilled.includes('sq-4-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-1') && 
			this.slotsFilled.includes('sq-2-1') &&
			this.slotsFilled.includes('sq-3-1') &&
			this.slotsFilled.includes('sq-4-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-1') && 
			this.slotsFilled.includes('sq-3-1') &&
			this.slotsFilled.includes('sq-4-1') &&
			this.slotsFilled.includes('sq-5-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-1') && 
			this.slotsFilled.includes('sq-4-1') &&
			this.slotsFilled.includes('sq-5-1') &&
			this.slotsFilled.includes('sq-6-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-1') && 
			this.slotsFilled.includes('sq-5-1') &&
			this.slotsFilled.includes('sq-6-1') &&
			this.slotsFilled.includes('sq-7-1') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-2') && 
			this.slotsFilled.includes('sq-2-2') &&
			this.slotsFilled.includes('sq-3-2') &&
			this.slotsFilled.includes('sq-4-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-2') && 
			this.slotsFilled.includes('sq-3-2') &&
			this.slotsFilled.includes('sq-4-2') &&
			this.slotsFilled.includes('sq-5-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-2') && 
			this.slotsFilled.includes('sq-4-2') &&
			this.slotsFilled.includes('sq-5-2') &&
			this.slotsFilled.includes('sq-6-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-2') && 
			this.slotsFilled.includes('sq-5-2') &&
			this.slotsFilled.includes('sq-6-2') &&
			this.slotsFilled.includes('sq-7-2') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-3') && 
			this.slotsFilled.includes('sq-2-3') &&
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-4-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-3') && 
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-5-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-3') && 
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-6-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-3') && 
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-6-3') &&
			this.slotsFilled.includes('sq-7-3') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-4') && 
			this.slotsFilled.includes('sq-2-4') &&
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-4-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-4') && 
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-5-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-4') && 
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-6-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-4') && 
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-6-4') &&
			this.slotsFilled.includes('sq-7-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-5') && 
			this.slotsFilled.includes('sq-2-5') &&
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-4-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-5') && 
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-5-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-5') && 
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-6-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-5') && 
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-6-5') &&
			this.slotsFilled.includes('sq-7-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-6') && 
			this.slotsFilled.includes('sq-2-6') &&
			this.slotsFilled.includes('sq-3-6') &&
			this.slotsFilled.includes('sq-4-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-6') && 
			this.slotsFilled.includes('sq-3-6') &&
			this.slotsFilled.includes('sq-4-6') &&
			this.slotsFilled.includes('sq-5-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-6') && 
			this.slotsFilled.includes('sq-4-6') &&
			this.slotsFilled.includes('sq-5-6') &&
			this.slotsFilled.includes('sq-6-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-6') && 
			this.slotsFilled.includes('sq-5-6') &&
			this.slotsFilled.includes('sq-6-6') &&
			this.slotsFilled.includes('sq-7-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-7') && 
			this.slotsFilled.includes('sq-2-7') &&
			this.slotsFilled.includes('sq-3-7') &&
			this.slotsFilled.includes('sq-4-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-7') && 
			this.slotsFilled.includes('sq-3-7') &&
			this.slotsFilled.includes('sq-4-7') &&
			this.slotsFilled.includes('sq-5-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-7') && 
			this.slotsFilled.includes('sq-4-7') &&
			this.slotsFilled.includes('sq-5-7') &&
			this.slotsFilled.includes('sq-6-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-7') && 
			this.slotsFilled.includes('sq-5-7') &&
			this.slotsFilled.includes('sq-6-7') &&
			this.slotsFilled.includes('sq-7-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-1') && 
			this.slotsFilled.includes('sq-1-2') &&
			this.slotsFilled.includes('sq-1-3') &&
			this.slotsFilled.includes('sq-1-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-2') && 
			this.slotsFilled.includes('sq-1-3') &&
			this.slotsFilled.includes('sq-1-4') &&
			this.slotsFilled.includes('sq-1-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-3') && 
			this.slotsFilled.includes('sq-1-4') &&
			this.slotsFilled.includes('sq-1-5') &&
			this.slotsFilled.includes('sq-1-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-1-4') && 
			this.slotsFilled.includes('sq-1-5') &&
			this.slotsFilled.includes('sq-1-6') &&
			this.slotsFilled.includes('sq-1-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-1') && 
			this.slotsFilled.includes('sq-2-2') &&
			this.slotsFilled.includes('sq-2-3') &&
			this.slotsFilled.includes('sq-2-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-2') && 
			this.slotsFilled.includes('sq-2-3') &&
			this.slotsFilled.includes('sq-2-4') &&
			this.slotsFilled.includes('sq-2-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-3') && 
			this.slotsFilled.includes('sq-2-4') &&
			this.slotsFilled.includes('sq-2-5') &&
			this.slotsFilled.includes('sq-2-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-2-4') && 
			this.slotsFilled.includes('sq-2-5') &&
			this.slotsFilled.includes('sq-2-6') &&
			this.slotsFilled.includes('sq-2-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-1') && 
			this.slotsFilled.includes('sq-3-2') &&
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-3-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-2') && 
			this.slotsFilled.includes('sq-3-3') &&
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-3-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-3') && 
			this.slotsFilled.includes('sq-3-4') &&
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-3-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-3-4') && 
			this.slotsFilled.includes('sq-3-5') &&
			this.slotsFilled.includes('sq-3-6') &&
			this.slotsFilled.includes('sq-3-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-1') && 
			this.slotsFilled.includes('sq-4-2') &&
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-4-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-2') && 
			this.slotsFilled.includes('sq-4-3') &&
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-4-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-3') && 
			this.slotsFilled.includes('sq-4-4') &&
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-4-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-4-4') && 
			this.slotsFilled.includes('sq-4-5') &&
			this.slotsFilled.includes('sq-4-6') &&
			this.slotsFilled.includes('sq-4-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-5-1') && 
			this.slotsFilled.includes('sq-5-2') &&
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-5-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-5-2') && 
			this.slotsFilled.includes('sq-5-3') &&
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-5-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-5-3') && 
			this.slotsFilled.includes('sq-5-4') &&
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-5-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-5-4') && 
			this.slotsFilled.includes('sq-5-5') &&
			this.slotsFilled.includes('sq-5-6') &&
			this.slotsFilled.includes('sq-5-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-1') && 
			this.slotsFilled.includes('sq-6-2') &&
			this.slotsFilled.includes('sq-6-3') &&
			this.slotsFilled.includes('sq-6-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-2') && 
			this.slotsFilled.includes('sq-6-3') &&
			this.slotsFilled.includes('sq-6-4') &&
			this.slotsFilled.includes('sq-6-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-3') && 
			this.slotsFilled.includes('sq-6-4') &&
			this.slotsFilled.includes('sq-6-5') &&
			this.slotsFilled.includes('sq-6-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-6-4') && 
			this.slotsFilled.includes('sq-6-5') &&
			this.slotsFilled.includes('sq-6-6') &&
			this.slotsFilled.includes('sq-6-7') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-1') && 
			this.slotsFilled.includes('sq-7-2') &&
			this.slotsFilled.includes('sq-7-3') &&
			this.slotsFilled.includes('sq-7-4') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-2') && 
			this.slotsFilled.includes('sq-7-3') &&
			this.slotsFilled.includes('sq-7-4') &&
			this.slotsFilled.includes('sq-7-5') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-3') && 
			this.slotsFilled.includes('sq-7-4') &&
			this.slotsFilled.includes('sq-7-5') &&
			this.slotsFilled.includes('sq-7-6') 

		) {
			return true 
		}

		if (
			this.slotsFilled.includes('sq-7-4') && 
			this.slotsFilled.includes('sq-7-5') &&
			this.slotsFilled.includes('sq-7-6') &&
			this.slotsFilled.includes('sq-7-7') 

		) {
			return true 
		}

	}


}
// console.log(checkWin());

// const anil = {
// 	gender: "male",
// 	shirtColor: "grey", 
// 	sayHello() {

// 		console.log("hello I am wearing a " + this.shirtColor + " shirt.");
// 	}
// }

// fourInARow {

// } 


const pickSquare = (event) => {

	console.log(event)

	console.log(event.target.id); // be sure to check event.target -- that's where the info is
	// event is what will be passed into the handler as an argument

	// event.target is the vanilla and we need to turn it back to jquery for it function properly
	console.log(event.target);

	const $squareSelection = $(event.target)

	console.log($squareSelection);

	// $squareSelection.css('background-color', 'red');

	// call method in game object
	//game.clickSquare($squareSelection) 


	// has the chosen square already been clicked? if yes, do nothing 
	
	if ($squareSelection.css('background-color') == "rgb(255, 0, 0)" ||
		$squareSelection.css('background-color') == "rgb(0, 0, 255)") {
		return
	} 
	
	console.log($squareSelection.css('background-color'))

	if (game.whoseTurn == "player1") {
		$squareSelection.css('background-color', 'red');
		
		// push the ID of the selected tile into player 1's slotFilled 

		player1.slotsFilled.push($squareSelection.attr("id"))


		console.log(player1.slotsFilled);

		// console.log here to test 

		game.whoseTurn = "player2"

		} 
	else {
		$squareSelection.css('background-color','blue');

		// same as above but for player 2 

		player2.slotsFilled.push($squareSelection.attr("id"))

		// console.log to test 

		console.log(player2.slotsFilled);

		game.whoseTurn = "player1"

	}



	const player1HasWon = player1.checkWin();
	
	if (player1HasWon == true) {
		wonGame(1);
	}


	const player2HasWon = player2.checkWin();
	if (player2HasWon == true) {
		wonGame(2);
	}
	// if player1s turn
	// make the square clicked red
	// else
	// make it blue
}


function wonGame (num) {
	// alert("Player " + num + " has won the game!")
	$('h1').text("Hooray! Player " + num + " has won the game!")
}

const allSquares = $('.square');
allSquares.on("click", (event) => {
	// console.log(event.target.id)

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