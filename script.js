
const totalNumberOfLevels = 5 // Change this to the total number of violations on each level
let levelsFinished = 0

const $bronxLevel = document.getElementById('bronx')
const $brooklynLevel = document.getElementById('brooklyn')
const $queensLevel = document.getElementById('queens')
const $manhattanLevel = document.getElementById('manhattan')
const $statenislandLevel = document.getElementById('statenisland')
const $enterscreen = document.getElementById('title-screen')
const $levelselect = document.getElementById('levelselect')





function gotoLocationEnter(locationname){
   const $levelbutton =  document.getElementById ('fadeButton')
console.log ($levelbutton)  
$levelbutton.style.display="none";  
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


//bronx


const $kitchenLevelbronx = document.getElementById('kitchenbronx')
const $lunchlineLevelbronx = document.getElementById('lunchlinebronx')
const $cafe1Levelbronx = document.getElementById('cafe1bronx')
const $cafe2Levelbronx = document.getElementById('cafe2bronx')


const totalNumberOfViolations = 10 // Change this to the total number of violations on each level
let violationsFound = 0




const $ratsbronx= document.getElementById ("ratsbronx")

$ratsbronx.addEventListener("click",function (){
 console.log($ratsbronx)
 // hide rats
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

   violationsFound = violationsFound + 1
 
   if (violationsFound === totalNumberOfViolations) {
     showEndScreenbronx()
   }
})
   function showEndScreenbronx() {
    const $endpopupbronx =  document.getElementById ('endpopupbronx')
    console.log ($endpopupbronx)  
    $endpopupbronx.style.display="block"
}
 })

const $lightbronx= document.getElementById ("lightingbronx")
$lightbronx.addEventListener("click",function (){
    console.log($lightbronx)
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
    
          violationsFound = violationsFound + 1
    
          if (violationsFound === totalNumberOfViolations) {
            showEndScreenbronx()
          }
      })
      function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
    }
})
   
const $fliesbronx= document.getElementById ("fliesbronx")
$fliesbronx.addEventListener("click",function (){
    console.log($fliesbronx)
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

        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenbronx()
        }
    })
    function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
    }
}) 

