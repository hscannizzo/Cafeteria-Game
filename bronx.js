// These are the levels of our game
const $kitchenLevel = document.getElementById('kitchen')
const manhattan$cafe1Level = document.getElementById('cafe1')
const $cafe2Level = document.getElementById('cafe2')
const $lunchlineLevel = document.getElementById('lunchline')

const totalNumberOfViolations = 10 // Change this to the total number of violations on each level
let violationsFound = 0




const $rats= document.getElementById ("rats")

$rats.addEventListener("click",function (){
 console.log($rats)
 // hide rats
$rats.style.display="none"
 // show rat in footer
 document.getElementById ("footerrats").style.opacity=1
 // show popup

 const $ratspopup =  document.getElementById ('ratspopup')
 console.log ($ratspopup)  
 $ratspopup.style.display="block"
 //close popup
 $ratspopup.addEventListener('click', function(){
 $ratspopup.style.display= "none"

   violationsFound = violationsFound + 1
 
   if (violationsFound === totalNumberOfViolations) {
     showEndScreen()
   }
})
   function showEndScreen() {
    const $endpopup =  document.getElementById ('endpopup')
    console.log ($endpopup)  
    $endpopup.style.display="block"
}
 })

const $light= document.getElementById ("lighting")
$light.addEventListener("click",function (){
    console.log($light)
    // hide light
   $light.style.display="none"
    // show light in footer
    document.getElementById ("footerlight").style.opacity=1
    // show popup
    
    const $lightingpopup =  document.getElementById ('badlightingpopup')
    console.log ($lightingpopup)  
    $lightingpopup.style.display="block"
    //close popup
    $lightingpopup.addEventListener('click', function(){
    $lightingpopup.style.display= "none"
    
          violationsFound = violationsFound + 1
    
          if (violationsFound === totalNumberOfViolations) {
            showEndScreen()
          }
      })
      function showEndScreen() {
        const $endpopup =  document.getElementById ('endpopup')
        console.log ($endpopup)  
        $endpopup.style.display="block"
    }
})
   
const $flies= document.getElementById ("flies")
$flies.addEventListener("click",function (){
    console.log($flies)
    // hide light
   $flies.style.display="none"
    // show light in footer
    document.getElementById ("footerflies").style.opacity=1
    // show popup
    
    const $fliespopup =  document.getElementById ('fliespopup')
    console.log ($fliespopup)  
    $fliespopup.style.display="block"
    //close popup
    $fliespopup.addEventListener('click', function(){
    $fliespopup.style.display= "none"

        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreen()
        }
    })
    function showEndScreen() {
        const $endpopup =  document.getElementById ('endpopup')
        console.log ($endpopup)  
        $endpopup.style.display="block"
    }
}) 

