let video;
let poseNet;
let poses = [];
let skeletons = [];

// star1
let x_position1 = 400
let x_direction1 = 'right'
let speed1 = 3
let diameter1 = 40
let y_direction1 = 'down'
let y_position1 = 80
let angle = 0

//star2
let x_position2 = 345
let x_direction2 = 'right'
let speed2 = 2
let diameter2 = 45
let y_direction2 = 'down'
let y_position2 = 25

//star3
let x_position3 = 208
let x_direction3 = 'right'
let speed3 = 4
let diameter3 = 30
let y_direction3 = 'down'
let y_position3 = 27

//star4
let x_position4 = 159
let x_direction4 = 'right'
let speed4 = 4
let diameter4 = 35
let y_direction4 = 'down'
let y_position4 = 15

//star5
let x_position5 = 148
let x_direction5 = 'right'
let speed5 = 3
let diameter5 = 40
let y_direction5 = 'down'
let y_position5 = 68

//star6
let x_position6 = 35
let x_direction6 = 'right'
let speed6 = 3
let diameter6 = 45
let y_direction6 = 'down'
let y_position6 = 19

//star7
let x_position7 = 169
let x_direction7 = 'right'
let speed7 = 4
let diameter7 = 25
let y_direction7 = 'down'
let y_position7 = 146

//star8
let x_position8 = 209
let x_direction8 = 'right'
let speed8 = 5
let diameter8 = 70
let y_direction8 = 'down'
let y_position8 = 237

//star9
let x_position9 = 65
let x_direction9 = 'right'
let speed9 = 2
let diameter9 = 40
let y_direction9 = 'down'
let y_position9 = 180

//star10
let x_position10 = 11
let x_direction10 = 'right'
let speed10 = 5
let diameter10 = 30
let y_direction10 = 'down'
let y_position10 = 165

