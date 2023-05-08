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

function gotoLocationbronx(locationname){
console.log (locationname)
//hide all levels
$kitchenLevelbronx.style.display="none"
$cafe1Levelbronx.style.display="none"
$cafe2Levelbronx.style.display="none"
$lunchlineLevelbronx.style.display="none"

//show level for location name
//use location name as id to find specific level element
const selectedlevel=document.getElementById (locationname)
console.log (selectedlevel)
selectedlevel.style.display= "block"
}



function exitButtonbronx(buttonname) {
    console.log (buttonname)
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

}
   //show level for location name


//END BRONX

  




 

   
    

    


   
    



  





