var name = window.prompt("What's your name?");
		//1. document.write("<p>" + name + "</p>");
		//2.
		document.getElementById("p").innerHTML = name + ", welcome to rock, paper, scissors!";
		//3. window.alert(name);
		var playCount = 1;
		var paperCount = 0;
		var scissorsCount = 0;
		var rockCount = 0;

		function generateCompChoice (){
			
			var userChoice = document.getElementById('userForm').choice.value;
			var randomNum = Math.random();
			var ranNumToThree = 3*randomNum;
			var roundedRan = Math.floor(ranNumToThree) +1;

			if (roundedRan == 1){
				roundedRan = "Paper";
				paperCount++;
			}else if (roundedRan == 2){
				roundedRan = "Scissors";
				scissorsCount++;
			}else if (roundedRan == 3){
				roundedRan = "Rock";
				rockCount++;
			}

			document.getElementById('choice').innerHTML = userChoice;
			document.getElementById('output').innerHTML = roundedRan;
			document.getElementById('output2').innerHTML = roundedRan;
			document.getElementById('count').innerHTML = playCount++;
			document.getElementById('pCount').innerHTML = paperCount;
			document.getElementById('rCount').innerHTML = rockCount;
			document.getElementById('sCount').innerHTML = scissorsCount;
			
			
			if (roundedRan == "Paper" && userChoice == "Paper"){
				var resultMsg = 0;
				resultMsg = "You tied with the computer.";
			}else if(roundedRan == "Paper" && userChoice == "Scissors"){
				var resultMsg = 0;
				resultMsg = "You beat the computer :)";
			}else if (roundedRan == "Paper" && userChoice == "Rock"){
				var resultMsg = 0;
				resultMsg = "You lost to the computer :(";
			}else if (roundedRan == "Rock" && userChoice == "Rock"){
				var resultMsg = 0;
				resultMsg = "You tied with the computer.";
			}else if (roundedRan == "Rock" && userChoice == "Paper"){
				var resultMsg = 0;
				resultMsg = "You beat the computer :)";
			}else if (roundedRan == "Rock" && userChoice == "Scissors"){
				var resultMsg = 0;
				resultMsg = "You lost to the computer :(";
			}else if (roundedRan == "Scissors" && userChoice == "Scissors"){
				var resultMsg = 0;
				resultMsg = "You tied with the computer.";
			}else if (roundedRan == "Scissors" && userChoice == "Rock"){
				var resultMsg = 0;
				resultMsg = "You beat the computer :)";
			}else if (roundedRan == "Scissors" && userChoice == "Paper"){
				var resultMsg = 0;
				resultMsg = "You lost to the computer :(";
			}
			window.alert(resultMsg);
		}
		
			
		
		