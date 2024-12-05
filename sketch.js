let startthis = [];
let endthis1 = [];
let startthis2 = [];
let enthis2 = [];
let lerpAmount = 0;
let input;
let value = "";
let keywords3 = [
  "Composing a paper",
  "Drafting a thesis",
  "Authoring a dissertation",
  "Creating an article",
  "Producing a manuscript",
  "Formulating a research paper",
  "Penning a paper",
  "Constructing an essay",
  "Preparing a study",
  "Developing a report",
  "Documenting research",
  "Composing a scholarly article",
  "writing papers",
  "Enjoying music",
  "Listening to tunes",
  "Listening to songs",
  "Listening to tracks",
  "Jamming to music",
  "Vibing to music",
  "Hearing music",
  "Playing music",
  "Absorbing music",
  "Tuning in to music",
  "Grooving to music",
  "Conversing",
  "Talking",
  "Communicating",
  "Engaging in conversation",
  "Discussing",
  "Gossiping",
  "Bantering",
  "Socializing",
  "Chitchatting",
  "Joking around",
  "Interacting",
  "Having a conversation",
  "Catching up",
  "Exchanging words",
  "Small talk",
  "Dialoguing",
  "chatting",
];
let keywords2 = [
  "Reading books",
  "Studying",
  "Perusing",
  "Skimming",
  "Exploring literature",
  "Flipping through pages",
  "Digesting books",
  "Engaging with texts",
  "Going through books",
  "Absorbing literature",
  "Devouring books",
  "Enjoying a novel",
  "Consuming literature",
  "Scanning pages",
  "Browsing books",
  "Studying physics",
  "Learning physics",
  "Exploring physics",
  "Engaging in physics",
  "Analyzing physical concepts",
  "Examining physical principles",
  "Researching physics",
  "Reading about physics",
  "Reviewing physics material",
  "Mastering physics",
  "Math",
  "Mathematics",
  "Arithmetic",
  "Calculus",
  "Geometry",
  "Algebra",
  "Trigonometry",
  "Statistics",
  "Number theory",
  "Quantitative analysis",
  "Attending classes",
  "Taking classes",
  "Listening to lectures",
  "Participating in lessons",
  "Engaging in lessons",
  "Sitting in class",
  "Joining lectures",
  "Following lectures",
  "Listening to lessons",
  "Attending sessions",
  "Going to classes",
];
let keywords1 = [
  "Gaming",
  "Playing games",
  "Engaging in gaming",
  "Video gaming",
  "Game playing",
  "Gaming sessions",
  "Gaming activities",
  "Sketching",
  "Illustrating",
  "Doodling",
  "Creating art",
  "Painting",
  "Rendering",
  "Drafting",
  "Caricaturing",
  "Outlining",
  "Depicting",
  "Portraying",
  "Designing",
  "Creating designs",
  "Conceptualizing",
  "Fashioning",
  "Planning",
  "Structuring",
  "Shaping",
  "Crafting",
  "Engineering",
  "Developing designs",
  "Modeling",
  "Arranging",
  "Dining",
  "Feasting",
  "Consuming",
  "Munching",
  "Chewing",
  "Snacking",
  "Devouring",
  "Ingesting",
  "Nibbling",
  "Gorging",
  "Grazing",
  "Binging",
  "Viewing anime",
  "Streaming anime",
  "Binging anime",
  "Enjoying anime",
  "Watching animated shows",
  "Watching animated series",
  "Watching Japanese animation",
  "Exploring anime",
  "Engaging with anime",
  "Following anime series",
  "Resting",
  "Napping",
  "Dozing",
  "Slumbering",
  "Getting some shut-eye",
  "Hitting the hay",
  "Catching some Z's",
  "Snoozing",
  "Lying down",
  "Turning in",
  "Getting rest",
  "Having a nap",
  "Sleeping",
  "Eating",
  "Watching anime",
  "Drawing",
];
let showBalls = true;
let balls = [];

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  let label = createElement("p", "What am I doing now?:");
  label.position(10, 600);
  input = createInput();
  input.attribute("type", "text");
  input.position(10, 640);
  input.input(updateValue);



  startthis = [
    { x: 196, y: 125 },
    { x: 275, y: 270 },
    { x: 325, y: 270 },
    { x: 410, y: 125 },
  ];

  endthis1 = [
    { x: 275, y: 270 },
    { x: 275, y: 270 },
    { x: 325, y: 270 },
    { x: 325, y: 270 },
  ];

  startthis2 = [
    { x: 164, y: 501 },
    { x: 164, y: 501 },
    { x: 434, y: 501 },
    { x: 434, y: 502 },
    { x: 164, y: 501 },
  ];

  enthis2 = [
    { x: 164, y: 501 },
    { x: 250, y: 357 },
    { x: 350, y: 357 },
    { x: 434, y: 502 },
    { x: 164, y: 501 },
  ];

  createBalls(5);
}

