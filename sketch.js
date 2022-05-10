// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teaachablemachine.withgoogle.com/models/b8tMMJ4tl/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let c = 0
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
   //img_1 = loadImage('assets/moonwalk.jpg');
   //img_2 = loadImage('assets/moonwalk.jpg'); 
   //img_3 = loadImage('assets/moonwalk.jpg'); 
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  background(c);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
  
  if(label == "OHYEAH"){
    ellipse(56, 46, 55, 55);
    //image(img_1,width/2,height/2);
     }
  else if(label == "GOOD") {
    ellipse(50, 50, 55, 55);
    //image(img_2,width/2,height/2);
  }
  else{
    ellipse(60, 60, 55, 55);
    //image(img_3,width/2,height/2);
  }
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  c = 255;
  // Classifiy again!
  classifyVideo();
}