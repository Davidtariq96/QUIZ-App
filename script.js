let ul = document.getElementById('ul')
let nextButton = document.getElementById('btnNext');
let quizbox = document.getElementById('questionBox')
let opt1 = document.getElementById('opt1')
let opt2 = document.getElementById('opt2')
let opt3 = document.getElementById('opt3')
let opt4 = document.getElementById('opt4')
let tryAgain = document.getElementById('tryAgain')
tryAgain.style.display = 'none';
var app={
        questions:[
            {
                q:"Which of these is not a Javascript Framwork?",
                options:["React JS","python Script","Angular","Django"],
                answer:4
            },
            {
                q:"Which country won 2002 FIFA World Cup?",
                options:["Germany","Argentina","Brazil","France"],
                answer:3
            },{
                q:"Which university has the largest hostel in sub-sahara Africa?",
                options:["UNN","University of Cairo","ABU-Zaria","University of Kumasi"],
                answer:3
            },
            {
                q:"Who is the best player in the world?",
                options:["CR7","Messi","Hazard","Ndidi"],
                answer:1
            },
            {
                q:"Who is the first Black American President",
                options:["Martin Luther King","Barack Obama","David Samuel","George Bush"],
                answer:2
            }          
        ],
        //starting question from number 1
        index:0,
        //creating a function to load the question on the page
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
                scoreCard.innerHTML= this.score
                tryAgain.style.display = "block";
                tryAgain.style.cursor="pointer";
                tryAgain.addEventListener("click",again);
                function again(e){
                    e.preventDefault();
                    window.location = "index.html";
                }

            }
        },
        //making the next button to function
        next: function(){
            this.index++;
            this.load();
        },
        check: function(e){
            var me=e.id;
            let correctAns = this.questions[this.index].answer;
            if(me[me.length-1]== correctAns){
                this.score++;
                e.classList.add("correct");
                this.scoreCard();
            }
            else{                
                e.classList.add("wrong"); 
                
            }
            
        },
        
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML= this.score + "/"  + this.questions.length;
        }
}

window.load=app.load();

function button(e){
    app.check(e);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}