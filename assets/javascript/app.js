<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Document</title>
    <link rel = "stylesheet"  type = "text/css"  href = "../css/triviaGame.css">
    <!-- <link rel = "stylesheet"  type = "text/css"  href = "../css/style.css" > -->
 <!-- Added link to the jQuery Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


</head>

<body background-image="images/linkedinheadshot.jpg">
const = []


    <div class ="mystyle">

        <div class="innerdiv"> 
            <h3>Totally Trivial Trivia!</h3>
        </div>

        <div id= "start-quitdiv" class="innerdiv" >     
        <button class="mystartbutton"
                type="button">START</button>
        <button class="mystartbutton" id=quit
                type="button">QUIT</button>
                
        </div>

        <div id="timeclock" class="clock"> 
      
            <p> Time Remaining:  <span>30 seconds</span></p>             
        </div>        

        <div id="question" class="question" border= 5px solid; 
          border-color= coral ; 
          <p> "Question text belongs here." </p>
          
                <h4>Please select your answer.</h4>        
                </br>
             <label><input type="radio" name="choice" value=0>text for question 1</label> 
              </br>
             <label><input type="radio" name="choice" value=1>text for answer 2</label> 
              </br>
             <label><input type="radio" name="choice" value=2>text for A3      </label> 
              </br>
             <label><input type="radio" name="choice" value=3>text for A4      </label>  

              <div>
            <h4> text your status<h4>
            <p>Correct Answers:<p>
            <p>Incorrect Answers:<p>
            <p>Total Wins:<p>
            <p>Total Losses:<p>

         </div>              
        </div>
       
<script>

    let newQuestion = document.createElement("question");

      // We then assign the the text of this paragraph to be the text in the array.
      newQuestion.textContent = "this is question 1";

      // We then add the paragraph to the our main div on the page ("#drink-options")
      innerDiv.appendChild(newQuestion);


 
  // Array holds all of the questions
    const questionsChoicesAnswer=[
        "Link to this as a lightweight, 'write less, do more', JavaScript library.*
        JQuery,bootstrap,style.css,*Jquery/",

        "With jQuery you select (query) HTML elements and perform "actions" on them.*
        True, Fals*True/",

        "Basic syntax for Jquery is:*$(selector).action(), $(query).action, $(jquery).hide, $(selector).element*
         $(selector).action()/"
         
         "In the basic syntax for Jquery comines a selector to find the html _____________ and a jquery action
               to be performed on the ______________*elements&elements, attributes&elements, 
               properties&attributes, predictes&stles,elements & elements./"
         
         
        "The Jquery action() to be performed on the element(s) can be a function name or a function
             definitions*Ture,False*True/",

        "Why place all jQuery methods inside a document ready event?*because $(document).ready(function(),
             Easier to locate, to be fully loaded before working with it., hoisting"/"
             {

        "jQuery is tailor-made to respond to ________ in an HTML page.*frunction returns, user input, events,
             CSS"/,

        "The jQuery library is a single JavaScript file referenced: *outside <head> section, src=
             jquery-3.4.1.min.js, inside CSS file, all of these*jquery)*jquery-3.4.1.min.js/"

        "With the Document Object Model, programmers can:*add elements, delete element, modify elements,
        all of these and more.*all of these and more"/

        " A "node", in the DOM context is:*an HTML element, Jquery action, an object, none of these*
            an HTML element"/
     
    ];

    $(document).ready(function(){
            $('#startdiv').hide();
    });
        let player.totalWins=0;
        let player.totalLosses=0;
        let player.name=" ";
        let maxTime=30;
        let quit = false;
        
         
        setUpGame function{
        (load question;   
        let timer=maxTime;        
        let player.incorrect=0;
        let player.correct =0;
        }

    scoreGame function{
        getPlayerAnswer;
         // drinkList.forEach(function(drink) {
    //   const newDrinkDiv = $(`<div> ${drink} </div>`);
    //   drinkDiv.append(newDrinkDiv);
    // })

    // $.each(drinkList, function(index, drink) {
    //   const newDrinkDiv = $(`<div> ${drink} </div>`);
    //   drinkDiv.append(newDrinkDiv);

    //  $("input[type='button']").click(function(){
    //     	var radioValue = ("input[name='gender']:checked").val();
    //         if(radioValue){
    //             alert("Your are a - " + radioValue);
    //         }
    $(function(){
    $("#submit").click(function(){      
        alert($('input[name=q12_3]').val());
    });
 });
        getAnotherAnswer;
        while moreAnswers {
        if (player.answers[i]=undefined)
                unanswered++;
                else if game.answers[i]= player.answers[i];  
                    player.correct++;
                    else {   
                        player.incorrect++;
                    }
        getAnotherAnswer;
        }
        player.plays++;
        
        
   displayQuestions function{
    // drinkList.forEach(function(drink) {
    //   const newDrinkDiv = $(`<div> ${drink} </div>`);
    //   drinkDiv.append(newDrinkDiv);
    // })

     $.each(questionsChoicesAnswer, drinkList, function(index, drink) {
    //   const newDrinkDiv = $(`<div> ${drink} </div>`);
    //   drinkDiv.append(newDrinkDiv);

   })

     setUpGame ( (css in container:text, answers, timer)
    display questions (CSS  container:text, answers);
    
        	while  buttonclick <> quit and timer >0	
            
                   
            
    // * The game ends when the time runs out. The page will reveal  questions and answers.		
                                  
						While timer >0 countDownTimer}
                        timer = --;
						displayTimer;
						delay 1000;
						end while;}

					if (butonClick<> quit and timer =0)
                        scoreGame()
                        // Display player.name, correct, incorrect, unanswered, total plays, total wins, total losses
                        displayScore();]
                    if buttonClick<> quit
                        setUpGame (display questions (css in container:text, answers)
                        else
                            displayThankYou;
                    end
                    end
                if buttonclick <> quit
                    displayQuestions;
                end
				
				e
reset(display total plays, totalwins,total losses, correct, incorrect, unanswered,maxTimer, wait for Start or Quit)
				
				end




</script>
</html>