const $verminproofbronx= document.getElementById ("verminproofbronx")
$verminproofbronx.addEventListener("click",function (){
    console.log($verminproofbronx)
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
        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenbronx()
        }
    })
    function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
    }
})  
   const $chefbronx= document.getElementById ("chefbronx")
   $chefbronx.addEventListener("click",function (){
       console.log($chefbronx)
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
        $chefpopupbronx.style.display="none"
    //show new popup
    const $certificatepopupbronx =  document.getElementById ('certificatepopupbronx')
    console.log ($certificatepopupbronx)  
    $certificatepopupbronx.style.display="block"
    //close popup
    $certificatepopupbronx.addEventListener('click', function(){
    $certificatepopupbronx.style.display= "none"

        
        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenbronx()
        }
        function showEndScreenbronx() {
            const $endpopupbronx =  document.getElementById ('endpopupbronx')
            console.log ($endpopup)  
            $endpopupbronx.style.display="block"
        }
    })}


    const $eleanorbronx= document.getElementById ("lunchladybronx")
    $eleanorbronx.addEventListener("click",function (){
        console.log($eleanorbronx)
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
        $eleanorpopupbronx.style.display= "none"
        //show new popup
    
        const $handwashpopupbronx =  document.getElementById ('handwashpopupbronx')
        console.log ($handwashpopupbronx)  
        $handwashpopupbronx.style.display= "block"
        //close popup
        $handwashpopupbronx.addEventListener('click', function(){
        $handwashpopupbronx.style.display= "none"
        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenbronx()
        }
        function showEndScreenbronx() {
            const $endpopupbronx =  document.getElementById ('endpopupbronx')
            console.log ($endpopupbronx)  
            $endpopupbronx.style.display="block"
        }
    })} 
     


    const $contaminationbronx= document.getElementById ("contaminationbronx")
    $contaminationbronx.addEventListener("click",function (){
        console.log($contaminationbronx)
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
    
            violationsFound = violationsFound + 1
      
            if (violationsFound === totalNumberOfViolations) {
              showEndScreenbronx()
            }
        })
        function showEndScreenbronx() {
            const $endpopupbronx =  document.getElementById ('endpopupbronx')
            console.log ($endpopupbronx)  
            $endpopupbronx.style.display="block"
        }
    }) 

    const $bulbbronx= document.getElementById ("bulbbronx")
    $bulbbronx.addEventListener("click",function (){
        console.log($bulbbronx)
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
    
            violationsFound = violationsFound + 1
      
            if (violationsFound === totalNumberOfViolations) {
              showEndScreenbronx()
            }
      })
      function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
    }
    }) 

    const $improperbronx= document.getElementById ("nonfoodcontactbronx")
    $improperbronx.addEventListener("click",function (){
        console.log($improperbronx)
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
         violationsFound = violationsFound + 1
       
         if (violationsFound === totalNumberOfViolations) {
           showEndScreenbronx()
         }
       })
       function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
    }
    }) 
   

   const $plumbingbronx= document.getElementById ("plumbingbronx")
   $plumbingbronx.addEventListener("click",function (){
       console.log($plumbingbronx)
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
       violationsFound = violationsFound + 1
       
       if (violationsFound === totalNumberOfViolations) {
         showEndScreenbronx()
       }
      })
      function showEndScreenbronx() {
        const $endpopupbronx =  document.getElementById ('endpopupbronx')
        console.log ($endpopupbronx)  
        $endpopupbronx.style.display="block"
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



function exitButtonbronx(buttonnamebrooklyn) {
    console.log (buttonnamebrooklyn)
    //hide popup once clicked
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
   
   const $bronxfinished = document.getElementById ('bronxfinished')
   console.log ($bronxfinished)
   $bronxfinished.style.display = 'block'
   
   levelsFinished = levelsFinished+ 1
    
   if (levelsFinished === totalNumberOfLevels) {
     showEndScreenCongrats()
   }
}
function showEndScreenCongrats() {
 const $endpopupcongrats =  document.getElementById ('endpopupcongrats')
 console.log ($endpopupcongrats)  
 $endpopupcongrats.style.display="block"
}
   //show level for location name


//END BRONX


//START BROOKLYN

const $kitchenLevelbrooklyn = document.getElementById('kitchenbrooklyn')
const $cafe1Levelbrooklyn = document.getElementById('cafe1brooklyn')
const $cafe2Levelbrooklyn = document.getElementById('cafe2brooklyn')
const $lunchlineLevelbrooklyn = document.getElementById('lunchlinebrooklyn')



const $ratsbrooklyn= document.getElementById ("ratsbrooklyn")

$ratsbrooklyn.addEventListener("click",function (){
 console.log($ratsbrooklyn)
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
violationsFound = violationsFound + 1
    
if (violationsFound === totalNumberOfViolations) {
  showEndScreenbrooklyn()
}
})
function showEndScreenbrooklyn() {
const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
console.log ($endpopupbrooklyn)  
$endpopupbrooklyn.style.display="block"
}
})

   
const $fliesbrooklyn= document.getElementById ("fliesbrooklyn")
$fliesbrooklyn.addEventListener("click",function (){
    console.log($fliesbrooklyn)
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
    violationsFound = violationsFound + 1
    
    if (violationsFound === totalNumberOfViolations) {
      showEndScreenbrooklyn()
    }
    })
    function showEndScreenbrooklyn() {
    const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
    console.log ($endpopupbrooklyn)  
    $endpopupbrooklyn.style.display="block"
   }
    
}) 

