
$( document ).ready(function() {

var questions = [{question: "Which of these particles has negative charge?", answer1: "Proton", answer2: "Neutron", answer3: "Positron", answerc: "Electron" }, 
				{question: "What is the symbol for the light speed?", answer1: "a", answer2: "b", answer3: "d", answerc: "c" },	
				{question: "How is the border of a black hole called?", answer1: "Click caller", answer2: "Split ring", answer3: "Dark aurora", answerc: "Event horizon" },
				{question: "How many colors are there in the spectrum when white light is separated?", answer1: "Four", answer2: "Five", answer3: "Six", answerc: "Seven" },
				{question: "Which physicist's law states that equal volumes of all gases, measured at the same temperature and pressure, contain the same number of molecules?", 
				answer1: "Bertold Brecht", answer2: "Charlie Chaplin", answer3: "Denis Diderot", answerc: "Amadeo Avogadro" },
				{question: "Which branch of physics is devoted to the study of heat and related phenomen?" , answer1: "Cinematics" , answer2: "Electrodynamics" , 
				answer3: "Quantum Physics" , 
				answerc: "Thermodynamics" },
				{question: "Schrödinger's cat is a thought experiment dealing with which type of mechanics?" , answer1: "Newton" , answer2: "Relativistic" , 
				answer3: "Statistical" , answerc: "Quantum" },
				{question: "Who is the author of the book A Brief History of Time?" , answer1: "Paul Dirac" , answer2: "Kip Thorn" , answer3: "Lev Landau" , 
				answerc: "Stephen Hawking" },
				{question: "What is measured by the SI unit called a 'henry'?" , answer1: "Power" , answer2: "Force" , answer3: "Resistance" , answerc: "Inductance" },
				{question: "What is an unchanging position in which forces cancel each other out?" , answer1: "Matrix" , answer2: "Brazil" , answer3: "Metropolis" , 
				answerc: "Equilibrium" },
				{question: "What is the product of the mass of a body and its linear velocity?" , answer1: "Force" , answer2: "Acceleration" , answer3: "Pendulum" , 
				answerc: "Momentum" }
				
				]

var usedq = [];


var index = ["1", "2", "3", "c"];

var intervalId;

function shuffle(xxx) {
	
  var currentIndex = xxx.length, temporaryValue, randomIndex;

  
  while (0 !== currentIndex) {

    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    
    temporaryValue = xxx[currentIndex];
    xxx[currentIndex] = xxx[randomIndex];
    xxx[randomIndex] = temporaryValue;
  }

  return xxx;
}

function launch() { 
	stop();
	var sindex = index;
	$("#answer"+sindex[0]).empty().removeClass();
	$("#answer"+sindex[1]).empty().removeClass();
	$("#answer"+sindex[2]).empty().removeClass();
	$("#answer"+sindex[3]).empty().removeClass();

	var time = 15;
	
 	intervalId = setInterval(decrement, 1000);
    
 		function decrement() {
			time--;
			$("#timer").html("<h2>Time left: " + time + "</h2>");
				if (time === 0) {
					stop();
					$("#content").html('<h1>TIME UP! GAME OVER!</h2>');
      				}
    	}

    	function stop() {
      		clearInterval(intervalId);
    	}
    

	var i = Math.floor(Math.random()*questions.length);
	
	if (questions.length == 0) {
		$("#content").html('<h1>VICTORY!</h2>');
		stop();
	}
	console.log(i);
	
	sindex = shuffle(sindex);
	console.log(index);
	$("#question").html('<h2>' + questions[i].question + '</h2>');
	$("#answer"+ sindex[0]).html('<h2>' + questions[i].answer1 + '</h2>').addClass("wrong");
	$("#answer"+ sindex[1]).html('<h2>' + questions[i].answer2+ '</h2>').addClass("wrong");
	$("#answer"+ sindex[2]).html('<h2>' + questions[i].answer3 + '</h2>').addClass("wrong");
	$("#answer"+ sindex[3]).html('<h2>' + questions[i].answerc + '</h2>').addClass("correct");
	questions.splice(i, 1);



	
}

	








$("#start").on("click", launch);


$("body").on("click", ".correct", function(){
		alert("Correct!");
		launch();
		
	});

$("body").on("click", ".wrong", function(){
		
		$("#content").html('<h1>WRONG! GAME OVER!</h2>');
		stop();
	});




});