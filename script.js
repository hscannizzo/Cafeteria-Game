
const totalNumberOfLevels = 5 // Change this to the total number of violations on each level
let levelsFinished = 0

const $bronxLevel = document.getElementById('bronx')
const $brooklynLevel = document.getElementById('brooklyn')
const $queensLevel = document.getElementById('queens')
const $manhattanLevel = document.getElementById('manhattan')
const $statenislandLevel = document.getElementById('statenisland')
const $enterscreen = document.getElementById('title-screen')
const $levelselect = document.getElementById('levelselect')




let playBtn = document.getElementsByClassName("play");
let pauseBtn = document.getElementsByClassName("pause");

const levelselectmusic = document.getElementById('levelselectmusic')
const bronxmusic = document.getElementById('bronxmusic')
const brooklynmusic = document.getElementById('brooklynmusic')
const queensmusic = document.getElementById('queensmusic')
const manhattanmusic = document.getElementById('manhattanmusic')
const statenislandmusic = document.getElementById('statenislandmusic')
const levelpassedmusic = document.getElementById('levelpassedmusic')
const eleanorsound = document.getElementById('eleanorsound')
const chefsound = document.getElementById('chefsound')
const itemcollectsound = document.getElementById('itemcollectsound')
const buttonclicksound = document.getElementById('buttonclicksound')
const congratsmusic = document.getElementById('congratsmusic')

function gotoLocationEnter(locationname){
   const $levelbutton =  document.getElementById ('fadeButton')
console.log ($levelbutton) 
buttonclicksound.play();
$levelbutton.style.display="none";
levelselectmusic.play();
loop=true
 
//hide all levels
console.log (locationname)
   $bronxLevel.style.display="none"
   $brooklynLevel.style.display="none"
   $queensLevel.style.display="none"
   $manhattanLevel.style.display="none"
   $statenislandLevel.style.display="none"
   $levelselect.style.display="none"
 
   
   //show level for location name
   //use location name as id to find specific level element
   const selectedlevel=document.getElementById (locationname)
   console.log (selectedlevel)
   selectedlevel.style.display= "block"
   ;
  
}


var div = document.querySelector(".fade");
var btn = document.querySelector(".fadeButton");
btn.addEventListener("click", function Fading(){
  div.classList.add("elementToFadeOut");
  

  var timerId = setTimeout(function Fading () {
   document.getElementById("title-screen").style.zIndex = "0";
},
2800)
  
});



function gotoLocationLevels(locationname){
   console.log (locationname)
//hide all levels
$bronxLevel.style.display="none"
$brooklynLevel.style.display="none"
$queensLevel.style.display="none"
$manhattanLevel.style.display="none"
$statenislandLevel.style.display="none"
$enterscreen.style.display="none"
$levelselect.style.display="none"
//show level for location name
//use location name as id to find specific level element
const selectedlevel=document.getElementById (locationname)
console.log (selectedlevel)
selectedlevel.style.display= "block"
}


const $bronxschool= document.getElementById ("bronxschool")
$bronxschool.addEventListener("click",function (){
  brooklynmusic.pause();
  levelselectmusic.pause();
  queensmusic.pause();
  manhattanmusic.pause();
  statenislandmusic.pause();
   bronxmusic.play();
   loop=true 
})
const $brooklynschool= document.getElementById ("brooklynschool")
$brooklynschool.addEventListener("click",function (){
   bronxmusic.pause();
   levelselectmusic.pause();
   queensmusic.pause();
   manhattanmusic.pause();
   statenislandmusic.pause();
    brooklynmusic.play();
    loop=true
})
const $queensschool= document.getElementById ("queensschool")
$queensschool.addEventListener("click",function (){
   brooklynmusic.pause();
   levelselectmusic.pause();
   bronxmusic.pause();
   manhattanmusic.pause();
   statenislandmusic.pause();
    queensmusic.play();
    loop=true 
   
})
const $manhattanschool= document.getElementById ("manhattanschool")
$manhattanschool.addEventListener("click",function (){
   brooklynmusic.pause();
   levelselectmusic.pause();
   queensmusic.pause();
   bronxmusic.pause();
   statenislandmusic.pause();
   manhattanmusic.play();
    loop=true 
})
const $statenislandschool= document.getElementById ("statenislandschool")
$statenislandschool.addEventListener("click",function (){
   brooklynmusic.pause();
   levelselectmusic.pause();
   queensmusic.pause();
   manhattanmusic.pause();
   bronxmusic.pause();
   statenislandmusic.play();
    loop=true 
})
//bronx


const $kitchenLevelbronx = document.getElementById('kitchenbronx')
const $lunchlineLevelbronx = document.getElementById('lunchlinebronx')
const $cafe1Levelbronx = document.getElementById('cafe1bronx')
const $cafe2Levelbronx = document.getElementById('cafe2bronx')


const totalNumberOfViolationsbronx = 10 // Change this to the total number of violations on each level
let violationsFoundbronx = 0




const $ratsbronx= document.getElementById ("ratsbronx")

$ratsbronx.addEventListener("click",function (){
 console.log($ratsbronx)
 // hide rats

   itemcollectsound.play();
  volume: 2

 $ratsbronx.style.display="none"
 // show rat in footer
 document.getElementById ("footerratsbronx").style.opacity=1
 // show popup

 const $ratspopupbronx =  document.getElementById ('ratspopupbronx')
 console.log ($ratspopupbronx)  
 $ratspopupbronx.style.display="block"
 //close popup
 $ratspopupbronx.addEventListener('click', function(){
 $ratspopupbronx.style.display= "none"

   violationsFoundbronx = violationsFoundbronx + 1
 
   if (violationsFoundbronx === totalNumberOfViolationsbronx) {
     showEndScreenbronx()
   }
})
   function showEndScreenbronx() {
    const $endpopupbronx =  document.getElementById ('endpopupbronx')
    console.log ($endpopupbronx)  
    $endpopupbronx.style.display="block"
    bronxmusic.pause();
    levelpassedmusic.play()
}
 })

const $lightbronx= document.getElementById ("lightingbronx")
$lightbronx.addEventListener("click",function (){
    console.log($lightbronx)
    itemcollectsound.play();
    volume: 2
    // hide light
   $lightbronx.style.display="none"
    // show light in footer
    document.getElementById ("footerlightbronx").style.opacity=1
    // show popup
    
    const $lightingpopupbronx =  document.getElementById ('badlightingpopupbronx')
    console.log ($lightingpopupbronx)  
    $lightingpopupbronx.style.display="block"
    //close popup
    $lightingpopupbronx.addEventListener('click', function(){
    $lightingpopupbronx.style.display= "none"
    
    violationsFoundbronx = violationsFoundbronx + 1
 
    if (violationsFoundbronx === totalNumberOfViolationsbronx) {
            showEndScreenbronx()
          }
      })
      function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
        bronxmusic.pause();
        levelpassedmusic.play()
    }
})
   
const $fliesbronx= document.getElementById ("fliesbronx")
$fliesbronx.addEventListener("click",function (){
    console.log($fliesbronx)
    itemcollectsound.play();
    volume: 2
    // hide light
   $fliesbronx.style.display="none"
    // show light in footer
    document.getElementById ("footerfliesbronx").style.opacity=1
    // show popup
    
    const $fliespopupbronx =  document.getElementById ('fliespopupbronx')
    console.log ($fliespopupbronx)  
    $fliespopupbronx.style.display="block"
    //close popup
    $fliespopupbronx.addEventListener('click', function(){
    $fliespopupbronx.style.display= "none"

    violationsFoundbronx = violationsFoundbronx + 1
 
    if (violationsFoundbronx === totalNumberOfViolationsbronx) {
          showEndScreenbronx()
        }
    })
    function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
        bronxmusic.pause();
        levelpassedmusic.play()
    }
}) 