function draw() {
  background(20, 8, 255);

  console.log(mouseX, mouseY);

  let h = hour();
  let m = minute();
  let currentMinutes = h * 60 + m;

  lerpAmount = map(currentMinutes, 0, 1440, 0, 1);
  let downx = 120;
  let downy = 150;
  let longd = 360;
  let longd1 = 300;
  
  push();
    let ryellow = map(currentMinutes, 0, 1440, 200, 255);
    let gyellow = map(currentMinutes, 0, 1440, 200, 255);
    let byellow = map(currentMinutes, 0, 1440, 0, 50);
    fill(ryellow, gyellow, byellow); 
    
  rect(downx, downy, longd, longd1);
   pop();
  
  //ellipse(this.x, this.y, this.size);

  if (showBalls) {
    for (let ball of balls) {
      ball.move();
      ball.display();
    }
  }
  
push()
noFill()
  beginShape();
  curveVertex(120, 80);
  curveVertex(120, 80);
  curveVertex(300, 300);
  curveVertex(480, 80);
  curveVertex(480, 80);
  endShape();

  beginShape();
  curveVertex(120, 520);
  curveVertex(120, 520);
  curveVertex(300, 300);
  curveVertex(480, 520);
  curveVertex(480, 520);
  endShape();
  pop()
  
  push()
  fill(20, 64, 255)
  blendMode(ADD)
  beginShape();
  curveVertex(120, 80);
  curveVertex(120, 80);
  curveVertex(300, 300);
  curveVertex(480, 80);
  curveVertex(480, 80);
  endShape();

  beginShape();
  curveVertex(120, 520);
  curveVertex(120, 520);
  curveVertex(300, 300);
  curveVertex(480, 520);
  curveVertex(480, 520);
  endShape();
  pop()


  
  
push()
  noStroke()
   let rsand = map(currentMinutes, 0, 1440, 255, 255);
    let gsand = map(currentMinutes, 0, 1440, 150, 200);
    let bsand = map(currentMinutes, 0, 1440, 0, 50);
  fill(rsand,gsand,bsand)
  beginShape();
  for (let i = 0; i < startthis.length; i++) {
    let x = lerp(startthis[i].x, endthis1[i].x, lerpAmount);
    let y = lerp(startthis[i].y, endthis1[i].y, lerpAmount);
    vertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  for (let i = 0; i < startthis2.length; i++) {
    let x = lerp(startthis2[i].x, enthis2[i].x, lerpAmount);
    let y = lerp(startthis2[i].y, enthis2[i].y, lerpAmount);
    vertex(x, y);
  }
  endShape(CLOSE);
    //rect(298, 270, 4, 144);
  pop()

  push();
  fill(255, 204, 0)
  rect(100, 50, 400, 50, 20);
  rect(100, 500, 400, 50, 20);
  pop();
}

function updateValue() {
  value = input.value().toLowerCase();
  showBalls = false;

  if (keywords1.some((keyword) => value.includes(keyword.toLowerCase()))) {
    createBalls(60);
  } else if (
    keywords2.some((keyword) => value.includes(keyword.toLowerCase()))
  ) {
    createBalls(1);
  } else if (
    keywords3.some((keyword) => value.includes(keyword.toLowerCase()))
  ) {
    createBalls(20);
  } else {
    createBalls(5);
  }

  showBalls = true;
}


function createBalls(count) {
  balls = [];
  for (let i = 0; i < count; i++) {
    balls.push(new Ball()); 
  }
}



class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 40;
    this.updatePosition();
  }

  updatePosition() {
    this.x = constrain(random(0, 500), 120, 480);
    this.y = constrain(random(0, 500), 150, 450);
  }

  move() {
    this.updatePosition();
  }

  display() {
    push();
    let h = hour();
    let m = minute();
    let currentMinutes = h * 60 + m;
    let rblue = map(currentMinutes, 0, 1440, 0, 50);
    let gblue = map(currentMinutes, 0, 1440, 0, 50);
    let bblue = map(currentMinutes, 0, 1440, 100, 255);
    fill(rblue, gblue, bblue); 
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