const $verminproof= document.getElementById ("verminproof")
$verminproof.addEventListener("click",function (){
    console.log($verminproof)
    // hide light
   $verminproof.style.display="none"
    // show light in footer
    document.getElementById ("footerverminproof").style.opacity=1
    // show popup
    const $verminproofpopup =  document.getElementById ('verminproofpopup')
    console.log ($verminproofpopup)  
    $verminproofpopup.style.display="block"
    //close popup
    $verminproofpopup.addEventListener('click', function(){
    $verminproofpopup.style.display= "none"
        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreen()
        }
    })
    function showEndScreen() {
        const $endpopup =  document.getElementById ('endpopup')
        console.log ($endpopup)  
        $endpopup.style.display="block"
    }
})  
   const $chef= document.getElementById ("chef")
   $chef.addEventListener("click",function (){
       console.log($chef)
       // hide rats
      $chef.style.display="none"
       // show rat in footer
       document.getElementById ("footercertificate").style.opacity=1
       // show popup
    const $chefpopup =  document.getElementById ('chefpopup')
     console.log ($chefpopup)  
    $chefpopup.style.display="block"
    //change apron color
    const $aproncolor1 =  document.getElementById ('characterbox2')
    console.log ($aproncolor1)  
   $aproncolor1.style.display="block"
      })
     
      function exitButton2 (chefbutton){ 
        console.log (chefbutton)
        //hide popup once clicked
        const $chefpopup= document.getElementById ('chefpopup')
        $chefpopup.style.display="none"
    //show new popup
    const $certificatepopup =  document.getElementById ('certificatepopup')
    console.log ($certificatepopup)  
    $certificatepopup.style.display="block"
    //close popup
    $certificatepopup.addEventListener('click', function(){
    $certificatepopup.style.display= "none"

        
        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreen()
        }
        function showEndScreen() {
            const $endpopup =  document.getElementById ('endpopup')
            console.log ($endpopup)  
            $endpopup.style.display="block"
        }
    })}


    const $eleanor= document.getElementById ("lunchlady")
    $eleanor.addEventListener("click",function (){
        console.log($eleanor)
        // hide rats
       $eleanor.style.display= "none"
        // show rat in footer
        document.getElementById ("footerhandwash").style.opacity=1
        // show popup
     const $eleanorpopup =  document.getElementById ('eleanorpopup')
      console.log ($eleanorpopup)  
     $eleanorpopup.style.display= "block"
     //change apron color
     const $aproncolor2 =  document.getElementById ('characterbox3')
     console.log ($aproncolor2)  
     $aproncolor2.style.display= "block"
    })
    function exitButton3 (eleanorbutton){ 
        console.log (eleanorbutton)
        //hide popup once clicked
        const $eleanorpopup= document.getElementById ('eleanorpopup')
        $eleanorpopup.style.display= "none"
        //show new popup
    
        const $handwashpopup =  document.getElementById ('handwashpopup')
        console.log ($handwashpopup)  
        $handwashpopup.style.display= "block"
        //close popup
        $handwashpopup.addEventListener('click', function(){
        $handwashpopup.style.display= "none"
        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreen()
        }
        function showEndScreen() {
            const $endpopup =  document.getElementById ('endpopup')
            console.log ($endpopup)  
            $endpopup.style.display="block"
        }
    })} 
     


    const $contamination= document.getElementById ("contamination")
    $contamination.addEventListener("click",function (){
        console.log($contamination)
        // hide light
       $contamination.style.display="none"
        // show light in footer
        document.getElementById ("footercontamination").style.opacity=1
        // show popup
        const $contaminationpopup =  document.getElementById ('contaminationpopup')
        console.log ($contaminationpopup)  
        $contaminationpopup.style.display="block"
        //close popup
        $contaminationpopup.addEventListener('click', function(){
        $contaminationpopup.style.display= "none"
    
            violationsFound = violationsFound + 1
      
            if (violationsFound === totalNumberOfViolations) {
              showEndScreen()
            }
        })
        function showEndScreen() {
            const $endpopup =  document.getElementById ('endpopup')
            console.log ($endpopup)  
            $endpopup.style.display="block"
        }
    }) 

    const $bulb= document.getElementById ("bulb")
    $bulb.addEventListener("click",function (){
        console.log($bulb)
        // hide light
       $bulb.style.display="none"
        // show light in footer
        document.getElementById ("footerbulb").style.opacity=1
        // show popup
        const $bulbpopup =  document.getElementById ('bulbpopup')
        console.log ($bulbpopup)  
        $bulbpopup.style.display="block"
        //close popup
        $bulbpopup.addEventListener('click', function(){
        $bulbpopup.style.display= "none"
    
            violationsFound = violationsFound + 1
      
            if (violationsFound === totalNumberOfViolations) {
              showEndScreen()
            }
      })
      function showEndScreen() {
        const $endpopup =  document.getElementById ('endpopup')
        console.log ($endpopup)  
        $endpopup.style.display="block"
    }
    }) 

    const $improper= document.getElementById ("nonfoodcontact")
    $improper.addEventListener("click",function (){
        console.log($improper)
        // hide light
       $improper.style.display="none"
        // show light in footer
        document.getElementById ("footernonfoodcontact").style.opacity=1
        // show popup
        const $improperpopup =  document.getElementById ('improperpopup')
        console.log ($improperpopup)  
        $improperpopup.style.display="block"
        //close popup
        $improperpopup.addEventListener('click', function(){
        $improperpopup.style.display= "none"
         violationsFound = violationsFound + 1
       
         if (violationsFound === totalNumberOfViolations) {
           showEndScreen()
         }
       })
       function showEndScreen() {
        const $endpopup =  document.getElementById ('endpopup')
        console.log ($endpopup)  
        $endpopup.style.display="block"
    }
    }) 
   

   const $plumbing= document.getElementById ("plumbing")
   $plumbing.addEventListener("click",function (){
       console.log($plumbing)
       // hide light
      $plumbing.style.display="none"
       // show light in footer
       document.getElementById ("footerplumbing").style.opacity=1
       // show popup
       const $plumbingpopup =  document.getElementById ('plumbingpopup')
       console.log ($plumbingpopup)  
       $plumbingpopup.style.display="block"
       //close popup
       $plumbingpopup.addEventListener('click', function(){
       $plumbingpopup.style.display= "none"
       violationsFound = violationsFound + 1
       
       if (violationsFound === totalNumberOfViolations) {
         showEndScreen()
       }
      })
      function showEndScreen() {
        const $endpopup =  document.getElementById ('endpopup')
        console.log ($endpopup)  
        $endpopup.style.display="block"
    }
      })
   
const $map= document.getElementById ("map")
$map.addEventListener("click",function (){
    console.log($map)
//bring up map popup
const $mappopup = document.getElementById ('mappopup')
console.log (mappopup)
mappopup.style.display = 'block'
   })

   const statenislandmappopup = document.getElementById('mappopup')
   console.log (mappopup)
   mappopup.addEventListener('click', function() {
    mappopup.style.display = 'none'
  })

function gotoLocation(locationname){
console.log (locationname)
//hide all levels
$kitchenLevel.style.display="none"
$cafe1Level.style.display="none"
$cafe2Level.style.display="none"
$lunchlineLevel.style.display="none"

//show level for location name
//use location name as id to find specific level element
const selectedlevel=document.getElementById (locationname)
console.log (selectedlevel)
selectedlevel.style.display= "block"
}

function exitButton (buttonname) {
    console.log (buttonname)
    //hide popup once clicked
    beginningpopup.style.display="none"
}



  




 

   
    

    


   
    



  





