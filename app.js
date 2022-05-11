
// const playmore=()=>{
// 	 let play ="play more?";
// 	 if(confirm(play)==false){
// 	console.log("Game Over!!")
// 	 }
// 	 else{
// 	 main();
// 	} 
// }
//  function main(){

//  const userNum = Number(prompt("enter the numer between 1 to 6"));
//  console.log(userNum);
//  const computer = Math.floor(Math.random()*6+1);
//  console.log(computer);
//  let point;


// if(isNaN(userNum)){
// 	const u = Number(prompt("only number"));
// 	console.log(u);
// 	const com = Math.floor(Math.random()*6+1);
// 	console.log(com);
// 	console.log("error not valid");

// }

// if(userNum===computer){
// 	console.log(`u r right  user choice is : ${userNum} and computer is : ${computer}`);
// 	console.log(point=2);
// 	playmore();

// }
// else if(userNum===computer - 1 || userNum===computer + 1){
//  console.log(point=1);
//  playmore();
// }

// else{
// 	console.log("no points");
// 	console.log(point=0);
// 	playmore();

// }}

// main();



//creating enter function
const enterNum=()=>{

		return new Promise((resolve,reject)=>{
		const user= Number(prompt("Enter a number (1-6):"));//users input
		const random= Math.floor(Math.random()*6 +1);//randomly picking num between 1 -6
		//return error if user gives Nan

		if(isNaN(user)){
			reject(new Error("Wrong Input"));
		}

		if(user===random){
		resolve({
		points :2,
		random,
	})
	}

	else if(user===random - 1 || user===random + 1){
 	resolve({
 	points :1,
 	random,
 });
 }
  
	else
 	{
	resolve({
		points:0,
		random,
	});
};
})
}




// Do u want to continue??

const continueG=() => {

return new Promise ((resolve)=>{

	if(confirm("Do you want to continue?"))
	{
		resolve(true);
	}else{
		resolve(false);
	}
});

};
	

// function to handle the guess

const handleGuess =()=>{
	enterNum()     //this returns a promise
	    .then((result) => {
      console.log(`computer: ${result.random}: you got ${result.points} points`); // When resolve is run, we get the points and the random number
	
//lets ask the user if they want to continue the game 
continueG().then((result)=>{
	if(result){
		handleGuess(); //if yes then we run handleguess again
	}else{
		console.log("game over"); //if no we display alert
	}
})

	})
	.catch((error)=>console.log(error));   
}

handleGuess(); 