const $verminproofbronx= document.getElementById ("verminproofbronx")
$verminproofbronx.addEventListener("click",function (){
    console.log($verminproofbronx)
    itemcollectsound.play();
    volume: 2
    // hide light
   $verminproofbronx.style.display="none"
    // show light in footer
    document.getElementById ("footerverminproofbronx").style.opacity=1
    // show popup
    const $verminproofpopupbronx =  document.getElementById ('verminproofpopupbronx')
    console.log ($verminproofpopupbronx)  
    $verminproofpopupbronx.style.display="block"
    //close popup
    $verminproofpopupbronx.addEventListener('click', function(){
    $verminproofpopupbronx.style.display= "none"
    violationsFoundbronx = violationsFoundbronx + 1
 
    if (violationsFoundbronx === totalNumberOfViolationsbronx) {
          showEndScreenbronx()
        }
    })
    function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
        bronxmusic.pause();
        levelpassedmusic.play()
    }
})  
   const $chefbronx= document.getElementById ("chefbronx")
   $chefbronx.addEventListener("click",function (){
       console.log($chefbronx)
       chefsound.play();
       volume: 2
       // hide rats
      $chefbronx.style.display="none"
       // show rat in footer
       document.getElementById ("footercertificatebronx").style.opacity=1
       // show popup
    const $chefpopupbronx =  document.getElementById ('chefpopupbronx')
     console.log ($chefpopupbronx)  
    $chefpopupbronx.style.display="block"
    //change apron color
    const $aproncolor1bronx =  document.getElementById ('characterbox2bronx')
    console.log ($aproncolor1bronx)  
   $aproncolor1bronx.style.display="block"

      })
     
      function exitButton2bronx (chefbuttonbronx){ 
        console.log (chefbuttonbronx)
        //hide popup once clicked
        const $chefpopupbronx= document.getElementById ('chefpopupbronx')
        buttonclicksound.play();
        $chefpopupbronx.style.display="none"
    //show new popup
    const $certificatepopupbronx =  document.getElementById ('certificatepopupbronx')
    console.log ($certificatepopupbronx)  
    $certificatepopupbronx.style.display="block"
    //close popup
    $certificatepopupbronx.addEventListener('click', function(){
    $certificatepopupbronx.style.display= "none"

        
    violationsFoundbronx = violationsFoundbronx + 1
 
    if (violationsFoundbronx === totalNumberOfViolationsbronx) {
          showEndScreenbronx()
        }
        function showEndScreenbronx() {
            const $endpopupbronx =  document.getElementById ('endpopupbronx')
            console.log ($endpopup)  
            $endpopupbronx.style.display="block"
            bronxmusic.pause();
            levelpassedmusic.play()
        }
    })}


    const $eleanorbronx= document.getElementById ("lunchladybronx")
    $eleanorbronx.addEventListener("click",function (){
        console.log($eleanorbronx)
        eleanorsound.play();
        volume: 2
        // hide rats
       $eleanorbronx.style.display= "none"
        // show rat in footer
        document.getElementById ("footerhandwashbronx").style.opacity=1
        // show popup
     const $eleanorpopupbronx =  document.getElementById ('eleanorpopupbronx')
      console.log ($eleanorpopupbronx)  
     $eleanorpopupbronx.style.display= "block"
     //change apron color
     const $aproncolor2bronx =  document.getElementById ('characterbox3bronx')
     console.log ($aproncolor2bronx)  
     $aproncolor2bronx.style.display= "block"
    })
    function exitButton3bronx (eleanorbuttonbronx){ 
        console.log (eleanorbuttonbronx)
        //hide popup once clicked
        const $eleanorpopupbronx= document.getElementById ('eleanorpopupbronx')
        buttonclicksound.play();
        $eleanorpopupbronx.style.display= "none"
        eleanorsound.pause();
        //show new popup
    
        const $handwashpopupbronx =  document.getElementById ('handwashpopupbronx')
        console.log ($handwashpopupbronx)  
        $handwashpopupbronx.style.display= "block"
        //close popup
        $handwashpopupbronx.addEventListener('click', function(){
        $handwashpopupbronx.style.display= "none"
        violationsFoundbronx = violationsFoundbronx + 1
 
        if (violationsFoundbronx === totalNumberOfViolationsbronx) {
          showEndScreenbronx()
        }
        function showEndScreenbronx() {
            const $endpopupbronx =  document.getElementById ('endpopupbronx')
            console.log ($endpopupbronx)  
            $endpopupbronx.style.display="block"
            bronxmusic.pause();
            levelpassedmusic.play()
        }
    })} 
     


    const $contaminationbronx= document.getElementById ("contaminationbronx")
    $contaminationbronx.addEventListener("click",function (){
        console.log($contaminationbronx)
        itemcollectsound.play();
        volume: 2
        // hide light
       $contaminationbronx.style.display="none"
        // show light in footer
        document.getElementById ("footercontaminationbronx").style.opacity=1
        // show popup
        const $contaminationpopupbronx =  document.getElementById ('contaminationpopupbronx')
        console.log ($contaminationpopupbronx)  
        $contaminationpopupbronx.style.display="block"
        //close popup
        $contaminationpopupbronx.addEventListener('click', function(){
        $contaminationpopupbronx.style.display= "none"
    
        violationsFoundbronx = violationsFoundbronx + 1
 
        if (violationsFoundbronx === totalNumberOfViolationsbronx) {
              showEndScreenbronx()
            }
        })
        function showEndScreenbronx() {
            const $endpopupbronx =  document.getElementById ('endpopupbronx')
            console.log ($endpopupbronx)  
            $endpopupbronx.style.display="block"
            bronxmusic.pause();
            levelpassedmusic.play()
        }
    }) 

    const $bulbbronx= document.getElementById ("bulbbronx")
    $bulbbronx.addEventListener("click",function (){
        console.log($bulbbronx)
        itemcollectsound.play();
        volume: 2
        // hide light
       $bulbbronx.style.display="none"
        // show light in footer
        document.getElementById ("footerbulbbronx").style.opacity=1
        // show popup
        const $bulbpopupbronx =  document.getElementById ('bulbpopupbronx')
        console.log ($bulbpopupbronx)  
        $bulbpopupbronx.style.display="block"
        //close popup
        $bulbpopupbronx.addEventListener('click', function(){
        $bulbpopupbronx.style.display= "none"
    
        violationsFoundbronx = violationsFoundbronx + 1
 
        if (violationsFoundbronx === totalNumberOfViolationsbronx) {
              showEndScreenbronx()
            }
      })
      function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
        bronxmusic.pause();
        levelpassedmusic.play()
    }
    }) 

    const $improperbronx= document.getElementById ("nonfoodcontactbronx")
    $improperbronx.addEventListener("click",function (){
        console.log($improperbronx)
        itemcollectsound.play();
        volume: 2
        // hide light
       $improperbronx.style.display="none"
        // show light in footer
        document.getElementById ("footernonfoodcontactbronx").style.opacity=1
        // show popup
        const $improperpopupbronx =  document.getElementById ('improperpopupbronx')
        console.log ($improperpopupbronx)  
        $improperpopupbronx.style.display="block"
        //close popup
        $improperpopupbronx.addEventListener('click', function(){
        $improperpopupbronx.style.display= "none"
        violationsFoundbronx = violationsFoundbronx + 1
 
        if (violationsFoundbronx === totalNumberOfViolationsbronx) {
           showEndScreenbronx()
         }
       })
       function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
        bronxmusic.pause();
        levelpassedmusic.play()
    }
    }) 
   

   const $plumbingbronx= document.getElementById ("plumbingbronx")
   $plumbingbronx.addEventListener("click",function (){
       console.log($plumbingbronx)
       itemcollectsound.play();
       volume: 2
       // hide light
      $plumbingbronx.style.display="none"
       // show light in footer
       document.getElementById ("footerplumbingbronx").style.opacity=1
       // show popup
       const $plumbingpopupbronx =  document.getElementById ('plumbingpopupbronx')
       console.log ($plumbingpopupbronx)  
       $plumbingpopupbronx.style.display="block"
       //close popup
       $plumbingpopupbronx.addEventListener('click', function(){
       $plumbingpopupbronx.style.display= "none"
       violationsFoundbronx = violationsFoundbronx + 1
 
       if (violationsFoundbronx === totalNumberOfViolationsbronx) {
         showEndScreenbronx()
       }
      })
      function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
        bronxmusic.pause();
        levelpassedmusic.play()
    }
      })


const $mapbronx= document.getElementById ("mapbronx")
$mapbronx.addEventListener("click",function (){
    console.log($mapbronx)
//bring up map popup
const $mappopupbronx = document.getElementById ('mappopupbronx')
console.log (mappopupbronx)
mappopupbronx.style.display = 'block'
   })

   const mappopupbronx = document.getElementById('mappopupbronx')
   console.log (mappopupbronx)
   mappopupbronx.addEventListener('click', function() {
    mappopupbronx.style.display = 'none'
  })

function gotoLocationbronx(locationnamebrooklyn){
console.log (locationnamebrooklyn)
//hide all levels
$kitchenLevelbronx.style.display="none"
$cafe1Levelbronx.style.display="none"
$cafe2Levelbronx.style.display="none"
$lunchlineLevelbronx.style.display="none"

//show level for location name
//use location name as id to find specific level element
const selectedlevel=document.getElementById (locationnamebrooklyn)
console.log (selectedlevel)
selectedlevel.style.display= "block"
}



function exitButtonbronx(buttonnamebronx) {
    console.log (buttonnamebronx)
    //hide popup once clicked
    buttonclicksound.play();
    beginningpopupbronx.style.display="none"
    

    
}


function gotoLevelSelectbronx (buttonname) {
   endpopupbronx.style.display="none"
   $bronxLevel.style.display="none"
   $brooklynLevel.style.display="none"
   $queensLevel.style.display="none"
   $manhattanLevel.style.display="none"
   $statenislandLevel.style.display="none"
   $enterscreen.style.display="none"
   $levelselect.style.display="block"
   levelselectmusic.play()
   
   const $bronxfinished = document.getElementById ('bronxfinished')
   console.log ($bronxfinished)
   $bronxfinished.style.display = 'block'
    
   levelsFinished = levelsFinished+ 1
    
   if (levelsFinished === totalNumberOfLevels) {
     showEndScreenCongrats()
   }

function showEndScreenCongrats() {
 const $endpopupcongrats =  document.getElementById ('endpopupcongrats')
 console.log ($endpopupcongrats)  
 $endpopupcongrats.style.display="block"
 levelselectmusic.pause ();
 congratsmusic.play();
//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 5;
cy = ctx.canvas.height / 5;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
initConfetti();
render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener('click', function () {
  initConfetti();
});
}

}

   


   //show level for location name


//END BRONX


//START BROOKLYN

const $kitchenLevelbrooklyn = document.getElementById('kitchenbrooklyn')
const $cafe1Levelbrooklyn = document.getElementById('cafe1brooklyn')
const $cafe2Levelbrooklyn = document.getElementById('cafe2brooklyn')
const $lunchlineLevelbrooklyn = document.getElementById('lunchlinebrooklyn')

const totalNumberOfViolationsbrooklyn = 10 // Change this to the total number of violations on each level
let violationsFoundbrooklyn = 0

const $ratsbrooklyn= document.getElementById ("ratsbrooklyn")
$ratsbrooklyn.addEventListener("click",function (){
 console.log($ratsbrooklyn)
 itemcollectsound.play();
 volume: 2
 // hide rats
$ratsbrooklyn.style.display="none"
 // show rat in footer
 document.getElementById ("footerratsbrooklyn").style.opacity=1
 // show popup
 const $ratspopupbrooklyn =  document.getElementById ('ratspopupbrooklyn')
console.log ($ratspopupbrooklyn)  
$ratspopupbrooklyn.style.display="block"
//close popup
$ratspopupbrooklyn.addEventListener('click', function(){
$ratspopupbrooklyn.style.display= "none"
violationsFoundbrooklyn = violationsFoundbrooklyn + 1
    
if (violationsFoundbrooklyn === totalNumberOfViolationsbrooklyn) {
  showEndScreenbrooklyn()
}
})

function showEndScreenbrooklyn() {
const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
console.log ($endpopupbrooklyn)  
$endpopupbrooklyn.style.display="block"
brooklynmusic.pause();
levelpassedmusic.play()
}
})

   
const $fliesbrooklyn= document.getElementById ("fliesbrooklyn")
$fliesbrooklyn.addEventListener("click",function (){
    console.log($fliesbrooklyn)
    itemcollectsound.play();
    volume: 2
    // hide light
   $fliesbrooklyn.style.display="none"
    // show light in footer
    document.getElementById ("footerfliesbrooklyn").style.opacity=1
    // show popup
    const $fliespopupbrooklyn =  document.getElementById ('fliespopupbrooklyn')
    console.log ($fliespopupbrooklyn)  
    $fliespopupbrooklyn.style.display="block"
    //close popup
    $fliespopupbrooklyn.addEventListener('click', function(){
    $fliespopupbrooklyn.style.display= "none"
    violationsFoundbrooklyn = violationsFoundbrooklyn + 1
    
    if (violationsFoundbrooklyn === totalNumberOfViolationsbrooklyn) {
      showEndScreenbrooklyn()
    }
    })
    function showEndScreenbrooklyn() {
    const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
    console.log ($endpopupbrooklyn)  
    $endpopupbrooklyn.style.display="block"
    brooklynmusic.pause();
levelpassedmusic.play()
   }
    
}) 

