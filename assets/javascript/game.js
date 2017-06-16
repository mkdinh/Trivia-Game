subject1 ={
	question:'Which 1998 remake of a 1960 movie told us to "Check in. Unpack. Relax. Take a shower"?',
	gif: "assets/images/psycho.gif",
	correct: "Psycho",
	choice1:"Blues Brothers",
	choice2: "Dr. Dolittle",
	choice3: "Godzilla",
	choice4: "Psycho",
}

subject2 ={
	question: 'In 1978, the producers assured you that "You will Believe a Man Can Fly". What was the movie?',
	gif: "assets/images/superman.gif",
	correct:"Superman: The Movie",
	choice1: 'Grease',
	choice2: 'Heaven Can Wait',
	choice3: 'Superman: The Movie',
	choice4: 'Cheech and Chongs Up in Smoke',
}

subject3 ={
	question: 'from 1984 gave us the instructions "Dont Get Him Wet, Keep Him Out of Bright Light, and Never Feed Him After Midnight." What was the movie?',
	gif: "assets/images/gremlins.gif",
	correct:"Gremlins",
	choice1: 'The Lonely Guy',
	choice2: 'Heaven Can Wait',
	choice3: 'The Adventures of Buckaroo Banzai',
	choice4: 'Gremlins',
}

subject4 ={
	question: ' "Invisible. Silent. Stolen." What 1990 film used this provocative tagline?',
	gif: "assets/images/redOctober.gif",
	correct: 'The Hunt for Red October',
	choice1: 'The First Power',
	choice2: 'Arachnophobia',
	choice3: 'The Hunt for Red October',
	choice4: 'Ernest Goes to Jail',
}

subject5 ={
	question: 'A tagline from 1979 told us that "In Space No One Can Hear You Scream." What was the movie?',
	gif: "assets/images/alien.gif",
	correct:"Alien",
	choice1: 'Star Trek: The Motion Picture',
	choice2: 'Alien',
	choice3: 'Moonraker',
	choice4: 'The Black Hole',
}

subject6 ={
	question: ' "He'+'s Having the Worst Day of his Life...Over, and Over Again." What was this 1993 movie?',
	gif: "assets/images/groundhogDay.gif",
	correct:"Groundhog Day",
	choice1: 'Groundhog Day',
	choice2: 'In the Line of Fire',
	choice3: 'The Fugitive',
	choice4: 'Mrs. Doubtfire',
}

subject7 ={
	question: 'Which 1980 movie had the tagline "They'+'ll Never Get Caught. They'+'re on a Mission From God"?',
	gif: "assets/images/blueBrothers.gif",
	correct: 'The Blues Brothers',
	choice1: 'The Blues Brothers',
	choice2: '9 to 5',
	choice3: 'Smokey and the Bandit II',
	choice4: 'In the Line of Fire',
}

subject8 ={
	question: '"This Is The Weekend They Didn'+'t Play Golf." What 1972 film related the account of a truly horrible weekend?',
	gif: "assets/images/deliverance.gif",
	correct:"Deliverance",
	choice1: 'The Getaway',
	choice2: 'Deliverance',
	choice3: 'The Poseidon Adventure',
	choice4: 'Conquest of the Planet of the Apes',
}

subject9 ={
	question: 'The tagline for this 1977 movie told us that "We Are Not Alone". What was the film?',
	gif: "assets/images/closeEncounter.gif",
	correct:"Close Encounters of the Third Kind",
	choice1: 'The Rescuers',
	choice2: 'Oh, God!',
	choice3: 'Close Encounters of the Third Kind',
	choice4: 'The Deep',
}

subject10 ={
	question: 'Which 2007 film said "Their War. Our World"?',
	gif: "assets/images/transformer.gif",
	correct:"Transformers",
	choice1: 'I Am Legend',
	choice2: '300',
	choice3: 'Transformers',
	choice4: 'Bridge to Terabithia',
}

var allTopic = {
	subject1: subject1,
	subject2: subject2,
	subject3: subject3,
	subject4: subject4,
	subject5: subject5,
	subject6: subject6,
	subject7: subject7,
	subject8: subject8,
	subject9: subject9,
	subject10: subject10,
}
var topic;
var intervalId;
var choice1;
var choice2;
var choice3;
var choice4;
var time;
var score = 0;
var strike = 0;
var game = $("#game");
var loadingGif = '<img id="loadingGif" src="assets/images/loading.gif">';

var reset = function(){
 time = 30;
 topic = '';
 playGame = true;
 // Empty game div
game.empty()
}


// Documents ready
$("documents").ready(function(){
	start()
	}
);
// Click to start
var start = function(){

	$("#startBtn").animate({top: "50px"},1000)

	// click on start button go to play

	setTimeout(function(){
		$("#startBtn").css("opacity","1")
		$("#startBtn").click(function(){
		game.empty()
		game.append(loadingGif)
		setTimeout(playTrivia,2000)
		})
	},3200)
}

