// // player 2
	



// const pickSquare1 = (event) => {

// 	// console.log(event.target.id); // be sure to check event.target -- that's where the info is
// 	// event is what will be passed into the handler as an argument

// 	// event.target is the vanilla and we need to turn it back to jquery for it function properly
// 	console.log(event.target);


// 	const $squareSelection = $(event.target)


// 	console.log($squareSelection);

// 	$squareSelection.css('background-color', 'blue');


// }

// const allSquares1 = $('.square')
// allSquares1.on("click", pickSquare1)

vertical solutions:

id='sq-1-1'   id='sq-1-2'   id='sq-1-3'  id='sq-1-4'   
id='sq-1-2'   id='sq-1-3'   id='sq-1-4'  id='sq-1-5'   
id='sq-1-3'   id='sq-1-4'   id='sq-1-5'  id='sq-1-6'   
id='sq-1-4'   id='sq-1-5'   id='sq-1-6'  id='sq-1-7'   
   
   
id='sq-2-1'   id='sq-2-2'   id='sq-2-3'  id='sq-2-4'

id='sq-2-2'   id='sq-2-3'   id='sq-2-4'  id='sq-2-5'

id='sq-2-3'   id='sq-2-4'   id='sq-2-5'  id='sq-2-6'

id='sq-2-4'   id='sq-2-5'   id='sq-2-6'  id='sq-2-7'   

id='sq-3-1'   id='sq-3-2'   id='sq-3-3'  id='sq-3-4' 
id='sq-3-2'   id='sq-3-3'   id='sq-3-4'  id='sq-3-5' 
id='sq-3-3'   id='sq-3-4'   id='sq-3-5'  id='sq-3-6' 
id='sq-3-4'   id='sq-3-5'   id='sq-3-6'  id='sq-3-7' 

id='sq-4-1'   id='sq-4-2'   id='sq-4-3'  id='sq-4-4'  
id='sq-4-2'   id='sq-4-3'   id='sq-4-4'  id='sq-4-5'  
id='sq-4-3'   id='sq-4-4'   id='sq-4-5'  id='sq-4-6'  
id='sq-4-4'   id='sq-4-5'   id='sq-4-6'  id='sq-4-7'  

id='sq-5-1'   id='sq-5-2'   id='sq-5-3'  id='sq-5-4'  
id='sq-5-2'   id='sq-5-3'   id='sq-5-4'  id='sq-5-5'  
id='sq-5-3'   id='sq-5-4'   id='sq-5-5'  id='sq-5-6'  
id='sq-5-4'   id='sq-5-5'   id='sq-5-6'  id='sq-5-7'  

id='sq-6-1'   id='sq-6-2'   id='sq-6-3'  id='sq-6-4'  
id='sq-6-2'   id='sq-6-3'   id='sq-6-4'  id='sq-6-5'  
id='sq-6-3'   id='sq-6-4'   id='sq-6-5'  id='sq-6-6'  
id='sq-6-4'   id='sq-6-5'   id='sq-6-6'  id='sq-6-7'  

id='sq-7-1'   id='sq-7-2'   id='sq-7-3'  id='sq-7-4' 
id='sq-7-2'   id='sq-7-3'   id='sq-7-4'  id='sq-7-5'  
id='sq-7-3'   id='sq-7-4'   id='sq-7-5'  id='sq-7-6'  
id='sq-7-4'   id='sq-7-5'   id='sq-7-6'  id='sq-7-7'  



horizontal solutions:


id='sq-1-1'    id='sq-2-1'    id='sq-3-1'   id='sq-4-1'   
id='sq-2-1'    id='sq-3-1'    id='sq-4-1'   id='sq-5-1'   
id='sq-3-1'    id='sq-4-1'    id='sq-5-1'   id='sq-6-1'   
id='sq-4-1'    id='sq-5-1'    id='sq-6-1'   id='sq-7-1'   
   
   
id='sq-1-2'    id='sq-2-2'    id='sq-3-2'   id='sq-4-2'   
id='sq-2-2'    id='sq-3-2'    id='sq-4-2'   id='sq-5-2'  
id='sq-3-2'    id='sq-4-2'    id='sq-5-2'   id='sq-6-2'   
id='sq-4-2'    id='sq-5-2'    id='sq-6-2'   id='sq-7-2'   

