let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("started")
        started = true;// only one time start


        levelUp();
    }
});

// btnFlas

function btnFlas(btn) {
    btn.classList.add("flas");

    setTimeout(function () {
        btn.classList.remove("flas");
    }, 250);
}

function userFlas(btn) {
    btn.classList.add("userFlas");

    setTimeout(function () {
        btn.classList.remove("userFlas");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    // random button choose

    let randInx = Math.floor(Math.random() * 3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);

    //   console.log(randBtn);
    //   console.log(randColor);
    //   console.log(randInx);

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlas(randBtn);
}


// check ans fuction

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `game over! your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },250 );
        reset();
    }
}



function btnPress() {
    // console.log(this);
    let btn = this;
    userFlas(btn);


    userColor = btn.getAttribute("id")
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);


};

let allBtn = document.querySelectorAll(".btn");

for (btn of allBtn) {
    btn.addEventListener("click", btnPress);
};

// reset function


function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
   
};