const $verminproofbrooklyn= document.getElementById ("verminproofbrooklyn")
$verminproofbrooklyn.addEventListener("click",function (){
    console.log($verminproofbrooklyn)
    itemcollectsound.play();
    volume: 2
    // hide light
   $verminproofbrooklyn.style.display="none"
    // show light in footer
    document.getElementById ("footerverminproofbrooklyn").style.opacity=1
    // show popup
    const $verminproofpopupbrooklyn =  document.getElementById ('verminproofpopupbrooklyn')
    console.log ($verminproofpopupbrooklyn)  
    $verminproofpopupbrooklyn.style.display="block"
    //close popup
    $verminproofpopupbrooklyn.addEventListener('click', function(){
    $verminproofpopupbrooklyn.style.display= "none"
    violationsFoundbrooklyn = violationsFoundbrooklyn + 1
    
    if (violationsFoundbrooklyn === totalNumberOfViolationsbrooklyn) {
      showEndScreenbrooklyn()
    }
})
function showEndScreenbrooklyn() {
  const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
  console.log ($endpopupbrooklyn)  
  $endpopupbrooklyn.style.display="block"
  brooklynmusic.pause();
levelpassedmusic.play()
}
   
})  
   const $chefbrooklyn= document.getElementById ("chefbrooklyn")
   $chefbrooklyn.addEventListener("click",function (){
       console.log($chefbrooklyn)
       chefsound.play();
       volume: 2
       // hide rats
      $chefbrooklyn.style.display="none"
       // show rat in footer
       document.getElementById ("footercertificatebrooklyn").style.opacity=1
       // show popup
    const $chefpopupbrooklyn =  document.getElementById ('chefpopupbrooklyn')
     console.log ($chefpopupbrooklyn)  
    $chefpopupbrooklyn.style.display="block"
    //change apron color
    const $aproncolor1brooklyn =  document.getElementById ('characterbox2brooklyn')
    console.log ($aproncolor1brooklyn)  
   $aproncolor1brooklyn.style.display="block"
   
      })


    function exitButton2brooklyn (chefbuttonbrooklyn){ 
    console.log (chefbuttonbrooklyn)
    //hide popup once clicked
    const $chefpopupbrooklyn= document.getElementById ('chefpopupbrooklyn')
    buttonclicksound.play();
    $chefpopupbrooklyn.style.display="none"
//show new popup
const $certificatepopupbrooklyn =  document.getElementById ('certificatepopupbrooklyn')
console.log ($certificatepopupbrooklyn)  
$certificatepopupbrooklyn.style.display="block"
//close popup
$certificatepopupbrooklyn.addEventListener('click', function(){
$certificatepopupbrooklyn.style.display= "none"
violationsFoundbrooklyn = violationsFoundbrooklyn + 1
    
if (violationsFoundbrooklyn === totalNumberOfViolationsbrooklyn) {
  showEndScreenbrooklyn()
}
})
function showEndScreenbrooklyn() {
const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
console.log ($endpopupbrooklyn)  
$endpopupbrooklyn.style.display="block"
brooklynmusic.pause();
levelpassedmusic.play()
}

    }

  

    const $contaminationbrooklyn= document.getElementById ("contaminationbrooklyn")
    $contaminationbrooklyn.addEventListener("click",function (){
        console.log($contaminationbrooklyn)
        itemcollectsound.play();
        volume: 2
        // hide light
       $contaminationbrooklyn.style.display="none"
        // show light in footer
        document.getElementById ("footercontaminationbrooklyn").style.opacity=1
        // show popup
        const $contaminationpopupbrooklyn =  document.getElementById ('contaminationpopupbrooklyn')
        console.log ($contaminationpopupbrooklyn)  
        $contaminationpopupbrooklyn.style.display="block"
        //close popup
        $contaminationpopupbrooklyn.addEventListener('click', function(){
        $contaminationpopupbrooklyn.style.display= "none"
        violationsFoundbrooklyn = violationsFoundbrooklyn + 1
    
        if (violationsFoundbrooklyn === totalNumberOfViolationsbrooklyn) {
          showEndScreenbrooklyn()
        }
    })
    function showEndScreenbrooklyn() {
      const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
      console.log ($endpopupbrooklyn)  
      $endpopupbrooklyn.style.display="block"
      brooklynmusic.pause();
levelpassedmusic.play()
   }
        
    }) 

    const $bulbbrooklyn= document.getElementById ("bulbbrooklyn")
    $bulbbrooklyn.addEventListener("click",function (){
        console.log($bulbbrooklyn)
        itemcollectsound.play();
        volume: 2
        // hide light
       $bulbbrooklyn.style.display="none"
        // show light in footer
        document.getElementById ("footerbulbbrooklyn").style.opacity=1
        // show popup
        const $bulbpopupbrooklyn =  document.getElementById ('bulbpopupbrooklyn')
        console.log ($bulbpopupbrooklyn)  
        $bulbpopupbrooklyn.style.display="block"
        //close popup
        $bulbpopupbrooklyn.addEventListener('click', function(){
        $bulbpopupbrooklyn.style.display= "none"
        violationsFoundbrooklyn = violationsFoundbrooklyn + 1
    
        if (violationsFoundbrooklyn === totalNumberOfViolationsbrooklyn) {
          showEndScreenbrooklyn()
        }
        })
        function showEndScreenbrooklyn() {
        const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
        console.log ($endpopupbrooklyn)  
        $endpopupbrooklyn.style.display="block"
        brooklynmusic.pause();
levelpassedmusic.play()
      }
        
    }) 

    const $improperbrooklyn= document.getElementById ("nonfoodcontactbrooklyn")
    $improperbrooklyn.addEventListener("click",function (){
        console.log($improperbrooklyn)
        itemcollectsound.play();
        volume: 2
        // hide light
       $improperbrooklyn.style.display="none"
        // show light in footer
        document.getElementById ("footernonfoodcontactbrooklyn").style.opacity=1
        // show popup
        const $improperpopupbrooklyn =  document.getElementById ('improperpopupbrooklyn')
        console.log ($improperpopupbrooklyn)  
        $improperpopupbrooklyn.style.display="block"
        //close popup
        $improperpopupbrooklyn.addEventListener('click', function(){
        $improperpopupbrooklyn.style.display= "none"
        violationsFoundbrooklyn = violationsFoundbrooklyn + 1
    
        if (violationsFoundbrooklyn === totalNumberOfViolationsbrooklyn) {
          showEndScreenbrooklyn()
        }
        })
        function showEndScreenbrooklyn() {
        const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
        console.log ($endpopupbrooklyn)  
        $endpopupbrooklyn.style.display="block"
        brooklynmusic.pause();
levelpassedmusic.play()
      }
        
    }) 
   

   const $plumbingbrooklyn= document.getElementById ("plumbingbrooklyn")
   $plumbingbrooklyn.addEventListener("click",function (){
       console.log($plumbingbrooklyn)
       itemcollectsound.play();
       volume: 2
       // hide light
      $plumbingbrooklyn.style.display="none"
       // show light in footer
       document.getElementById ("footerplumbingbrooklyn").style.opacity=1
       // show popup
       const $plumbingpopupbrooklyn =  document.getElementById ('plumbingpopupbrooklyn')
       console.log ($plumbingpopupbrooklyn)  
       $plumbingpopupbrooklyn.style.display="block"
       //close popup
       $plumbingpopupbrooklyn.addEventListener('click', function(){
       $plumbingpopupbrooklyn.style.display= "none"
       violationsFoundbrooklyn = violationsFoundbrooklyn + 1
    
       if (violationsFoundbrooklyn === totalNumberOfViolationsbrooklyn) {
         showEndScreenbrooklyn()
       }
       })
       function showEndScreenbrooklyn() {
       const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
       console.log ($endpopupbrooklyn)  
       $endpopupbrooklyn.style.display="block"
       brooklynmusic.pause();
levelpassedmusic.play()
      }
       
      })
      
      const $uncleansurfacebrooklyn= document.getElementById ("uncleansurfacebrooklyn")
      $uncleansurfacebrooklyn.addEventListener("click",function (){
          console.log($uncleansurfacebrooklyn)
          itemcollectsound.play();
          volume: 2
          // hide light
         $uncleansurfacebrooklyn.style.display="none"
          // show light in footer
          document.getElementById ("footeruncleansurfacebrooklyn").style.opacity=1
          // show popup
          const $uncleansurfacespopupbrooklyn =  document.getElementById ('uncleansurfacespopupbrooklyn')
          console.log ($uncleansurfacespopupbrooklyn)  
          $uncleansurfacespopupbrooklyn.style.display="block"
          //close popup
          $uncleansurfacespopupbrooklyn.addEventListener('click', function(){
          $uncleansurfacespopupbrooklyn.style.display= "none"
          violationsFoundbrooklyn = violationsFoundbrooklyn + 1
    
          if (violationsFoundbrooklyn === totalNumberOfViolationsbrooklyn) {
            showEndScreenbrooklyn()
          }
          })
          function showEndScreenbrooklyn() {
          const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
          console.log ($endpopupbrooklyn)  
          $endpopupbrooklyn.style.display="block"
          brooklynmusic.pause();
          levelpassedmusic.play()
         }
          
         })

         const $pesticidesbrooklyn= document.getElementById ("pesticidesbrooklyn")
         $pesticidesbrooklyn.addEventListener("click",function (){
             console.log($pesticidesbrooklyn)
             itemcollectsound.play();
             volume: 2
             // hide light
            $pesticidesbrooklyn.style.display="none"
             // show light in footer
             document.getElementById ("footerpesticidesbrooklyn").style.opacity=1
             // show popup
             const $pesticidespopupbrooklyn =  document.getElementById ('pesticidespopupbrooklyn')
             console.log ($pesticidespopupbrooklyn)  
             $pesticidespopupbrooklyn.style.display="block"
             //close popup
             $pesticidespopupbrooklyn.addEventListener('click', function(){
             $pesticidespopupbrooklyn.style.display= "none"
             violationsFoundbrooklyn = violationsFoundbrooklyn + 1
    
             if (violationsFoundbrooklyn === totalNumberOfViolationsbrooklyn) {
               showEndScreenbrooklyn()
             }
             })
             function showEndScreenbrooklyn() {
             const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
             console.log ($endpopupbrooklyn)  
             $endpopupbrooklyn.style.display="block"
             brooklynmusic.pause();
             levelpassedmusic.play()
            }
             
            })

   