id='sq-1-3'    id='sq-2-3'    id='sq-3-3'   id='sq-4-3' 
id='sq-2-3'    id='sq-3-3'    id='sq-4-3'   id='sq-5-3' 
id='sq-3-3'    id='sq-4-3'    id='sq-5-3'   id='sq-6-3' 
id='sq-4-3'    id='sq-5-3'    id='sq-6-3'   id='sq-7-3' 

id='sq-1-4'    id='sq-2-4'    id='sq-3-4'   id='sq-4-4'  
id='sq-2-4'    id='sq-3-4'    id='sq-4-4'   id='sq-5-4'  
id='sq-3-4'    id='sq-4-4'    id='sq-5-4'   id='sq-6-4'  
id='sq-4-4'    id='sq-5-4'    id='sq-6-4'   id='sq-7-4'  

id='sq-1-5'    id='sq-2-5'    id='sq-3-5'   id='sq-4-5'  
id='sq-2-5'    id='sq-3-5'    id='sq-4-5'   id='sq-5-5'  
id='sq-3-5'    id='sq-4-5'    id='sq-5-5'   id='sq-6-5'  
id='sq-4-5'    id='sq-5-5'    id='sq-6-5'   id='sq-7-5'  

id='sq-1-6'    id='sq-2-6'    id='sq-3-6'   id='sq-4-6'  
id='sq-2-6'    id='sq-3-6'    id='sq-4-6'   id='sq-5-6'  
id='sq-3-6'    id='sq-4-6'    id='sq-5-6'   id='sq-6-6'  
id='sq-4-6'    id='sq-5-6'    id='sq-6-6'   id='sq-7-6'  

id='sq-1-7'    id='sq-2-7'    id='sq-3-7'   id='sq-4-7'  
id='sq-2-7'    id='sq-3-7'    id='sq-4-7'   id='sq-5-7'  
id='sq-3-7'    id='sq-4-7'    id='sq-5-7'   id='sq-6-7'  
id='sq-4-7'    id='sq-5-7'    id='sq-6-7'   id='sq-7-7'  


diagonal solutions:

id = 'sq-1-7'    id = 'sq-2-6'    id = 'sq-3-5'   id = 'sq-4-4' -  
id = 'sq-1-6'    id = 'sq-2-5'    id = 'sq-3-4'   id = 'sq-4-3' -  
id = 'sq-1-5'    id = 'sq-2-4'    id = 'sq-3-3'   id = 'sq-4-2' - 
id = 'sq-1-4'    id = 'sq-2-3'    id = 'sq-3-2'   id = 'sq-4-1' -  
   
   
id= 'sq-2-7'    id = 'sq-3-6'    id = 'sq-4-5'   id = 'sq-5-4' - 
id= 'sq-2-6'    id = 'sq-3-5'    id = 'sq-4-4'   id = 'sq-5-3' -  
id= 'sq-2-5'    id = 'sq-3-4'    id = 'sq-4-3'   id = 'sq-5-2' -  
id= 'sq-2-4'    id = 'sq-3-3'    id = 'sq-4-2'   id = 'sq-5-1' -  

id = 'sq-3-7'   id = 'sq-4-6'    id = 'sq-5-5'   id = 'sq-6-4'- 
id = 'sq-3-6'   id = 'sq-4-5'    id = 'sq-5-4'   id = 'sq-6-3'-
id = 'sq-3-5'   id = 'sq-4-4'    id = 'sq-5-3'   id = 'sq-6-2'- 
id = 'sq-3-4'   id = 'sq-4-3'    id = 'sq-5-2'   id = 'sq-6-1'- 

