let x = 0.2
let y = 0.4
let z = 0.6
let w = 0.8
let a = 100

function setup() {
    createCanvas(600, 600);
    textSize(50);
}

function draw() {
    background(50);
    
    putRect(x,a);
    putRect(y,a);
    putRect(z,a);
    putRect(w,a);
    
    putText('Q',x);
    putText('W',y);
    putText('E',z);
    putText('R',w);

    //textNo();  
}

function keyTyped() {
    if (key === 'q') {
        a=255;
    } else if (key === 'w') {
        a=200;
    } else if (key === 'e') {
        a=150;
    } else if (key === 'r') {
        a=100;
    }
}

function putRect(a,b) {
    // if (keyIsPressed === true) {
    //     fill(100,200);
    // } else {
    //     fill(200,100);
    // }
    noStroke();
    fill(b);
    rectMode(RADIUS);
    rect(height*a, width*0.8,30);
}



function putText(a,b) {
    textSize(30);
    fill(155,230,0);
    text(a, height*b, width*0.8);   
}




// function textNo(a) {
//     b = random();
//     fill(a,0,0);
//     textSize(100);
//     // let i = random("nice");
//     text(b, height/2, width/2);
// }

// function 