const $mapbrooklyn= document.getElementById ("mapbrooklyn")
$mapbrooklyn.addEventListener("click",function (){
    console.log($mapbrooklyn)
//bring up map popup
const $mappopupbrooklyn = document.getElementById ('mappopupbrooklyn')
console.log (mappopupbrooklyn)
mappopupbrooklyn.style.display = 'block'
   })

   const mappopupbrooklyn = document.getElementById('mappopupbrooklyn')
   console.log (mappopupbrooklyn)
   mappopupbrooklyn.addEventListener('click', function() {
    mappopupbrooklyn.style.display = 'none'
  })

function gotoLocationbrooklyn(locationnamebrooklyn){
console.log (locationnamebrooklyn)
//hide all levels
$kitchenLevelbrooklyn.style.display="none"
$cafe1Levelbrooklyn.style.display="none"
$cafe2Levelbrooklyn.style.display="none"
$lunchlineLevelbrooklyn.style.display="none"

//show level for location name
//use location name as id to find specific level element
const selectedlevel=document.getElementById (locationnamebrooklyn)
console.log (selectedlevel)
selectedlevel.style.display= "block"
}

function exitButtonbrooklyn (buttonnamebrooklyn) {
    console.log (buttonnamebrooklyn)
    //hide popup once clicked
    beginningpopupbrooklyn.style.display="none"
    buttonclicksound.play();
}

function gotoLevelSelectbrooklyn (buttonname) {
   endpopupbrooklyn.style.display="none"
   $bronxLevel.style.display="none"
   $brooklynLevel.style.display="none"
   $queensLevel.style.display="none"
   $manhattanLevel.style.display="none"
   $statenislandLevel.style.display="none"
   $enterscreen.style.display="none"
   $levelselect.style.display="block"
   levelselectmusic.play()
   
   const $brooklynfinished = document.getElementById ('brooklynfinished')
   console.log ($brooklynfinished)
   $brooklynfinished.style.display = 'block'
    
   levelsFinished = levelsFinished+ 1
    
   if (levelsFinished === totalNumberOfLevels) {
     showEndScreenCongrats()
   }

function showEndScreenCongrats() {
 const $endpopupcongrats =  document.getElementById ('endpopupcongrats')
 console.log ($endpopupcongrats)  
 $endpopupcongrats.style.display="block"
 levelselectmusic.pause ();
 congratsmusic.play();
//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 5;
cy = ctx.canvas.height / 5;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
initConfetti();
render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener('click', function () {
  initConfetti();
});
}

}


//END BROOKLYN

//START QUEENS
const $kitchenLevelqueens = document.getElementById('kitchenqueens')
const $cafe1Levelqueens = document.getElementById('cafe1queens')
const $cafe2Levelqueens = document.getElementById('cafe2queens')
const $lunchlineLevelqueens = document.getElementById('lunchlinequeens')

const totalNumberOfViolationsqueens = 10 // Change this to the total number of violations on each level
let violationsFoundqueens = 0




const $ratsqueens= document.getElementById ("ratsqueens")

$ratsqueens.addEventListener("click",function (){
 console.log($ratsqueens)
 itemcollectsound.play();
 volume: 2
 // hide rats
$ratsqueens.style.display="none"
 // show rat in footer
 document.getElementById ("footerratsqueens").style.opacity=1
 // show popup

 const $ratspopupqueens =  document.getElementById ('ratspopupqueens')
 console.log ($ratspopupqueens) 
 itemcollectsound.play();
 volume: 2 
 $ratspopupqueens.style.display="block"
 //close popup
 $ratspopupqueens.addEventListener('click', function(){
 $ratspopupqueens.style.display= "none"

   violationsFoundqueens = violationsFoundqueens + 1
 
   if (violationsFoundqueens === totalNumberOfViolationsqueens) {
     showEndScreenqueens()
   }
})
   function showEndScreenqueens() {
    const $endpopupqueens =  document.getElementById ('endpopupqueens')
    console.log ($endpopupqueens)  
    $endpopupqueens.style.display="block"
    queensmusic.pause();
    levelpassedmusic.play()
}
 })

const $roachqueens= document.getElementById ("roachqueens")
$roachqueens.addEventListener("click",function (){
    console.log($roachqueens)
    itemcollectsound.play();
    volume: 2
    // hide light
   $roachqueens.style.display="none"
    // show light in footer
    document.getElementById ("footerroachqueens").style.opacity=1
    // show popup
    
    const $roachpopupqueens =  document.getElementById ('roachpopupqueens')
    console.log ($roachpopupqueens)  
    $roachpopupqueens.style.display="block"
    //close popup
    $roachpopupqueens.addEventListener('click', function(){
    $roachpopupqueens.style.display= "none"
    
    violationsFoundqueens = violationsFoundqueens + 1
 
    if (violationsFoundqueens === totalNumberOfViolationsqueens) {
            showEndScreenqueens()
          }
      })
      function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
        queensmusic.pause();
        levelpassedmusic.play()
    }
})
   
const $fliesqueens= document.getElementById ("fliesqueens")
$fliesqueens.addEventListener("click",function (){
    console.log($fliesqueens)
    itemcollectsound.play();
    volume: 2
    // hide light
   $fliesqueens.style.display="none"
    // show light in footer
    document.getElementById ("footerfliesqueens").style.opacity=1
    // show popup
    
    const $fliespopupqueens =  document.getElementById ('fliespopupqueens')
    console.log ($fliespopupqueens)  
    $fliespopupqueens.style.display="block"
    //close popup
    $fliespopupqueens.addEventListener('click', function(){
    $fliespopupqueens.style.display= "none"

    violationsFoundqueens = violationsFoundqueens + 1
 
    if (violationsFoundqueens === totalNumberOfViolationsqueens) {
          showEndScreenqueens()
        }
    })
    function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
        queensmusic.pause();
        levelpassedmusic.play()
    }
}) 