id = 'sq-4-7'   id = 'sq-5-6'    id = 'sq-6-5'   id = 'sq-7-4'-  
id = 'sq-4-6'   id = 'sq-5-5'    id = 'sq-6-4'   id = 'sq-7-3'-  
id = 'sq-4-5'   id = 'sq-5-4'    id = 'sq-6-3'   id = 'sq-7-2'-  
id = 'sq-4-4'   id = 'sq-5-3'    id = 'sq-6-2'   id = 'sq-7-1'-  

id = 'sq-4-7'  &&  id = 'sq-3-6'  &&  id = 'sq-2-5' &&  id = 'sq-1-4' - 
id = 'sq-4-6'  &&  id = 'sq-3-5'  &&  id = 'sq-2-4' &&  id = 'sq-1-3' - 
id = 'sq-4-5'  &&  id = 'sq-3-4'  &&  id = 'sq-2-3'  && id = 'sq-1-2' - 
id = 'sq-4-4'  &&  id = 'sq-3-3'  &&  id = 'sq-2-2' &&  id = 'sq-1-1' -

id = 'sq-5-7'  &&  id = 'sq-4-6'  &&  id = 'sq-3-5'  && id = 'sq-2-4' -
id = 'sq-5-6'   &&  id = 'sq-4-5'  &&  id = 'sq-3-4' &&  id = 'sq-2-3' -  
id = 'sq-5-5'   && id = 'sq-4-4'  &&  id = 'sq-3-3'  && id = 'sq-2-2' - 
id = 'sq-5-4'   && id = 'sq-4-3'  &&  id = 'sq-3-2'  && id = 'sq-2-1' - 

id = 'sq-6-7'   &&  id = 'sq-5-6'  &&  id = 'sq-4-5' &&  id = 'sq-3-4' -  
id = 'sq-6-6'   && id = 'sq-5-5'  &&  id = 'sq-4-4'  && id = 'sq-3-3' - 
id = 'sq-6-5'   && id = 'sq-5-4'  &&  id = 'sq-4-3'  && id = 'sq-3-2' - 
id = 'sq-6-4'  &&  id = 'sq-5-3'  &&  id = 'sq-4-2'  &&  id = 'sq-3-1' - 

id = 'sq-7-7'  &&   id = 'sq-6-6' &&   id = 'sq-5-5' &&   id = 'sq-4-4' - 
id = 'sq-7-6'  &&  id = 'sq-6-5' &&   id = 'sq-5-4' &&  id = 'sq-4-3' -  
id = 'sq-7-5'  &&  id = 'sq-6-4' &&   id = 'sq-5-3' &&  id = 'sq-4-2' - 
id = 'sq-7-4' &&   id = 'sq-6-3' &&   id = 'sq-5-2' &&  id = 'sq-4-1' -  


if player1.slotsFilled include (id ='sq-1-7' &&  id = 'sq-2-6' && id = 'sq-3-5' && id = 'sq-4-4')   


if player1.slotsFilled include (id = 'sq-1-6' && id = 'sq-2-5' && id = 'sq-3-4' && id = 'sq-4-3')


if player1.slotsFilled include (id = 'sq-1-5' && id = 'sq-2-4' && id = 'sq-3-3' && id = 'sq-4-2')


if player1.slotsFilled include (id = 'sq-1-4' && id = 'sq-2-3' && id = 'sq-3-2' && id = 'sq-4-1')


if player1.slotsFilled include (id= 'sq-2-7' && id = 'sq-3-6' && id = 'sq-4-5' && id = 'sq-5-4')


if player1.slotsFilled include (id= 'sq-2-6' && id = 'sq-3-5' && id = 'sq-4-4' && id = 'sq-5-3')


if player1.slotsFilled include (id= 'sq-2-5' && id = 'sq-3-4' && id = 'sq-4-3' && id = 'sq-5-2')


if player1.slotsFilled include (id= 'sq-2-4' && id = 'sq-3-3' && id = 'sq-4-2' && id = 'sq-5-1')