const $verminproofbrooklyn= document.getElementById ("verminproofbrooklyn")
$verminproofbrooklyn.addEventListener("click",function (){
    console.log($verminproofbrooklyn)
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
    violationsFound = violationsFound + 1
    
    if (violationsFound === totalNumberOfViolations) {
      showEndScreenbrooklyn()
    }
})
function showEndScreenbrooklyn() {
  const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
  console.log ($endpopupbronx)  
  $endpopupbrooklyn.style.display="block"
}
   
})  
   const $chefbrooklyn= document.getElementById ("chefbrooklyn")
   $chefbrooklyn.addEventListener("click",function (){
       console.log($chefbrooklyn)
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
    $chefpopupbrooklyn.style.display="none"
//show new popup
const $certificatepopupbrooklyn =  document.getElementById ('certificatepopupbrooklyn')
console.log ($certificatepopupbrooklyn)  
$certificatepopupbrooklyn.style.display="block"
//close popup
$certificatepopupbrooklyn.addEventListener('click', function(){
$certificatepopupbrooklyn.style.display= "none"
violationsFound = violationsFound + 1
    
if (violationsFound === totalNumberOfViolations) {
  showEndScreenbrooklyn()
}
})
function showEndScreenbrooklyn() {
const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
console.log ($endpopupbrooklyn)  
$endpopupbrooklyn.style.display="block"
}

    }

  

    const $contaminationbrooklyn= document.getElementById ("contaminationbrooklyn")
    $contaminationbrooklyn.addEventListener("click",function (){
        console.log($contaminationbrooklyn)
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
        violationsFound = violationsFound + 1
    
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenbrooklyn()
        }
    })
    function showEndScreenbrooklyn() {
      const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
      console.log ($endpopupbrooklyn)  
      $endpopupbrooklyn.style.display="block"
   }
        
    }) 

    const $bulbbrooklyn= document.getElementById ("bulbbrooklyn")
    $bulbbrooklyn.addEventListener("click",function (){
        console.log($bulbbrooklyn)
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
        violationsFound = violationsFound + 1
    
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenbrooklyn()
        }
        })
        function showEndScreenbrooklyn() {
        const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
        console.log ($endpopupbrooklyn)  
        $endpopupbrooklyn.style.display="block"
      }
        
    }) 

    const $improperbrooklyn= document.getElementById ("nonfoodcontactbrooklyn")
    $improperbrooklyn.addEventListener("click",function (){
        console.log($improperbrooklyn)
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
        violationsFound = violationsFound + 1
    
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenbrooklyn()
        }
        })
        function showEndScreenbrooklyn() {
        const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
        console.log ($endpopupbrooklyn)  
        $endpopupbrooklyn.style.display="block"
      }
        
    }) 
   

   const $plumbingbrooklyn= document.getElementById ("plumbingbrooklyn")
   $plumbingbrooklyn.addEventListener("click",function (){
       console.log($plumbingbrooklyn)
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
       violationsFound = violationsFound + 1
    
       if (violationsFound === totalNumberOfViolations) {
         showEndScreenbrooklyn()
       }
       })
       function showEndScreenbrooklyn() {
       const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
       console.log ($endpopupbrooklyn)  
       $endpopupbrooklyn.style.display="block"
      }
       
      })
      
      const $uncleansurfacebrooklyn= document.getElementById ("uncleansurfacebrooklyn")
      $uncleansurfacebrooklyn.addEventListener("click",function (){
          console.log($uncleansurfacebrooklyn)
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
          violationsFound = violationsFound + 1
    
          if (violationsFound === totalNumberOfViolations) {
            showEndScreenbrooklyn()
          }
          })
          function showEndScreenbrooklyn() {
          const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
          console.log ($endpopupbrooklyn)  
          $endpopupbrooklyn.style.display="block"
         }
          
         })

         const $pesticidesbrooklyn= document.getElementById ("pesticidesbrooklyn")
         $pesticidesbrooklyn.addEventListener("click",function (){
             console.log($pesticidesbrooklyn)
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
             violationsFound = violationsFound + 1
    
             if (violationsFound === totalNumberOfViolations) {
               showEndScreenbrooklyn()
             }
             })
             function showEndScreenbrooklyn() {
             const $endpopupbrooklyn =  document.getElementById ('endpopupbrooklyn')
             console.log ($endpopupbrooklyn)  
             $endpopupbrooklyn.style.display="block"
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
   
   const $brooklynfinished = document.getElementById ('brooklynfinished')
   console.log ($brooklynfinished)
   $brooklynfinished.style.display = 'block'
   levelsFinished = levelsFinished+ 1
    
   if (levelsFinished === totalNumberOfLevels) {
     showEndScreenCongrats()
   }
}
function showEndScreenCongrats() {
 const $endpopupcongrats =  document.getElementById ('endpopupcongrats')
 console.log ($endpopupcongrats)  
 $endpopupcongrats.style.display="block"

}


//END BROOKLYN

//START QUEENS


  




 

   
    

    


   
    



  