const $verminproofqueens= document.getElementById ("verminproofqueens")
$verminproofqueens.addEventListener("click",function (){
    console.log($verminproofqueens)
    itemcollectsound.play();
    volume: 2
    // hide light
   $verminproofqueens.style.display="none"
    // show light in footer
    document.getElementById ("footerverminproofqueens").style.opacity=1
    // show popup
    const $verminproofpopupqueens =  document.getElementById ('verminproofpopupqueens')
    console.log ($verminproofpopupqueens)  
    $verminproofpopupqueens.style.display="block"
    //close popup
    $verminproofpopupqueens.addEventListener('click', function(){
    $verminproofpopupqueens.style.display= "none"
    violationsFoundqueens = violationsFoundqueens + 1
 
    if (violationsFoundqueens === totalNumberOfViolationsqueens) {
          showEndScreenqueens()
        }
    })
    function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
        queensmusic.pause();
        levelpassedmusic.play()
    }
})  
   const $chefqueens= document.getElementById ("chefqueens")
   $chefqueens.addEventListener("click",function (){
       console.log($chefqueens)
       chefsound.play();
       volume: 2
       // hide rats
      $chefqueens.style.display="none"
       // show rat in footer
       document.getElementById ("footercertificatequeens").style.opacity=1
       // show popup
    const $chefpopupqueens =  document.getElementById ('chefpopupqueens')
     console.log ($chefpopupqueens)  
    $chefpopupqueens.style.display="block"
    //change apron color
    const $aproncolor1queens =  document.getElementById ('characterbox2queens')
    console.log ($aproncolor1queens)  
   $aproncolor1queens.style.display="block"
      })
     
      function exitButton2queens (chefbuttonqueens){ 
        console.log (chefbuttonqueens)
        //hide popup once clicked
        const $chefpopupqueens= document.getElementById ('chefpopupqueens')
        buttonclicksound.play();
        $chefpopupqueens.style.display="none"
    //show new popup
    const $certificatepopupqueens =  document.getElementById ('certificatepopupqueens')
    console.log ($certificatepopupqueens)  
    $certificatepopupqueens.style.display="block"
    //close popup
    $certificatepopupqueens.addEventListener('click', function(){
    $certificatepopupqueens.style.display= "none"

        
    violationsFoundqueens = violationsFoundqueens + 1
 
    if (violationsFoundqueens === totalNumberOfViolationsqueens) {
          showEndScreenqueens()
        }
        function showEndScreenqueens() {
            const $endpopupqueens =  document.getElementById ('endpopupqueens')
            console.log ($endpopupqueens)  
            $endpopupqueens.style.display="block"
            queensmusic.pause();
            levelpassedmusic.play()
        }
    })}


    const $uncleansurfacequeens= document.getElementById ("uncleansurfacesqueens")
    $uncleansurfacequeens.addEventListener("click",function (){
        console.log($uncleansurfacequeens)
        itemcollectsound.play();
        volume: 2
        // hide light
       $uncleansurfacequeens.style.display="none"
        // show light in footer
        document.getElementById ("footeruncleansurfacequeens").style.opacity=1
        // show popup
        const $uncleansurfacespopupqueens =  document.getElementById ('uncleansurfacespopupqueens')
        console.log ($uncleansurfacespopupqueens)  
        $uncleansurfacespopupqueens.style.display="block"
        //close popup
        $uncleansurfacespopupqueens.addEventListener('click', function(){
        $uncleansurfacespopupqueens.style.display= "none"
        violationsFoundqueens = violationsFoundqueens + 1
 
        if (violationsFoundqueens === totalNumberOfViolationsqueens) {
          showEndScreenqueens()
        }
        })
        function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
        queensmusic.pause();
        levelpassedmusic.play()
       }
        
       })
     


    const $contaminationqueens= document.getElementById ("contaminationqueens")
    $contaminationqueens.addEventListener("click",function (){
        console.log($contaminationqueens)
        itemcollectsound.play();
        volume: 2
        // hide light
       $contaminationqueens.style.display="none"
        // show light in footer
        document.getElementById ("footercontaminationqueens").style.opacity=1
        // show popup
        const $contaminationpopupqueens =  document.getElementById ('contaminationpopupqueens')
        console.log ($contaminationpopupqueens)  
        $contaminationpopupqueens.style.display="block"
        //close popup
        $contaminationpopupqueens.addEventListener('click', function(){
        $contaminationpopupqueens.style.display= "none"
    
        violationsFoundqueens = violationsFoundqueens + 1
 
        if (violationsFoundqueens === totalNumberOfViolationsqueens) {
              showEndScreenqueens()
            }
        })
        function showEndScreenqueens() {
            const $endpopupqueens =  document.getElementById ('endpopupqueens')
            console.log ($endpopupqueens)  
            $endpopupqueens.style.display="block"
            queensmusic.pause();
            levelpassedmusic.play()
        }
    }) 

    const $bulbqueens= document.getElementById ("bulbqueens")
    $bulbqueens.addEventListener("click",function (){
        console.log($bulbqueens)
        itemcollectsound.play();
        volume: 2
        // hide light
       $bulbqueens.style.display="none"
        // show light in footer
        document.getElementById ("footerbulbqueens").style.opacity=1
        // show popup
        const $bulbpopupqueens =  document.getElementById ('bulbpopupqueens')
        console.log ($bulbpopupqueens)  
        $bulbpopupqueens.style.display="block"
        //close popup
        $bulbpopupqueens.addEventListener('click', function(){
        $bulbpopupqueens.style.display= "none"
    
        violationsFoundqueens = violationsFoundqueens + 1
 
        if (violationsFoundqueens === totalNumberOfViolationsqueens) {
              showEndScreenqueens()
            }
      })
      function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
        queensmusic.pause();
        levelpassedmusic.play()
    }
    }) 

    const $improperqueens= document.getElementById ("nonfoodcontactqueens")
    $improperqueens.addEventListener("click",function (){
        console.log($improperqueens)
        itemcollectsound.play();
        volume: 2
        // hide light
       $improperqueens.style.display="none"
        // show light in footer
        document.getElementById ("footernonfoodcontactqueens").style.opacity=1
        // show popup
        const $improperpopupqueens =  document.getElementById ('improperpopupqueens')
        console.log ($improperpopupqueens)  
        $improperpopupqueens.style.display="block"
        //close popup
        $improperpopupqueens.addEventListener('click', function(){
        $improperpopupqueens.style.display= "none"
        violationsFoundqueens = violationsFoundqueens + 1
 
        if (violationsFoundqueens === totalNumberOfViolationsqueens) {
           showEndScreenqueens()
         }
       })
       function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
        queensmusic.pause();
        levelpassedmusic.play()
    }
    }) 
   

   const $plumbingqueens= document.getElementById ("plumbingqueens")
   $plumbingqueens.addEventListener("click",function (){
       console.log($plumbingqueens)
       itemcollectsound.play();
       volume: 2
       // hide light
      $plumbingqueens.style.display="none"
       // show light in footer
       document.getElementById ("footerplumbingqueens").style.opacity=1
       // show popup
       const $plumbingpopupqueens =  document.getElementById ('plumbingpopupqueens')
       console.log ($plumbingpopupqueens)  
       $plumbingpopupqueens.style.display="block"
       //close popup
       $plumbingpopupqueens.addEventListener('click', function(){
       $plumbingpopupqueens.style.display= "none"
       violationsFoundqueens = violationsFoundqueens + 1
 
       if (violationsFoundqueens === totalNumberOfViolationsqueens) {
         showEndScreenqueens()
       }
      })
      function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
        queensmusic.pause();
        levelpassedmusic.play()
    }
      })
   
const $mapqueens= document.getElementById ("mapqueens")
$mapqueens.addEventListener("click",function (){
    console.log($mapqueens)

//bring up map popup
const $mappopupqueens = document.getElementById ('mappopupqueens')
console.log ($mappopupqueens)
$mappopupqueens.style.display = 'block'
   })

   const mappopupqueens = document.getElementById('mappopupqueens')
   console.log (mappopupqueens)
   mappopupqueens.addEventListener('click', function() {
    mappopupqueens.style.display = 'none'
  })

function gotoLocationqueens(locationnamequeens){
console.log (locationnamequeens)
//hide all levels
$kitchenLevelqueens.style.display="none"
$cafe1Levelqueens.style.display="none"
$cafe2Levelqueens.style.display="none"
$lunchlineLevelqueens.style.display="none"

//show level for location name
//use location name as id to find specific level element
const selectedlevel=document.getElementById (locationnamequeens)
console.log (selectedlevel)
selectedlevel.style.display= "block"
}

function exitButtonqueens(buttonnamequeens) {
    console.log (buttonnamequeens)
    //hide popup once clicked
    buttonclicksound.play();
    beginningpopupqueens.style.display="none"}

    function gotoLevelSelectqueens (buttonname) {
      endpopupqueens.style.display="none"
      $bronxLevel.style.display="none"
      $brooklynLevel.style.display="none"
      $queensLevel.style.display="none"
      $manhattanLevel.style.display="none"
      $statenislandLevel.style.display="none"
      $enterscreen.style.display="none"
      $levelselect.style.display="block"
      levelselectmusic.play()
      
      const $queensfinished = document.getElementById ('queensfinished')
      console.log ($queensfinished)
      $queensfinished.style.display = 'block'
       
      levelsFinished = levelsFinished+ 1
       
      if (levelsFinished === totalNumberOfLevels) {
        showEndScreenCongrats()
      }
   
   function showEndScreenCongrats() {
    const $endpopupcongrats =  document.getElementById ('endpopupcongrats')
    console.log ($endpopupcongrats)  
    $endpopupcongrats.style.display="block"
    levelselectmusic.pause ();
    congratsmusic.play();
   //-----------Var Inits--------------
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   cx = ctx.canvas.width / 5;
   cy = ctx.canvas.height / 5;
   
   let confetti = [];
   const confettiCount = 300;
   const gravity = 0.5;
   const terminalVelocity = 5;
   const drag = 0.075;
   const colors = [
   { front: 'red', back: 'darkred' },
   { front: 'green', back: 'darkgreen' },
   { front: 'blue', back: 'darkblue' },
   { front: 'yellow', back: 'darkyellow' },
   { front: 'orange', back: 'darkorange' },
   { front: 'pink', back: 'darkpink' },
   { front: 'purple', back: 'darkpurple' },
   { front: 'turquoise', back: 'darkturquoise' }];
   
   
   //-----------Functions--------------
   resizeCanvas = () => {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     cx = ctx.canvas.width / 2;
     cy = ctx.canvas.height / 2;
   };
   
   randomRange = (min, max) => Math.random() * (max - min) + min;
   
   initConfetti = () => {
     for (let i = 0; i < confettiCount; i++) {
       confetti.push({
         color: colors[Math.floor(randomRange(0, colors.length))],
         dimensions: {
           x: randomRange(10, 20),
           y: randomRange(10, 30) },
   
         position: {
           x: randomRange(0, canvas.width),
           y: canvas.height - 1 },
   
         rotation: randomRange(0, 2 * Math.PI),
         scale: {
           x: 1,
           y: 1 },
   
         velocity: {
           x: randomRange(-25, 25),
           y: randomRange(0, -50) } });
   
   
     }
   };
   
   //---------Render-----------
   render = () => {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
   
     confetti.forEach((confetto, index) => {
       let width = confetto.dimensions.x * confetto.scale.x;
       let height = confetto.dimensions.y * confetto.scale.y;
   
       // Move canvas to position and rotate
       ctx.translate(confetto.position.x, confetto.position.y);
       ctx.rotate(confetto.rotation);
   
       // Apply forces to velocity
       confetto.velocity.x -= confetto.velocity.x * drag;
       confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
       confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
   
       // Set position
       confetto.position.x += confetto.velocity.x;
       confetto.position.y += confetto.velocity.y;
   
       // Delete confetti when out of frame
       if (confetto.position.y >= canvas.height) confetti.splice(index, 1);
   
       // Loop confetto x position
       if (confetto.position.x > canvas.width) confetto.position.x = 0;
       if (confetto.position.x < 0) confetto.position.x = canvas.width;
   
       // Spin confetto by scaling y
       confetto.scale.y = Math.cos(confetto.position.y * 0.1);
       ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
   
       // Draw confetti
       ctx.fillRect(-width / 2, -height / 2, width, height);
   
       // Reset transform matrix
       ctx.setTransform(1, 0, 0, 1, 0, 0);
     });
   
     // Fire off another round of confetti
     if (confetti.length <= 10) initConfetti();
   
     window.requestAnimationFrame(render);
   };
   
   //---------Execution--------
   initConfetti();
   render();
   
   //----------Resize----------
   window.addEventListener('resize', function () {
     resizeCanvas();
   });
   
   //------------Click------------
   window.addEventListener('click', function () {
     initConfetti();
   });
   }
   
   }

//END QUEENS

// These are the levels of our game
const $kitchenLevelmanhattan = document.getElementById('kitchenmanhattan')
const $cafe1Levelmanhattan = document.getElementById('cafe1manhattan')
const $cafe2Levelmanhattan = document.getElementById('cafe2manhattan')
const $lunchlineLevelmanhattan = document.getElementById('lunchlinemanhattan')

const totalNumberOfViolationsmanhattan = 10 // Change this to the total number of violations on each level
let violationsFoundmanhattan = 0




const $ratsmanhattan= document.getElementById ("ratsmanhattan")