var playTrivia = function(){
// Empty game div
	reset();
// Generate random topic

	//pick from array of topics

	propTopic = randTopic(allTopic);
	topic = allTopic[propTopic];
	delete allTopic[propTopic]
	// Display Question
	
	console.log(score)
	console.log(allTopic)
	console.log(topic)

	appendQuestion(topic);

	// Display choices
	appendChoices(topic);


// Display Timer
	var timerDisplay = '<div id="timerContainer"><p id="timer">30</p></div>'


// function to count down time
	setTimeout(function(){
		game.append(timerDisplay);
		$("#timer").fadeToggle(500);
		// $("#timer").css("display","inherit");
		intervalId = setInterval(timer,1000)},2200)

// Display Score

	if(playGame === true){
		$(".choiceBtn").click(function(){
			if($(this).text() === topic.correct){			
				correct();
			}if($(this).text() !== topic.correct){
				wrong()
			}
		})
	}

}

var timer = function(){

	time--;
	if(time === 0){
		wrong()
	}

	if(time === 10){
		$("#timerContainer").css("color","red")
	}
	// update time html
	$("#timer").html(time)

	if(time <= 10){
		$("#timer").effect("shake",{distance:5},200)
	}
}

var randTopic = function(obj){
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}


var choices = function(){

}

var correct = function(){

	playGame=false;
	clearInterval(intervalId);
	// change display/ background
	var blank = $("<div>")
	blank.attr("id","blank")
	game.prepend(blank);

	// Score increased by 1
	score += 1;

	var scoreDisplay = '<div id="score">Score: '+score+'</div>';
	$("#gameContainer").prepend(scoreDisplay)
	//$("#score").fadeToggle(1000);
	$("#score").animate({top: "50px",opacity:"1"});

	var imageContainer = $("<div>");
	imageContainer.attr("id","imageContainer");

	var imageBox = $("<div>");
	imageBox.attr("id","imageBox");

	var imageDisplay = '<img id="image" src="'+topic.gif+'"></img>';
	imageBox.append(imageDisplay)
	imageContainer.append(imageBox)
	$("#gameContainer").prepend(imageContainer);

	// set auto next topic (Set interval) 
	setTimeout(function(){
			reset();
			$("#blank").fadeOut();
			$("#imageContainer").fadeOut();
			$("#score").fadeOut();	
			$("#gameContainer").prepend(loadingGif)
			setTimeout(function(){$("#loadingGif").fadeOut()},3500)
		},9000)

	setTimeout(function(){
		$("#loadingGif").remove();
		$("#blank").remove();
		$("#imageContainer").remove();
		$("#score").remove();
		playTrivia();
	},13000)
}

var wrong = function(){

	playGame=false;
	clearInterval(intervalId);

	// change display/ background
	var blank = $("<div>")
	blank.attr("id","blank")
	game.prepend(blank);

	// Score increased by 1
	strike += 1;

	var strikeDisplay = '<div id="strikeDisplay"></div>';
	$("#gameContainer").append(strikeDisplay);
	var strikeContainer = '<div class="strikeContainer"></div>';
	$("#strikeDisplay").append(strikeContainer);
	var strikeImg = '<img class="strikeImg" src="assets/images/strike.png">';

	for(i = 1; i <= strike; i++){
		setTimeout(function(){
			$(".strikeContainer").append(strikeImg);
			
		},1500*i)
	}

	setTimeout(function(){
			reset();
			$("#blank").fadeOut();
			$("#strikeDisplay").fadeOut();
			$("#imageContainer").fadeOut();
			$("#gameContainer").prepend(loadingGif)
			setTimeout(function(){$("#loadingGif").fadeOut()},2000)
		},2000*i)

	setTimeout(function(){
		$("#loadingGif").remove();
		$("#blank").remove();
		$("#strikeDisplay").remove();
		$("#imageContainer").remove();
		if(strike<3){playTrivia();}
		else{alert("YOU LOSE!")}
	},2000*i+2000)

}

function appendQuestion(subject){
	var question = $("<div>");
	question.attr("id","question");
	question.text(subject.question);
	game.append(question);
}

var appendChoices= function(subject){
	//push random choices into variable
	var choiceNum = [1,2,3,4];
	for(var i = 1; i <= 4; i++){

		randChoice = Math.floor(Math.random()*choiceNum.length);
		choice = "choice"+ choiceNum[randChoice];
		answerChoice = subject[choice];
		choiceNum.splice(choiceNum.indexOf(choiceNum[randChoice]),1);

		choiceBtn = $("<button>");
		choiceBtn.addClass("choiceBtn");
		choiceBtn.attr("id","position"+i);
		choiceBtn.text(answerChoice);

		btnContainer = $("<div>");
		btnContainer.attr("id","choice"+i+"Container");
		btnContainer.append(choiceBtn);
		game.append(btnContainer);

	}

	// choices box animation

	setTimeout(function(){$("#choice1Container").animate({left:"125px", easing:"swing"},500)},250);
	setTimeout(function(){$("#choice2Container").animate({right:"125px", easing:"swing"},500)},500);
	setTimeout(function(){$("#choice3Container").animate({left:"125px", easing:"swing"},500)},750);
	setTimeout(function(){$("#choice4Container").animate({right:"125px", easing:"swing"},500)},1000);

}

var num = Math.floor(Math.random()*100);