if player1.slotsFilled include (id = 'sq-3-7' && id = 'sq-4-6' && id = 'sq-5-5' && id = 'sq-6-4')


if player1.slotsFilled include (id = 'sq-3-6' && id = 'sq-4-5'  && id = 'sq-5-4'  && id = 'sq-6-3')


if player1.slotsFilled include (id = 'sq-3-5' && id = 'sq-4-4'  && id = 'sq-5-3' && id = 'sq-6-2')


if player1.slotsFilled include (id = 'sq-3-4' && id = 'sq-4-3' && id = 'sq-5-2' && id = 'sq-6-1')


if player1.slotsFilled include (id = 'sq-4-7' && id = 'sq-5-6' && id = 'sq-6-5' && id = 'sq-7-4')


if player1.slotsFilled include (id = 'sq-4-6' && id = 'sq-5-5'  && id = 'sq-6-4'  && id = 'sq-7-3')


if player1.slotsFilled include (id = 'sq-4-5' && id = 'sq-5-4'  && id = 'sq-6-3' && id = 'sq-7-2')


if player1.slotsFilled include (id = 'sq-4-4' &&  id = 'sq-5-3'  &&  id = 'sq-6-2'  && id = 'sq-7-1')


if player1.slotsFilled include (id = 'sq-4-7'  &&  id = 'sq-3-6'  &&  id = 'sq-2-5' &&  id = 'sq-1-4')


if player1.slotsFilled include (id = 'sq-4-6'  &&  id = 'sq-3-5'  &&  id = 'sq-2-4' &&  id = 'sq-1-3')


if player1.slotsFilled include (id = 'sq-4-5'  &&  id = 'sq-3-4'  &&  id = 'sq-2-3'  && id = 'sq-1-2')


if player1.slotsFilled include (id = 'sq-4-4'  &&  id = 'sq-3-3'  &&  id = 'sq-2-2' &&  id = 'sq-1-1')

if player1.slotsFilled include (id = 'sq-5-7'  &&  id = 'sq-4-6'  &&  id = 'sq-3-5'  && id = 'sq-2-4')

if player1.slotsFilled include (id = 'sq-5-6'   &&  id = 'sq-4-5'  &&  id = 'sq-3-4' &&  id = 'sq-2-3')

if player1.slotsFilled include (id = 'sq-5-5'   && id = 'sq-4-4'  &&  id = 'sq-3-3'  && id = 'sq-2-2')

if player1.slotsFilled include (id = 'sq-5-4'   && id = 'sq-4-3'  &&  id = 'sq-3-2'  && id = 'sq-2-1')

if player1.slotsFilled include (id = 'sq-6-7'   &&  id = 'sq-5-6'  &&  id = 'sq-4-5' &&  id = 'sq-3-4')

if player1.slotsFilled include (id = 'sq-6-6'   && id = 'sq-5-5'  &&  id = 'sq-4-4'  && id = 'sq-3-3')

if player1.slotsFilled include (id = 'sq-6-5'   && id = 'sq-5-4'  &&  id = 'sq-4-3'  && id = 'sq-3-2')

if player1.slotsFilled include (id = 'sq-6-4'  &&  id = 'sq-5-3'  &&  id = 'sq-4-2'  &&  id = 'sq-3-1')

if player1.slotsFilled include (id = 'sq-7-7'  &&   id = 'sq-6-6' &&   id = 'sq-5-5' &&   id = 'sq-4-4')

if player1.slotsFilled include (id = 'sq-7-6'  &&  id = 'sq-6-5' &&   id = 'sq-5-4' &&  id = 'sq-4-3')

if player1.slotsFilled include (id = 'sq-7-5'  &&  id = 'sq-6-4' &&   id = 'sq-5-3' &&  id = 'sq-4-2')

if player1.slotsFilled include (id = 'sq-7-4' &&   id = 'sq-6-3' &&   id = 'sq-5-2' &&  id = 'sq-4-1')

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()

if player1.slotsFilled include ()