$ratsmanhattan.addEventListener("click",function (){
 console.log($ratsmanhattan)
 itemcollectsound.play();
 volume: 2
 // hide rats
$ratsmanhattan.style.display="none"
 // show rat in footer
 document.getElementById ("footerratsmanhattan").style.opacity=1
 // show popup

 const $ratspopupmanhattan =  document.getElementById ('ratspopupmanhattan')
 console.log ($ratspopupmanhattan)  
 $ratspopupmanhattan.style.display="block"
 //close popup
 $ratspopupmanhattan.addEventListener('click', function(){
 $ratspopupmanhattan.style.display= "none"

   violationsFoundmanhattan = violationsFoundmanhattan + 1
 
   if (violationsFoundmanhattan === totalNumberOfViolationsmanhattan) {
     showEndScreenmanhattan()
   }
})
   function showEndScreenmanhattan() {
    const $endpopupmanhattan =  document.getElementById ('endpopupmanhattan')
    console.log ($endpopupmanhattan)  
    $endpopupmanhattan.style.display="block"
    manhattanmusic.pause();
    levelpassedmusic.play()
}
 })

const $lightmanhattan= document.getElementById ("lightingmanhattan")
$lightmanhattan.addEventListener("click",function (){
    console.log($lightmanhattan)
    itemcollectsound.play();
    volume: 2
    // hide light
   $lightmanhattan.style.display="none"
    // show light in footer
    document.getElementById ("footerlightmanhattan").style.opacity=1
    // show popup
    
    const $lightingpopupmanhattan =  document.getElementById ('badlightingpopupmanhattan')
    console.log ($lightingpopupmanhattan)  
    $lightingpopupmanhattan.style.display="block"
    //close popup
    $lightingpopupmanhattan.addEventListener('click', function(){
    $lightingpopupmanhattan.style.display= "none"
    
          violationsFoundmanhattan = violationsFoundmanhattan + 1
    
          if (violationsFoundmanhattan === totalNumberOfViolationsmanhattan) {
            showEndScreenmanhattan()
          }
      })
      function showEndScreenmanhattan() {
        const $endpopupmanhattan =  document.getElementById ('endpopupmanhattan')
        console.log ($endpopupmanhattan)  
        $endpopupmanhattan.style.display="block"
        manhattanmusic.pause();
        levelpassedmusic.play()   
    }
})
   
const $fliesmanhattan= document.getElementById ("fliesmanhattan")
$fliesmanhattan.addEventListener("click",function (){
    console.log($fliesmanhattan)
    itemcollectsound.play();
    volume: 2
    // hide light
   $fliesmanhattan.style.display="none"
    // show light in footer
    document.getElementById ("footerfliesmanhattan").style.opacity=1
    // show popup
    
    const $fliespopupmanhattan =  document.getElementById ('fliespopupmanhattan')
    console.log ($fliespopupmanhattan)  
    $fliespopupmanhattan.style.display="block"
    //close popup
    $fliespopupmanhattan.addEventListener('click', function(){
    $fliespopupmanhattan.style.display= "none"

        violationsFoundmanhattan = violationsFoundmanhattan + 1
  
        if (violationsFoundmanhattan === totalNumberOfViolationsmanhattan) {
          showEndScreenmanhattan()
        }
    })
    function showEndScreenmanhattan() {
        const $endpopupmanhattan =  document.getElementById ('endpopupmanhattan')
        console.log ($endpopupmanhattan)  
        $endpopupmanhattan.style.display="block"
        manhattanmusic.pause();
        levelpassedmusic.play()
    }
}) 

const $verminproofmanhattan= document.getElementById ("verminproofmanhattan")
$verminproofmanhattan.addEventListener("click",function (){
    console.log($verminproofmanhattan)
    itemcollectsound.play();
    volume: 2
    // hide light
   $verminproofmanhattan.style.display="none"
    // show light in footer
    document.getElementById ("footerverminproofmanhattan").style.opacity=1
    // show popup
    const $verminproofpopupmanhattan =  document.getElementById ('verminproofpopupmanhattan')
    console.log ($verminproofpopupmanhattan)  
    $verminproofpopupmanhattan.style.display="block"
    //close popup
    $verminproofpopupmanhattan.addEventListener('click', function(){
    $verminproofpopupmanhattan.style.display= "none"
        violationsFoundmanhattan = violationsFoundmanhattan + 1
  
        if (violationsFoundmanhattan === totalNumberOfViolationsmanhattan) {
          showEndScreenmanhattan()
        }
    })
    function showEndScreenmanhattan() {
        const $endpopupmanhattan =  document.getElementById ('endpopupmanhattan')
        console.log ($endpopupmanhattan)  
        $endpopupmanhattan.style.display="block"
        manhattanmusic.pause();
        levelpassedmusic.play()
    }
})  
   const $chefmanhattan= document.getElementById ("chefmanhattan")
   $chefmanhattan.addEventListener("click",function (){
       console.log($chefmanhattan)
       chefsound.play();
       volume: 2
       // hide rats
      $chefmanhattan.style.display="none"
       // show rat in footer
       document.getElementById ("footercertificatemanhattan").style.opacity=1
       // show popup
    const $chefpopupmanhattan =  document.getElementById ('chefpopupmanhattan')
     console.log ($chefpopupmanhattan)  
    $chefpopupmanhattan.style.display="block"
    //change apron color
    const $aproncolor1manhattan =  document.getElementById ('characterbox2manhattan')
    console.log ($aproncolor1manhattan)  
   $aproncolor1manhattan.style.display="block"
      })
     
      function exitButton2manhattan (chefbuttonmanhattan){ 
        console.log (chefbuttonmanhattan)
        //hide popup once clicked
        const $chefpopupmanhattan= document.getElementById ('chefpopupmanhattan')
        buttonclicksound.play();
        $chefpopupmanhattan.style.display="none"
    //show new popup
    const $certificatepopupmanhattan =  document.getElementById ('certificatepopupmanhattan')
    console.log ($certificatepopupmanhattan)  
    $certificatepopupmanhattan.style.display="block"
    //close popup
    $certificatepopupmanhattan.addEventListener('click', function(){
    $certificatepopupmanhattan.style.display= "none"

        
        violationsFoundmanhattan = violationsFoundmanhattan + 1
  
        if (violationsFoundmanhattan === totalNumberOfViolationsmanhattan) {
          showEndScreenmanhattan()
        }
        function showEndScreenmanhattan() {
            const $endpopupmanhattan =  document.getElementById ('endpopupmanhattan')
            console.log ($endpopupmanhattan)  
            $endpopupmanhattan.style.display="block"
            manhattanmusic.pause();
            levelpassedmusic.play()
        }
    })}

    const $tempmanhattan= document.getElementById ("tempmanhattan")
    $tempmanhattan.addEventListener("click",function (){
        console.log($tempmanhattan)
        itemcollectsound.play();
        volume: 2
        // hide light
       $tempmanhattan.style.display="none"
        // show light in footer
        document.getElementById ("footertempmanhattan").style.opacity=1
        // show popup
        const $temppopupmanhattan =  document.getElementById ('temppopupmanhattan')
        console.log ($temppopupmanhattan)  
        $temppopupmanhattan.style.display="block"
        //close popup
        $temppopupmanhattan.addEventListener('click', function(){
        $temppopupmanhattan.style.display= "none"
    
            violationsFoundmanhattan = violationsFoundmanhattan + 1
      
            if (violationsFoundmanhattan === totalNumberOfViolationsmanhattan) {
              showEndScreenmanhattan()
            }
        })
        function showEndScreenmanhattan() {
            const $endpopupmanhattan =  document.getElementById ('endpopupmanhattan')
            console.log ($endpopupmanhattan)  
            $endpopupmanhattan.style.display="block"
            manhattanmusic.pause();
            levelpassedmusic.play()
        }
    }) 
    

    const $contaminationmanhattan= document.getElementById ("contaminationmanhattan")
    $contaminationmanhattan.addEventListener("click",function (){
        console.log($contaminationmanhattan)
        itemcollectsound.play();
        volume: 2
        // hide light
       $contaminationmanhattan.style.display="none"
        // show light in footer
        document.getElementById ("footercontaminationmanhattan").style.opacity=1
        // show popup
        const $contaminationpopupmanhattan =  document.getElementById ('contaminationpopupmanhattan')
        console.log ($contaminationpopupmanhattan)  
        $contaminationpopupmanhattan.style.display="block"
        //close popup
        $contaminationpopupmanhattan.addEventListener('click', function(){
        $contaminationpopupmanhattan.style.display= "none"
    
            violationsFoundmanhattan = violationsFoundmanhattan + 1
      
            if (violationsFoundmanhattan === totalNumberOfViolationsmanhattan) {
              showEndScreen()
            }
        })
        function showEndScreenmanhattan() {
            const $endpopupmanhattan =  document.getElementById ('endpopupmanhattan')
            console.log ($endpopupmanhattan)  
            $endpopupmanhattan.style.display="block"
            manhattanmusic.pause();
            levelpassedmusic.play()
        }
    }) 

    const $bulbmanhattan= document.getElementById ("bulbmanhattan")
    $bulbmanhattan.addEventListener("click",function (){
        console.log($bulbmanhattan)
        itemcollectsound.play();
        volume: 2
        // hide light
       $bulbmanhattan.style.display="none"
        // show light in footer
        document.getElementById ("footerbulbmanhattan").style.opacity=1
        // show popup
        const $bulbpopupmanhattan =  document.getElementById ('bulbpopupmanhattan')
        console.log ($bulbpopupmanhattan)  
        $bulbpopupmanhattan.style.display="block"
        //close popup
        $bulbpopupmanhattan.addEventListener('click', function(){
        $bulbpopupmanhattan.style.display= "none"
    
            violationsFoundmanhattan = violationsFoundmanhattan + 1
      
            if (violationsFoundmanhattan === totalNumberOfViolationsmanhattan) {
              showEndScreenmanhattan()
            }
      })
      function showEndScreenmanhattan() {
        const $endpopupmanhattan =  document.getElementById ('endpopupmanhattan')
        console.log ($endpopupmanhattan)  
        $endpopupmanhattan.style.display="block"
        manhattanmusic.pause();
        levelpassedmusic.play()
    }
    }) 

    const $impropermanhattan= document.getElementById ("nonfoodcontactmanhattan")
    $impropermanhattan.addEventListener("click",function (){
        console.log($impropermanhattan)
        itemcollectsound.play();
        volume: 2
        // hide light
       $impropermanhattan.style.display="none"
        // show light in footer
        document.getElementById ("footernonfoodcontactmanhattan").style.opacity=1
        // show popup
        const $improperpopupmanhattan =  document.getElementById ('improperpopupmanhattan')
        console.log ($improperpopupmanhattan)  
        $improperpopupmanhattan.style.display="block"
        //close popup
        $improperpopupmanhattan.addEventListener('click', function(){
        $improperpopupmanhattan.style.display= "none"
         violationsFoundmanhattan = violationsFoundmanhattan + 1
       
         if (violationsFoundmanhattan === totalNumberOfViolationsmanhattan) {
           showEndScreenmanhattan()
         }
       })
       function showEndScreenmanhattan() {
        const $endpopupmanhattan =  document.getElementById ('endpopupmanhattan')
        console.log ($endpopupmanhattan)  
        $endpopupmanhattan.style.display="block"
        manhattanmusic.pause();
        levelpassedmusic.play()
    }
    }) 
   

   const $plumbingmanhattan= document.getElementById ("plumbingmanhattan")
   $plumbingmanhattan.addEventListener("click",function (){
       console.log($plumbingmanhattan)
       itemcollectsound.play();
       volume: 2
       // hide light
      $plumbingmanhattan.style.display="none"
       // show light in footer
       document.getElementById ("footerplumbingmanhattan").style.opacity=1
       // show popup
       const $plumbingpopupmanhattan =  document.getElementById ('plumbingpopupmanhattan')
       console.log ($plumbingpopupmanhattan)  
       $plumbingpopupmanhattan.style.display="block"
       //close popup
       $plumbingpopupmanhattan.addEventListener('click', function(){
       $plumbingpopupmanhattan.style.display= "none"
       violationsFoundmanhattan = violationsFoundmanhattan + 1
       
       if (violationsFoundmanhattan === totalNumberOfViolationsmanhattan) {
         showEndScreenmanhattan()
       }
      })
      function showEndScreenmanhattan() {
        const $endpopupmanhattan =  document.getElementById ('endpopupmanhattan')
        console.log ($endpopupmanhattan)  
        $endpopupmanhattan.style.display="block"
        manhattanmusic.pause();
        levelpassedmusic.play()
    }
      })
   