function setup() {
  createCanvas(650, 450);
  angleMode(DEGREES)
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  //image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  // drawKeypoints();
  // drawSkeleton();
let testx1
let testy1

let testx2
let testy2

if (poses.length > 0) {
  //print(poses[0].pose)
  let pose = poses[0].pose
  testx1 = pose.rightWrist.x
  testy1 = pose.rightWrist.y
  testx2 = pose.leftWrist.x
  testy2 = pose.leftWrist.y
  ellipse(pose.leftWrist.x, pose.leftWrist.y, 20, 20)
  ellipse(pose.rightWrist.x, pose.rightWrist.y, 20, 20)

  //star 1 left
  if (pose.leftWrist.y < height/2) {
    //print("left hand up, stars left")
    x_direction1 = 'left'
    speed1 = 3
  } else {
    //print("left hand down, stars still")
    x_direction1 = 'right'
    speed1 = 0
  }

  //star 2 left
  // if (pose.leftWrist.y < height/2) {
  //   print("left hand up, stars left")
  //   x_direction2 = 'left'
  //   speed2 = 2
  // } else {
  //   print("left hand down, stars still")
  //   x_direction2 = 'right'
  //   speed2 = 0
  // }

  //star 3 left
  if (pose.leftWrist.y < height/2) {
    //print("left hand up, stars left")
    x_direction3 = 'left'
    speed3 = 4
  } else {
    //print("left hand down, stars still")
    x_direction3 = 'right'
    speed3 = 0
  }

  //star 4 left
  // if (pose.leftWrist.y < height/2) {
  //   print("left hand up, stars left")
  //   x_direction4 = 'left'
  //   speed4 = 4
  // } else {
  //   print("left hand down, stars still")
  //   x_direction4 = 'right'
  //   speed4 = 0
  // }

  //star 5 left
  if (pose.leftWrist.y < height/2) {
     //print("left hand up, stars left")
    x_direction5 = 'left'
    speed5 = 3
  } else {
    //print("left hand down, stars still")
    x_direction5 = 'right'
    speed5 = 0
  }

  // //star 6 left
  // if (pose.leftWrist.y < height/2) {
  //   print("left hand up, stars left")
  //   x_direction6 = 'left'
  //   speed6 = 3
  // } else {
  //   print("left hand down, stars still")
  //   x_direction6 = 'right'
  //   speed6 = 0
  // }

  //star 7 left
  if (pose.leftWrist.y < height/2) {
     //print("left hand up, stars left")
    x_direction7 = 'left'
    speed7 = 4
  } else {
    //print("left hand down, stars still")
    x_direction7 = 'right'
    speed7 = 0
  }

  // //star 8 left
  // if (pose.leftWrist.y < height/2) {
  //    print("left hand up, stars left")
  //   x_direction8 = 'left'
  //   speed8 = 5
  // } else {
  //   print("left hand down, stars still")
  //   x_direction8 = 'right'
  //   speed8 = 0
  // }

  //star 9 left
  if (pose.leftWrist.y < height/2) {
   //print("left hand up, stars left")
    x_direction9 = 'left'
    speed9 = 2
  } else {
    //print("left hand down, stars still")
    x_direction9 = 'right'
    speed9 = 0
  }

  // //star 10 left
  // if (pose.leftWrist.y < height/2) {
  //    print("left hand up, stars left")
  //   x_direction10 = 'left'
  //   speed10 = 5
  // } else {
  //   print("left hand down, stars still")
  //   x_direction10 = 'right'
  //   speed10 = 0
  // }


  // //star 1 right
  // if (pose.rightWrist.y < height/2) {
  //   print("right hand up, stars right")
  //   x_direction1 = 'right'
  //   speed1 = 3
  // } else {
  //   print("right hand down, stars still")
  //   x_direction1 = 'left'
  //   speed1 = 0
  // }

  //star 2 right
  if (pose.rightWrist.y < height/2) {
   //print("right hand up, stars right")
    x_direction2 = 'right'
    speed2 = 2
  } else {
    //print("right hand down, stars still")
    x_direction2 = 'left'
    speed2 = 0
  }

  // //star 3 right
  // if (pose.rightWrist.y < height/2) {
  //   print("right hand up, stars right")
  //   x_direction3 = 'right'
  //   speed3 = 4
  // } else {
  //   print("right hand down, stars still")
  //   x_direction3 = 'left'
  //   speed3 = 0
  // }

  //star 4 right
  if (pose.rightWrist.y < height/2) {
    //print("right hand up, stars right")
    x_direction4 = 'right'
    speed4 = 4
  } else {
    //print("right hand down, stars still")
    x_direction4 = 'left'
    speed4 = 0
  }

  // //star 5 right
  // if (pose.rightWrist.y < height/2) {
  //  print("right hand up, stars right")
  //   x_direction5 = 'right'
  //   speed5 = 3
  // } else {
  //   print("right hand down, stars still")
  //   x_direction5 = 'left'
  //   speed5 = 0
  // }

  //star 6 right
  if (pose.rightWrist.y < height/2) {
    //print("right hand up, stars right")
    x_direction6 = 'right'
    speed6 = 3
  } else {
    //print("right hand down, stars still")
    x_direction6 = 'left'
    speed6 = 0
  }

  // //star 7 right
  // if (pose.rightWrist.y < height/2) {
  //   print("right hand up, stars right")
  //   x_direction7 = 'right'
  //   speed7 = 4
  // } else {
  //   print("right hand down, stars still")
  //   x_direction7 = 'left'
  //   speed7 = 0
  // }

  //star 8 right
  if (pose.rightWrist.y < height/2) {
    //print("right hand up, stars right")
    x_direction8 = 'right'
    speed8 = 5
  } else {
    //print("right hand down, stars still")
    x_direction8 = 'left'
    speed8 = 0
  }

  // //star 9 right
  // if (pose.rightWrist.y < height/2) {
  //  print("right hand up, stars right")
  //   x_direction9 = 'right'
  //   speed9 = 2
  // } else {
  //   print("right hand down, stars still")
  //   x_direction9 = 'left'
  //   speed9 = 0
  // }

  //star 10 right
  if (pose.rightWrist.y < height/2) {
    //print("right hand up, stars right")
    x_direction10 = 'right'
    speed10 = 5
  } else {
    //print("right hand down, stars still")
    x_direction10 = 'left'
    speed10 = 0
  }


//need to coordinate which hand cooresponds to what stars, they cant both be doing all of them
// right hand - even numbers (2, )
// left hand - odd number


  //still star1 placements
  // if (pose.rightWrist.y < height/3) {
  //   print("star still")
  //   speed1 = 0
  // } else {
  //   speed1 = 3
  // }

  // if (pose.leftWrist.y < height/3) {
  //   print("star still")
  //   speed1 = 0
  // } else {
  //   speed1 = 3
  // }


}

//starrynight background
fill(0,0,139)
rect(0, 0, 650, 450)

//big moon
noStroke()
fill(249, 227, 87, 200)
ellipse(563, 80, 180, 180)

noStroke()
fill(255, 215, 0)
ellipse(563, 80, 150, 150)

noStroke()
fill(255, 165, 0)
ellipse(563, 80, 100, 100,)

noStroke()
fill(255, 215, 0)
ellipse (580, 80, 70, 70)


// grassy hills
fill(34, 139, 34)
stroke(0, 100, 0)
strokeWeight(5)
beginShape()
  vertex(0, 434)
  vertex(0, 355)
  vertex(25, 361)
  vertex(56, 358)
  vertex(80, 357)
  vertex(268, 350)
  vertex(311, 343)
  vertex(355, 330)
  vertex(415, 328)
  vertex(482, 339)
  vertex(535, 339)
  vertex(598, 326)
  vertex(650, 323)
  vertex(650, 433)
endShape()  

fill(0, 100, 0)
beginShape()
  vertex(0, 434)
  vertex(36, 399)
  vertex(65, 395)
  vertex(80, 395)
  vertex(83, 416)
  vertex(89, 433)
endShape()  

//house
stroke(112, 93, 30)
fill(112, 93, 30)
strokeWeight(2)
beginShape()
  vertex(359, 398)
  vertex(359, 371)
  vertex(393, 371)
  vertex(393, 399)
endShape()  

//roof house
fill(70, 58, 19)
beginShape()
  vertex(345, 371)
  vertex(377, 350)
  vertex(402, 371)
endShape()

// house replicated
push()
translate(50, 10)
stroke(112, 93, 30)
fill(112, 93, 30)
strokeWeight(2)
beginShape()
  vertex(359, 398)
  vertex(359, 371)
  vertex(393, 371)
  vertex(393, 399)
endShape()  

fill(70, 58, 19)
beginShape()
  vertex(345, 371)
  vertex(377, 350)
  vertex(402, 371)
endShape()
pop()

// house replicated
push()
translate(100, 20)
stroke(112, 93, 30)
fill(112, 93, 30)
strokeWeight(2)
beginShape()
  vertex(359, 398)
  vertex(359, 371)
  vertex(393, 371)
  vertex(393, 399)
endShape()  

fill(70, 58, 19)
beginShape()
  vertex(345, 371)
  vertex(377, 350)
  vertex(402, 371)
endShape()
pop()




fill(107, 142, 35)
noStroke()
beginShape()
  vertex(276, 434)
  vertex(288, 410)
  vertex(306, 391)
  vertex(347, 387)
  vertex(376, 399)
  vertex(395, 413)
  vertex(419, 419)
  vertex(440, 433)
endShape()



noStroke()



noFill()
// bottom shape
beginShape()
  curveVertex(0, 337)
  curveVertex(0, 337)
  curveVertex(46, 343)
  curveVertex(97, 328)
  curveVertex(125, 335)
  curveVertex(191, 341)
  curveVertex(209, 330)
  curveVertex(233, 318)
  curveVertex(258, 316)
  curveVertex(270, 321)
  curveVertex(272, 327)
  curveVertex(287, 321)
  curveVertex(340, 292)
  curveVertex(359, 286)
  curveVertex(383, 284)
  curveVertex(384, 285)
  curveVertex(426, 308)
  curveVertex(426, 308)

  curveVertex(426, 308)
  curveVertex(442, 304)
  curveVertex(463, 301)
  curveVertex(485, 299)
  curveVertex(499, 299)
  curveVertex(516, 300)
  curveVertex(533, 304)
  curveVertex(548, 293)
  curveVertex(572, 276)
  curveVertex(598, 267)
  curveVertex(633, 265)
  curveVertex(653, 266)
  curveVertex(653, 266)
endShape()



//swirls in blue sky swirl
fill(135, 206, 250)
beginShape()
  curveVertex(9, 95)
  curveVertex(23, 100)

endShape()

// swirly in sky
noFill()
fill(173,216,230)
beginShape()
  curveVertex(0, 172)
  curveVertex(0, 172)
  curveVertex(0, 80)
  curveVertex(13, 86)
  curveVertex(28, 94)
  curveVertex(49, 106)
  curveVertex(68, 112)
  curveVertex(88, 112)
  curveVertex(107, 113)
  curveVertex(136, 107)
  curveVertex(159, 97)
  curveVertex(182, 83)
  curveVertex(201, 68)
  curveVertex(224, 55)
  curveVertex(256, 47)
  curveVertex(291, 47)
  curveVertex(318, 52)
  curveVertex(335, 64)
  curveVertex(350, 80)
  curveVertex(357, 99)
  curveVertex(358, 118)
  curveVertex(353, 139)
  curveVertex(345, 154)
  curveVertex(327, 162)
  curveVertex(300, 162)
  curveVertex(282, 153)
  curveVertex(267, 142)
  curveVertex(251, 131)
  curveVertex(232, 124)
  curveVertex(212, 125)
  curveVertex(191, 131)
  curveVertex(161, 141)
  curveVertex(142, 149)
  curveVertex(94, 160)
  curveVertex(71, 161)
  curveVertex(42, 156)
  curveVertex(17, 152)
  curveVertex(0, 151)
  curveVertex(0, 151)
endShape()

beginShape()
  curveVertex(277, 154)
  curveVertex(277, 154)
  curveVertex(263, 145)
  curveVertex(249, 135)
  curveVertex(232, 130)
  curveVertex(215, 130)
  curveVertex(199, 133)
  curveVertex(187, 139)
  curveVertex(181, 149)
  curveVertex(179, 163)
  curveVertex(183, 175)
  curveVertex(193, 189)
  curveVertex(200, 202)
  curveVertex(209, 211)
  curveVertex(216, 219)
  curveVertex(232, 226)
  curveVertex(258, 227)
  curveVertex(286, 223)
  curveVertex(312, 215)
  curveVertex(332, 205)
  curveVertex(351, 189)
  curveVertex(367, 177)
  curveVertex(386, 164)
  curveVertex(406, 157)
  curveVertex(423, 153)
  curveVertex(439, 152)
  curveVertex(448, 155)
  curveVertex(453, 160)
  curveVertex(457, 165)
  curveVertex(460, 173)
  curveVertex(460, 175)
  curveVertex(457, 183)
  curveVertex(446, 187)
  curveVertex(432, 184)
  curveVertex(422, 178)
  curveVertex(412, 179)
  curveVertex(407, 183)
  curveVertex(410, 190)
  curveVertex(421, 195)
  curveVertex(441, 201)
  curveVertex(461, 198)
  curveVertex(474, 189)
  curveVertex(483, 175)
  curveVertex(486, 150)
  curveVertex(476, 132)
  curveVertex(458, 122)
  curveVertex(436, 117)
  curveVertex(414, 118)
  curveVertex(393, 124)
  curveVertex(373, 134)
  curveVertex(357, 144)
  curveVertex(348, 153)
  curveVertex(339, 160)
  curveVertex(324, 164)
  curveVertex(309, 163)
  curveVertex(301, 163)
  curveVertex(284, 157)
  curveVertex(277, 154)
  curveVertex(277, 154)
endShape()


//swirls in blue sky swirl
fill(135, 206, 250)
beginShape()
  curveVertex(9, 95)
  curveVertex(9, 95)
  curveVertex(24, 105)
  curveVertex(39, 112)
  curveVertex(49, 112)
  curveVertex(49, 112)
endShape()

beginShape()
  curveVertex(33, 144)
  curveVertex(33, 144)
  curveVertex(55, 141)
  curveVertex(68, 142)
  curveVertex(71, 144)
  curveVertex(77, 143)
  curveVertex(79, 140)
  curveVertex(89, 137)
  curveVertex(96, 138)
  curveVertex(98, 141)
  curveVertex(95, 144)
  curveVertex(89, 145)
  curveVertex(78, 147)
  curveVertex(64, 147)
  curveVertex(64, 147)
endShape()

beginShape()
  curveVertex(152, 116)
  curveVertex(152, 116)
  curveVertex(168, 104)
  curveVertex(182, 97)
  curveVertex(189, 95)
  curveVertex(198, 92)
  curveVertex(206, 94)
  curveVertex(198, 96)
  curveVertex(186, 99)
  curveVertex(186, 99)
endShape()

beginShape()
  vertex(264, 129)
  vertex(264, 129)
  vertex(277, 140)
  vertex(287, 149)
  vertex(293, 150)
  vertex(297, 151)
  vertex(299, 154)
  vertex(304, 156)
  vertex(306, 152)
  vertex(300, 147)
  vertex(292, 146)
  vertex(286, 145)
endShape()

beginShape()
  vertex(306, 74)
  vertex(316, 74)
  vertex(332, 81)
  vertex(321, 77)
  vertex(334, 86)
  vertex(335, 94)
  vertex(334, 97)
  vertex(332, 101)
  vertex(328, 99)
  vertex(327, 96)
  vertex(329, 90)
  vertex(328, 88)
  vertex(325, 84)
  vertex(319, 80)
endShape()


beginShape()
  vertex(255, 88)
  vertex(265, 83)
  vertex(273, 86)
  vertex(280, 89)
  vertex(287, 95)
  vertex(290, 102)
  vertex(289, 109)
  vertex(283, 115)
  vertex(277, 115)
  vertex(272, 111)
  vertex(274, 109)
  vertex(278, 109)
  vertex(281, 107)
  vertex(281, 101)
  vertex(280, 97)
  vertex(274, 92)
  vertex(266, 89)
endShape()


beginShape()
  vertex(344, 130)
  vertex(342, 136)
  vertex(342, 139)
  vertex(338, 144)
  vertex(334, 148)
  vertex(330, 152)
  vertex(328, 155)
  vertex(333, 155)
  vertex(338, 153)
  vertex(341, 148)
  vertex(344, 145)
  vertex(347, 137)
endShape()


beginShape()
  vertex(197, 141)
  vertex(189, 146)
  vertex(185, 156)
  vertex(186, 160)
  vertex(186, 166)
  vertex(188, 171)
  vertex(190, 165)
  vertex(189, 158)
endShape()

beginShape()
  vertex(213, 184)
  vertex(213, 191)
  vertex(213, 196)
  vertex(217, 203)
  vertex(218, 207)
  vertex(225, 214)
  vertex(231, 217)
  vertex(235, 214)
  vertex(231, 211)
  vertex(226, 207)
  vertex(222, 204)
endShape()

beginShape()
  vertex(215, 156)
  vertex(221, 153)
  vertex(227, 155)
  vertex(226, 156)
  vertex(230, 159)
  vertex(234, 162)
  vertex(236, 167)
  vertex(233, 172)
  vertex(229, 173)
  vertex(224, 171)
  vertex(224, 168)
  vertex(228, 165)
  vertex(226, 162)
  vertex(223, 158)
  vertex(221, 156)
endShape()

beginShape()
  vertex(253, 152)
  vertex(272, 161)
  vertex(281, 165)
  vertex(293, 166)
  vertex(300, 167)
  vertex(309, 168)
  vertex(316, 168)
  vertex(319, 171)
  vertex(317, 174)
  vertex(309, 175)
  vertex(298, 174)
  vertex(279, 169)
endShape()



// green bush
fill(85,107,47)
beginShape()
  curveVertex(104, 450)
  curveVertex(104, 450)
  curveVertex(88, 430)
  curveVertex(84, 416)
  curveVertex(79, 398)
  curveVertex(78, 373)
  curveVertex(84, 342)
  curveVertex(94, 328)
  curveVertex(96, 312)
  curveVertex(84, 269)
  curveVertex(82, 241)
  curveVertex(87, 210)
  curveVertex(87, 184)
  curveVertex(80, 152)
  curveVertex(82, 137)
  curveVertex(82, 150)
  curveVertex(88, 165)
  curveVertex(92, 175)
  curveVertex(92, 175)
  curveVertex(101, 157)
  curveVertex(102, 138)
  curveVertex(104, 125)
  curveVertex(106, 130)
  curveVertex(106, 134)
  curveVertex(108, 137)
  curveVertex(113, 125)
  curveVertex(113, 108)
  curveVertex(107, 92)
  curveVertex(100, 79)
  curveVertex(96, 60)
  curveVertex(96, 39)
  curveVertex(98, 22)
  curveVertex(100, 11)
  curveVertex(97, 1)
  curveVertex(102, 8)
  curveVertex(102, 12)
  curveVertex(100, 24)
  curveVertex(99, 36)
  curveVertex(102, 48)
  curveVertex(106, 65)
  curveVertex(119, 81)
  curveVertex(128, 95)
  curveVertex(133, 120)
  curveVertex(133, 157)
  curveVertex(132, 177)
  curveVertex(137, 164)
  curveVertex(139, 151)
  curveVertex(141, 139)
  curveVertex(142, 147)
  curveVertex(142, 154)
  curveVertex(141, 162)
  curveVertex(138, 171)
  curveVertex(137, 179)
  curveVertex(140, 196)
  curveVertex(144, 215)
  curveVertex(147, 235)
  curveVertex(150, 259)
  curveVertex(150, 276)
  curveVertex(154, 266)
  curveVertex(155, 251)
  curveVertex(158, 238)
  curveVertex(162, 225)
  curveVertex(167, 219)
  curveVertex(164, 227)
  curveVertex(163, 237)
  curveVertex(163, 245)
  curveVertex(161, 261)
  curveVertex(160, 276)
  curveVertex(158, 286)
  curveVertex(163, 293)
  curveVertex(173, 307)
  curveVertex(184, 320)
  curveVertex(190, 332)

  curveVertex(193, 340)
  curveVertex(190, 318)
  curveVertex(183, 305)
  curveVertex(178, 292)
  curveVertex(175, 274)
  curveVertex(176, 254)
  curveVertex(184, 235)
  curveVertex(190, 218)
  curveVertex(192, 203)
  curveVertex(194, 216)
  curveVertex(194, 226)
  curveVertex(193, 239)
  curveVertex(195, 254)
  curveVertex(203, 271)
  curveVertex(215, 290)
  curveVertex(226, 306)
  curveVertex(228, 319)
  curveVertex(230, 338)
  curveVertex(236, 354)
  curveVertex(240, 368)
  

  curveVertex(241, 385)
  curveVertex(245, 366)
  curveVertex(244, 351)
  curveVertex(247, 329)
  curveVertex(250, 319)
  curveVertex(251, 326)
  curveVertex(250, 335)
  curveVertex(252, 347)
  curveVertex(260, 361)
  curveVertex(268, 377)
  curveVertex(272, 397)
  curveVertex(269, 416)
  curveVertex(265, 450)
  curveVertex(265, 450)
endShape()

// light blue streak above hills
noFill()
fill(176,196,222)
beginShape()
  curveVertex(0, 337)
  curveVertex(0, 337)
  curveVertex(0, 279)
  curveVertex(0, 279)
  curveVertex(15, 268)
  curveVertex(38, 256)
  curveVertex(59, 257)
  curveVertex(70, 268)
  curveVertex(80, 280)
  curveVertex(87, 283)
  curveVertex(91, 298)
  curveVertex(94, 306)
  curveVertex(96, 316)
  curveVertex(97, 317)
  curveVertex(95, 324)
  curveVertex(93, 329)
  curveVertex(81, 332)
  curveVertex(70, 337)
  curveVertex(50, 341)
  curveVertex(36, 342)
  curveVertex(35, 342)
  curveVertex(35, 342)
endShape()

  
beginShape()
  curveVertex(233, 318)
  curveVertex(233, 318)
  curveVertex(258, 316)
  curveVertex(270, 321)
  curveVertex(272, 327)
  curveVertex(287, 321)
  curveVertex(340, 292)
  curveVertex(359, 286)
  curveVertex(383, 284)
  curveVertex(384, 285)
  curveVertex(426, 308)
  curveVertex(426, 308)

  curveVertex(426, 308)
  curveVertex(442, 304)
  curveVertex(463, 301)
  curveVertex(485, 299)
  curveVertex(499, 299)
  curveVertex(516, 300)
  curveVertex(533, 304)
  curveVertex(548, 293)
  curveVertex(572, 276)
  curveVertex(598, 267)
  curveVertex(633, 265)
  curveVertex(650, 266)
  curveVertex(650, 266)
  
  curveVertex(650, 182)
  curveVertex(609, 178)
  curveVertex(577, 179)
  curveVertex(556, 184)
  curveVertex(532, 188)
  curveVertex(503, 186)
  curveVertex(488, 188)
  curveVertex(478, 195)
  curveVertex(459, 212)
  curveVertex(437, 230)
  curveVertex(412, 248)
  curveVertex(393, 254)
  curveVertex(365, 254)
  curveVertex(334, 255)
  curveVertex(308, 260)
  curveVertex(262, 265)
  curveVertex(223, 267)
  curveVertex(202, 271)
  curveVertex(226, 307)
  curveVertex(227, 319)
  curveVertex(227, 319)
endShape()

// star 1
noStroke()
fill(250, 236, 145, 200)
ellipse(x_position1, y_position1, 40, 40)

noStroke()
fill(255, 215,0)
ellipse(x_position1, y_position1, 20, 20)

// star 2
noStroke()
fill(255, 165, 0, 200)
ellipse(x_position2, y_position2, 45, 45)

noStroke()
fill(255, 215, 0)
ellipse(x_position2, y_position2, 25, 25)


// star 3
noStroke()
fill(250, 236, 145, 200)
ellipse(x_position3, y_position3, 30, 30)

noStroke()
fill(255, 165, 0)
ellipse(x_position3, y_position3, 15, 15)

noStroke()
fill(255, 127, 80)
ellipse(x_position3, y_position3, 5, 5)

//star 4
noStroke()
fill(255, 165, 0, 200)
ellipse(x_position4, y_position4, 35, 35)

noStroke()
fill(255, 215, 0)
ellipse(x_position4, y_position4, 10, 10)

// star 5
noStroke()
fill(250, 235, 161, 200)
ellipse (x_position5, y_position5, 40, 40)

noStroke()
fill(252, 227, 102, 250)
ellipse (x_position5, y_position5, 30, 30)

noStroke()
fill(246, 186, 46)
ellipse(x_position5, y_position5, 5, 5)

// star 6
noStroke()
fill(247, 239, 187, 200)
ellipse(x_position6, y_position6, 45, 45)

noStroke()
fill(246, 228, 111)
ellipse (x_position6, y_position6, 25, 25)

noStroke()
fill(255, 160, 122)
ellipse (x_position6, y_position6, 7, 7)

//star 7
noStroke()
fill(247, 239, 187, 170)
ellipse(x_position7, y_position7, 25, 25)

noStroke()
fill(247, 210, 87)
ellipse(x_position7, y_position7, 15, 15)

noStroke()
fill(255, 160, 122)
ellipse(x_position7, y_position7, 10, 10)

//star 8
noStroke()
fill(250, 250, 210, 210)
ellipse(x_position8, y_position8, 70, 70)

noStroke()
fill(255, 215, 0)
ellipse (x_position8, y_position8, 20, 20)

noStroke()
fill(250, 128, 114)
ellipse(x_position8, y_position8, 10, 10)

//star 9
noStroke()
fill(250, 236, 145, 200)
ellipse(x_position9, y_position9, 40, 40)

noStroke()
fill(255, 215,0)
ellipse(x_position9, y_position9, 20, 20)

noStroke()
fill(255, 160, 122)
ellipse (x_position9, y_position9, 7, 7)

//star 10
noStroke()
fill(250, 236, 145, 200)
ellipse(x_position10, y_position10, 30, 30)

noStroke()
fill(255, 165, 0)
ellipse(x_position10, y_position10, 15, 15)




ellipse(testx1, testy1, 20, 20)
ellipse(testx2, testy2, 20, 20)






//star1

// draws a line contiually across the screen, one after another. sets the variable with a single =
  strokeWeight(10)
  noStroke()

  if (x_direction1 == 'right') {
    x_position1 = x_position1 + speed1
  

  }

  if (x_direction1 == 'left'){
    x_position1 = x_position1 - speed1

  } 

  // right wall
  if (x_position1 > width + diameter1) {
    x_position1 = -diameter1
    //x_direction2 = 'left'
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }
 // left wall
  if (x_position1 < 0 - diameter1) {
    x_position1 = width + diameter1
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }

// star 2

  strokeWeight(10)
  noStroke()
  
  //ellipse(x_position2, y_position2, diameter2, diameter2)


  if (x_direction2 == 'right') {
    x_position2 = x_position2 + speed2
  

  }

  if (x_direction2 == 'left'){
    x_position2 = x_position2 - speed2

  } 


  // right wall
  if (x_position2 > width + diameter2) {
    x_position2 = -diameter2
    //x_direction2 = 'left'
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }
  // left wall
  if (x_position2 < 0 - diameter2) {
    x_position2 = width + diameter2
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }


  //star3

  strokeWeight(10)
  noStroke()

  if (x_direction3 == 'right') {
    x_position3 = x_position3 + speed3
  

  }

  if (x_direction3 == 'left'){
    x_position3 = x_position3 - speed3

  } 

  // right wall
  if (x_position3 > width + diameter3) {
    x_position3 = -diameter3
    //x_direction2 = 'left'
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }
  // left wall
  if (x_position3 < 0 - diameter3) {
    x_position3 = width + diameter3
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }

//star4
  strokeWeight(10)
  noStroke()

  if (x_direction4 == 'right') {
    x_position4 = x_position4 + speed4
  

  }

  if (x_direction4 == 'left'){
    x_position4 = x_position4 - speed4

  } 

  // right wall
  if (x_position4 > width + diameter4) {
    x_position4 = -diameter4
    //x_direction2 = 'left'
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }
  // left wall
  if (x_position4 < 0 - diameter4) {
    x_position4 = width + diameter4
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }


//star5
  strokeWeight(10)
  noStroke()

  if (x_direction5 == 'right') {
    x_position5 = x_position5 + speed5
  

  }

  if (x_direction5 == 'left'){
    x_position5 = x_position5 - speed5

  } 

  // right wall
  if (x_position5 > width + diameter5) {
    x_position5 = -diameter5
    //x_direction2 = 'left'
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }
  // left wall
  if (x_position5 < 0 - diameter5) {
    x_position5 = width + diameter5
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }


//star6
  strokeWeight(10)
  noStroke()

  if (x_direction6 == 'right') {
    x_position6 = x_position6 + speed6
  

  }

  if (x_direction6 == 'left'){
    x_position6 = x_position6 - speed6

  } 

  // right wall
  if (x_position6 > width + diameter6) {
    x_position6 = -diameter6
    //x_direction2 = 'left'
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }
  // left wall
  if (x_position6 < 0 - diameter6) {
    x_position6 = width + diameter6
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }

//star7
  strokeWeight(10)
  noStroke()

  if (x_direction7 == 'right') {
    x_position7 = x_position7 + speed7
  

  }

  if (x_direction7 == 'left'){
    x_position7 = x_position7 - speed7

  } 

  // right wall
  if (x_position7 > width + diameter7) {
    x_position7 = -diameter7
    //x_direction2 = 'left'
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }
  // left wall
  if (x_position7 < 0 - diameter7) {
    x_position7 = width + diameter7
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }

//star8
  strokeWeight(10)
  noStroke()

  if (x_direction8 == 'right') {
    x_position8 = x_position8 + speed8
  

  }

  if (x_direction8 == 'left'){
    x_position8 = x_position8 - speed8

  } 

  // right wall
  if (x_position8 > width + diameter8) {
    x_position8 = -diameter8
    //x_direction2 = 'left'
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }
  // left wall
  if (x_position8 < 0 - diameter8) {
    x_position8 = width + diameter8
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }

//star9
  strokeWeight(10)
  noStroke()

  if (x_direction9 == 'right') {
    x_position9 = x_position9 + speed9
  

  }

  if (x_direction9 == 'left'){
    x_position9 = x_position9 - speed9

  } 

  // right wall
  if (x_position9 > width + diameter9) {
    x_position9 = -diameter9
    //x_direction2 = 'left'
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }
  // left wall
  if (x_position9 < 0 - diameter9) {
    x_position9 = width + diameter9
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }


//star10
  strokeWeight(10)
  noStroke()

  if (x_direction10 == 'right') {
    x_position10 = x_position10 + speed10
  

  }

  if (x_direction10 == 'left'){
    x_position10 = x_position10 - speed10

  } 

  // right wall
  if (x_position10 > width + diameter10) {
    x_position10 = -diameter10
    //x_direction2 = 'left'
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }
  // left wall
  if (x_position10 < 0 - diameter10) {
    x_position10 = width + diameter10
    //fill(random(0, 255), random(0, 255), random(0, 255))
  }


}




// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = poses[i].pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    // For every skeleton, loop through all body connections
    for (let j = 0; j < poses[i].skeleton.length; j++) {
      let partA = poses[i].skeleton[j][0];
      let partB = poses[i].skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}


function mouseClicked() {
  print(int(mouseX), int(mouseY))

}