const $mapmanhattan= document.getElementById ("mapmanhattan")
$mapmanhattan.addEventListener("click",function (){
    console.log($mapmanhattan)
//bring up map popup
const $mappopupmanhattan = document.getElementById ('mappopupmanhattan')
console.log ($mappopupmanhattan)
    $mappopupmanhattan.style.display = 'block'
   })

   const mappopupmanhattan = document.getElementById('mappopupmanhattan')
   console.log (mappopupmanhattan)
   mappopupmanhattan.addEventListener('click', function() {
    mappopupmanhattan.style.display = 'none'
  })

function gotoLocationmanhattan(locationnamemanhattan){
console.log (locationnamemanhattan)
//hide all levels
$kitchenLevelmanhattan.style.display="none"
$cafe1Levelmanhattan.style.display="none"
$cafe2Levelmanhattan.style.display="none"
$lunchlineLevelmanhattan.style.display="none"

//show level for location name
//use location name as id to find specific level element
const selectedlevel=document.getElementById (locationnamemanhattan)
console.log (selectedlevel)
selectedlevel.style.display= "block"
}

function exitButtonmanhattan (buttonname) {
    console.log (buttonname)
    //hide popup once clicked
    buttonclicksound.play();
    beginningpopupmanhattan.style.display="none"
}
function gotoLevelSelectmanhattan (buttonname) {
   endpopupmanhattan.style.display="none"
   $bronxLevel.style.display="none"
   $brooklynLevel.style.display="none"
   $queensLevel.style.display="none"
   $manhattanLevel.style.display="none"
   $statenislandLevel.style.display="none"
   $enterscreen.style.display="none"
   $levelselect.style.display="block"
   levelselectmusic.play()
   
   const $manhattanfinished = document.getElementById ('manhattanfinished')
   console.log ($manhattanfinished)
   $manhattanfinished.style.display = 'block'
    
   levelsFinished = levelsFinished+ 1
    
   if (levelsFinished === totalNumberOfLevels) {
     showEndScreenCongrats()
   }

function showEndScreenCongrats() {
 const $endpopupcongrats =  document.getElementById ('endpopupcongrats')
 console.log ($endpopupcongrats)  
 $endpopupcongrats.style.display="block"
 levelselectmusic.pause ();
 congratsmusic.play();
//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 5;
cy = ctx.canvas.height / 5;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
initConfetti();
render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener('click', function () {
  initConfetti();
});
}

}

//END MANHATTAN

//START STATEN ISLAND

const $kitchenLevelstatenisland = document.getElementById('kitchenstatenisland')
const $cafe1Levelstatenisland = document.getElementById('cafe1statenisland')
const $cafe2Levelstatenisland = document.getElementById('cafe2statenisland')
const $lunchlineLevelstatenisland = document.getElementById('lunchlinestatenisland')

const totalNumberOfViolationsstatenisland = 10 // Change this to the total number of violations on each level
let violationsFoundstatenisland = 0

const $ratsstatenisland= document.getElementById ("ratsstatenisland")

$ratsstatenisland.addEventListener("click",function (){
 console.log($ratsstatenisland)
 // hide rats
$ratsstatenisland.style.display="none"
 // show rat in footer
 document.getElementById ("footerratsstatenisland").style.opacity=1
 // show popup

 const $ratspopupstatenisland =  document.getElementById ('ratspopupstatenisland')
 console.log ($ratspopupstatenisland) 
 itemcollectsound.play();
 volume: 2 
 $ratspopupstatenisland.style.display="block"
 //close popup
 $ratspopupstatenisland.addEventListener('click', function(){
 $ratspopupstatenisland.style.display= "none"

   violationsFoundstatenisland = violationsFoundstatenisland + 1
 
   if (violationsFoundstatenisland === totalNumberOfViolationsstatenisland) {
     showEndScreenstatenisland()
   }
})
   function showEndScreenstatenisland() {
    const $endpopupstatenisland =  document.getElementById ('endpopupstatenisland')
    console.log ($endpopupstatenisland)  
    $endpopupstatenisland.style.display="block"
    statenislandmusic.pause();
    levelpassedmusic.play()
}
 })

const $lightstatenisland= document.getElementById ("lightingstatenisland")
$lightstatenisland.addEventListener("click",function (){
    console.log($lightstatenisland)
    itemcollectsound.play();
    volume: 2
    // hide light
   $lightstatenisland.style.display="none"
    // show light in footer
    document.getElementById ("footerlightstatenisland").style.opacity=1
    // show popup
    
    const $lightingpopupstatenisland =  document.getElementById ('badlightingpopupstatenisland')
    console.log ($lightingpopupstatenisland)  
    $lightingpopupstatenisland.style.display="block"
    //close popup
    $lightingpopupstatenisland.addEventListener('click', function(){
    $lightingpopupstatenisland.style.display= "none"
    
          violationsFoundstatenisland = violationsFoundstatenisland + 1
    
          if (violationsFoundstatenisland === totalNumberOfViolationsstatenisland) {
            showEndScreenstatenisland()
          }
      })
      function showEndScreenstatenisland() {
        const $endpopupstatenisland =  document.getElementById ('endpopupstatenisland')
        console.log ($endpopupstatenisland)  
        $endpopupstatenisland.style.display="block"
        statenislandmusic.pause();
        levelpassedmusic.play()
    }
})
   
const $fliesstatenisland= document.getElementById ("fliesstatenisland")
$fliesstatenisland.addEventListener("click",function (){
    console.log($fliesstatenisland)
    itemcollectsound.play();
    volume: 2
    // hide light
   $fliesstatenisland.style.display="none"
    // show light in footer
    document.getElementById ("footerfliesstatenisland").style.opacity=1
    // show popup
    
    const $fliespopupstatenisland =  document.getElementById ('fliespopupstatenisland')
    console.log ($fliespopupstatenisland)  
    $fliespopupstatenisland.style.display="block"
    //close popup
    $fliespopupstatenisland.addEventListener('click', function(){
    $fliespopupstatenisland.style.display= "none"

        violationsFoundstatenisland = violationsFoundstatenisland + 1
  
        if (violationsFoundstatenisland === totalNumberOfViolationsstatenisland) {
          showEndScreenstatenisland()
        }
    })
    function showEndScreenstatenisland() {
        const $endpopupstatenisland =  document.getElementById ('endpopupstatenisland')
        console.log ($endpopupstatenisland)  
        $endpopupstatenisland.style.display="block"
        statenislandmusic.pause();
        levelpassedmusic.play()
    }
}) 

const $verminproofstatenisland= document.getElementById ("verminproofstatenisland")
$verminproofstatenisland.addEventListener("click",function (){
    console.log($verminproofstatenisland)
    itemcollectsound.play();
    volume: 2
    // hide light
   $verminproofstatenisland.style.display="none"
    // show light in footer
    document.getElementById ("footerverminproofstatenisland").style.opacity=1
    // show popup
    const $verminproofpopupstatenisland =  document.getElementById ('verminproofpopupstatenisland')
    console.log ($verminproofpopupstatenisland)  
    $verminproofpopupstatenisland.style.display="block"
    //close popup
    $verminproofpopupstatenisland.addEventListener('click', function(){
    $verminproofpopupstatenisland.style.display= "none"
        violationsFoundstatenisland = violationsFoundstatenisland + 1
  
        if (violationsFoundstatenisland === totalNumberOfViolationsstatenisland) {
          showEndScreenstatenisland()
        }
    })
    function showEndScreenstatenisland() {
        const $endpopupstatenisland =  document.getElementById ('endpopupstatenisland')
        console.log ($endpopupstatenisland)  
        $endpopupstatenisland.style.display="block"
        statenislandmusic.pause();
        levelpassedmusic.play()
    }
})  
   const $chefstatenisland= document.getElementById ("chefstatenisland")
   $chefstatenisland.addEventListener("click",function (){
       console.log($chefstatenisland)
       chefsound.play();
       volume: 2
       // hide rats
      $chefstatenisland.style.display="none"
       // show rat in footer
       document.getElementById ("footercertificatestatenisland").style.opacity=1
       // show popup
    const $chefpopupstatenisland =  document.getElementById ('chefpopupstatenisland')
     console.log ($chefpopupstatenisland)  
    $chefpopupstatenisland.style.display="block"
    //change apron color
    const $aproncolor1statenisland =  document.getElementById ('characterbox2statenisland')
    console.log ($aproncolor1statenisland)  
   $aproncolor1statenisland.style.display="block"
      })
     
      function exitButton2statenisland (chefbuttonstatenisland){ 
        console.log (chefbuttonstatenisland)
        //hide popup once clicked
        const $chefpopupstatenisland= document.getElementById ('chefpopupstatenisland')
        $chefpopupstatenisland.style.display="none"
        buttonclicksound.play();
    //show new popup
    const $certificatepopupstatenisland =  document.getElementById ('certificatepopupstatenisland')
    console.log ($certificatepopupstatenisland)  
    $certificatepopupstatenisland.style.display="block"
    //close popup
    $certificatepopupstatenisland.addEventListener('click', function(){
    $certificatepopupstatenisland.style.display= "none"

        
        violationsFoundstatenisland = violationsFoundstatenisland + 1
  
        if (violationsFoundstatenisland === totalNumberOfViolationsstatenisland) {
          showEndScreenstatenisland()
        }
        function showEndScreenstatenisland() {
            const $endpopupstatenisland =  document.getElementById ('endpopupstatenisland')
            console.log ($endpopupstatenisland)  
            $endpopupstatenisland.style.display="block"
            statenislandmusic.pause();
            levelpassedmusic.play()
        }
    })}


     


    const $contaminationstatenisland= document.getElementById ("contaminationstatenisland")
    $contaminationstatenisland.addEventListener("click",function (){
        console.log($contaminationstatenisland)
        itemcollectsound.play();
        volume: 2
        // hide light
       $contaminationstatenisland.style.display="none"
        // show light in footer
        document.getElementById ("footercontaminationstatenisland").style.opacity=1
        // show popup
        const $contaminationpopupstatenisland =  document.getElementById ('contaminationpopupstatenisland')
        console.log ($contaminationpopupstatenisland)  
        $contaminationpopupstatenisland.style.display="block"
        //close popup
        $contaminationpopupstatenisland.addEventListener('click', function(){
        $contaminationpopupstatenisland.style.display= "none"
    
            violationsFoundstatenisland = violationsFoundstatenisland + 1
      
            if (violationsFoundstatenisland === totalNumberOfViolationsstatenisland) {
              showEndScreenstatenisland()
            }
        })
        function showEndScreenstatenisland() {
            const $endpopupstatenisland =  document.getElementById ('endpopupstatenisland')
            console.log ($endpopupstatenisland)  
            $endpopupstatenisland.style.display="block"
            statenislandmusic.pause();
            levelpassedmusic.play()
        }
    }) 

    const $bulbstatenisland= document.getElementById ("bulbstatenisland")
    $bulbstatenisland.addEventListener("click",function (){
        console.log($bulbstatenisland)
        itemcollectsound.play();
        volume: 2
        // hide light
       $bulbstatenisland.style.display="none"
        // show light in footer
        document.getElementById ("footerbulbstatenisland").style.opacity=1
        // show popup
        const $bulbpopupstatenisland =  document.getElementById ('bulbpopupstatenisland')
        console.log ($bulbpopupstatenisland)  
        $bulbpopupstatenisland.style.display="block"
        //close popup
        $bulbpopupstatenisland.addEventListener('click', function(){
        $bulbpopupstatenisland.style.display= "none"
    
            violationsFoundstatenisland = violationsFoundstatenisland + 1
      
            if (violationsFoundstatenisland === totalNumberOfViolationsstatenisland) {
              showEndScreenstatenisland()
            }
      })
      function showEndScreenstatenisland() {
        const $endpopupstatenisland =  document.getElementById ('endpopupstatenisland')
        console.log ($endpopupstatenisland)  
        $endpopupstatenisland.style.display="block"
        statenislandmusic.pause();
        levelpassedmusic.play()
    }
    }) 

    const $improperstatenisland= document.getElementById ("nonfoodcontactstatenisland")
    $improperstatenisland.addEventListener("click",function (){
        console.log($improperstatenisland)
        itemcollectsound.play();
        volume: 2
        // hide light
       $improperstatenisland.style.display="none"
        // show light in footer
        document.getElementById ("footernonfoodcontactstatenisland").style.opacity=1
        // show popup
        const $improperpopupstatenisland =  document.getElementById ('improperpopupstatenisland')
        console.log ($improperpopupstatenisland)  
        $improperpopupstatenisland.style.display="block"
        //close popup
        $improperpopupstatenisland.addEventListener('click', function(){
        $improperpopupstatenisland.style.display= "none"
         violationsFoundstatenisland = violationsFoundstatenisland + 1
       
         if (violationsFoundstatenisland === totalNumberOfViolationsstatenisland) {
           showEndScreenstatenisland()
         }
       })
       function showEndScreenstatenisland() {
        const $endpopupstatenisland =  document.getElementById ('endpopupstatenisland')
        console.log ($endpopupstatenisland)  
        $endpopupstatenisland.style.display="block"
        statenislandmusic.pause();
        levelpassedmusic.play()
    }
    }) 
   

   const $plumbingstatenisland= document.getElementById ("plumbingstatenisland")
   $plumbingstatenisland.addEventListener("click",function (){
       console.log($plumbingstatenisland)
       itemcollectsound.play();
       volume: 2
       // hide light
      $plumbingstatenisland.style.display="none"
       // show light in footer
       document.getElementById ("footerplumbingstatenisland").style.opacity=1
       // show popup
       const $plumbingpopupstatenisland =  document.getElementById ('plumbingpopupstatenisland')
       console.log ($plumbingpopupstatenisland)  
       $plumbingpopupstatenisland.style.display="block"
       //close popup
       $plumbingpopupstatenisland.addEventListener('click', function(){
       $plumbingpopupstatenisland.style.display= "none"
       violationsFoundstatenisland = violationsFoundstatenisland + 1
       
       if (violationsFoundstatenisland === totalNumberOfViolationsstatenisland) {
         showEndScreenstatenisland()
       }
      })
      function showEndScreenstatenisland() {
        const $endpopupstatenisland =  document.getElementById ('endpopupstatenisland')
        console.log ($endpopupstatenisland)  
        $endpopupstatenisland.style.display="block"
        statenislandmusic.pause();
        levelpassedmusic.play()
    }
      })

      const $tempstatenisland= document.getElementById ("tempstatenisland")
      $tempstatenisland.addEventListener("click",function (){
          console.log($tempstatenisland)
          itemcollectsound.play();
          volume: 2
          // hide light
         $tempstatenisland.style.display="none"
          // show light in footer
          document.getElementById ("footertempstatenisland").style.opacity=1
          // show popup
          const $temppopupstatenisland =  document.getElementById ('temppopupstatenisland')
          console.log ($temppopupstatenisland)  
          $temppopupstatenisland.style.display="block"
          //close popup
          $temppopupstatenisland.addEventListener('click', function(){
          $temppopupstatenisland.style.display= "none"
      
              violationsFoundstatenisland = violationsFoundstatenisland + 1
        
              if (violationsFoundstatenisland === totalNumberOfViolationsstatenisland) {
                showEndScreenstatenisland()
              }
          })
          function showEndScreenstatenisland() {
              const $endpopupstatenisland =  document.getElementById ('endpopupstatenisland')
              console.log ($endpopupstatenisland)  
              $endpopupstatenisland.style.display="block"
              statenislandmusic.pause();
              levelpassedmusic.play()
          }
      }) 
   
const $mapstatenisland= document.getElementById ("mapstatenisland")
$mapstatenisland.addEventListener("click",function (){
    console.log($mapstatenisland)
//bring up map popup
const $mappopupstatenisland = document.getElementById ('mappopupstatenisland')
console.log (mappopupstatenisland)
mappopupstatenisland.style.display = 'block'
   })

   const mappopupstatenisland = document.getElementById('mappopupstatenisland')
   console.log (mappopupstatenisland)
   mappopupstatenisland.addEventListener('click', function() {
    mappopupstatenisland.style.display = 'none'
  })

function gotoLocationstatenisland(locationnamestatenisland){
console.log (locationnamestatenisland)
//hide all levels
$kitchenLevelstatenisland.style.display="none"
$cafe1Levelstatenisland.style.display="none"
$cafe2Levelstatenisland.style.display="none"
$lunchlineLevelstatenisland.style.display="none"

//show level for location name
//use location name as id to find specific level element
const selectedlevel=document.getElementById (locationnamestatenisland)
console.log (selectedlevel)
selectedlevel.style.display= "block"
}

function exitButtonstatenisland (buttonnamestatenisland) {
    console.log (buttonnamestatenisland)
    buttonclicksound.play();
    //hide popup once clicked
    beginningpopupstatenisland.style.display="none"
}

function gotoLevelSelectstatenisland (buttonname) {
   endpopupstatenisland.style.display="none"
   $bronxLevel.style.display="none"
   $brooklynLevel.style.display="none"
   $queensLevel.style.display="none"
   $manhattanLevel.style.display="none"
   $statenislandLevel.style.display="none"
   $enterscreen.style.display="none"
   $levelselect.style.display="block"
   levelselectmusic.play()
   
   const $statenislandfinished = document.getElementById ('statenislandfinished')
   console.log ($statenislandfinished)
   $statenislandfinished.style.display = 'block'
    
   levelsFinished = levelsFinished+ 1
    
   if (levelsFinished === totalNumberOfLevels) {
     showEndScreenCongrats()
   }

function showEndScreenCongrats() {
 const $endpopupcongrats =  document.getElementById ('endpopupcongrats')
 console.log ($endpopupcongrats)  
 $endpopupcongrats.style.display="block"
 levelselectmusic.pause ();
 congratsmusic.play();
//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 5;
cy = ctx.canvas.height / 5;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
initConfetti();
render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener('click', function () {
  initConfetti();
});
}

}


  




 

   
    

    


   
    



  







  




 

   
    

    


   
    



  





