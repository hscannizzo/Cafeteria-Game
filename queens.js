// These are the levels of our game
const $kitchenLevelqueens = document.getElementById('kitchenqueens')
const $cafe1Levelqueens = document.getElementById('cafe1queens')
const $cafe2Levelqueens = document.getElementById('cafe2queens')
const $lunchlineLevelqueens = document.getElementById('lunchlinequeens')

const totalNumberOfViolations = 10 // Change this to the total number of violations on each level
let violationsFound = 0




const $ratsqueens= document.getElementById ("ratsqueens")

$ratsqueens.addEventListener("click",function (){
 console.log($rats)
 // hide rats
$ratsqueens.style.display="none"
 // show rat in footer
 document.getElementById ("footerratsqueens").style.opacity=1
 // show popup

 const $ratspopupqueens =  document.getElementById ('ratspopupqueens')
 console.log ($ratspopupqueens)  
 $ratspopupqueens.style.display="block"
 //close popup
 $ratspopupqueens.addEventListener('click', function(){
 $ratspopupqueens.style.display= "none"

   violationsFound = violationsFound + 1
 
   if (violationsFound === totalNumberOfViolations) {
     showEndScreenqueens()
   }
})
   function showEndScreenqueens() {
    const $endpopupqueens =  document.getElementById ('endpopupqueens')
    console.log ($endpopupqueens)  
    $endpopupqueens.style.display="block"
}
 })

const $roachqueens= document.getElementById ("roachqueens")
$roachqueens.addEventListener("click",function (){
    console.log($roachqueens)
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
    
          violationsFound = violationsFound + 1
    
          if (violationsFound === totalNumberOfViolations) {
            showEndScreenqueens()
          }
      })
      function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
    }
})
   
const $fliesqueens= document.getElementById ("fliesqueens")
$fliesqueens.addEventListener("click",function (){
    console.log($fliesqueens)
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

        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenqueens()
        }
    })
    function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
    }
}) 

const $verminproofqueens= document.getElementById ("verminproofqueens")
$verminproofqueens.addEventListener("click",function (){
    console.log($verminproofqueens)
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
        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenqueens()
        }
    })
    function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
    }
})  
   const $chefqueens= document.getElementById ("chefqueens")
   $chefqueens.addEventListener("click",function (){
       console.log($chefqueens)
       // hide rats
      $chefqueens.style.display="none"
       // show rat in footer
       document.getElementById ("footercertificatequeens").style.opacity=1
       // show popup
    const $chefpopupqueens =  document.getElementById ('chefpopupqueens')
     console.log ($chefpopupqueens)  
    $chefpopupqueens.style.display="block"
    //change apron color
    const $aproncolor1 =  document.getElementById ('characterbox2')
    console.log ($aproncolor1)  
   $aproncolor1queens.style.display="block"
      })
     
      function exitButton2queens (chefbuttonqueens){ 
        console.log (chefbuttonqueens)
        //hide popup once clicked
        const $chefpopupqueens= document.getElementById ('chefpopupqueens')
        $chefpopupqueens.style.display="none"
    //show new popup
    const $certificatepopupqueens =  document.getElementById ('certificatepopupqueens')
    console.log ($certificatepopupqueens)  
    $certificatepopupqueens.style.display="block"
    //close popup
    $certificatepopupqueens.addEventListener('click', function(){
    $certificatepopupqueens.style.display= "none"

        
        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenqueens()
        }
        function showEndScreenqueens() {
            const $endpopupqueens =  document.getElementById ('endpopupqueens')
            console.log ($endpopupqueens)  
            $endpopupqueens.style.display="block"
        }
    })}


    const $uncleansurfacequeens= document.getElementById ("uncleansurfacesqueens")
    $uncleansurfacequeens.addEventListener("click",function (){
        console.log($uncleansurfacequeens)
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
        violationsFound = violationsFound + 1
  
        if (violationsFound === totalNumberOfViolations) {
          showEndScreenqueens()
        }
        })
        function showEndScreen() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
       }
        
       })
     


    const $contaminationqueens= document.getElementById ("contaminationqueens")
    $contaminationqueens.addEventListener("click",function (){
        console.log($contaminationqueens)
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
    
            violationsFound = violationsFound + 1
      
            if (violationsFound === totalNumberOfViolations) {
              showEndScreenqueens()
            }
        })
        function showEndScreenqueens() {
            const $endpopupqueens =  document.getElementById ('endpopupqueens')
            console.log ($endpopupqueens)  
            $endpopupqueens.style.display="block"
        }
    }) 

    const $bulbqueens= document.getElementById ("bulbqueens")
    $bulbqueens.addEventListener("click",function (){
        console.log($bulbqueens)
        // hide light
       $bulbqueens.style.display="none"
        // show light in footer
        document.getElementById ("footerbulbqueens").style.opacity=1
        // show popup
        const $bulbpopupqueensqueens =  document.getElementById ('bulbpopupqueens')
        console.log ($bulbpopupqueens)  
        $bulbpopupqueens.style.display="block"
        //close popup
        $bulbpopupqueens.addEventListener('click', function(){
        $bulbpopupqueens.style.display= "none"
    
            violationsFound = violationsFound + 1
      
            if (violationsFound === totalNumberOfViolations) {
              showEndScreenqueens()
            }
      })
      function showEndScreenqueens() {
        const $endpopup =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
    }
    }) 

    const $improperqueens= document.getElementById ("nonfoodcontactqueens")
    $improperqueens.addEventListener("click",function (){
        console.log($improperqueens)
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
         violationsFound = violationsFound + 1
       
         if (violationsFound === totalNumberOfViolations) {
           showEndScreenqueens()
         }
       })
       function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
    }
    }) 
   

   const $plumbingqueens= document.getElementById ("plumbingqueens")
   $plumbingqueens.addEventListener("click",function (){
       console.log($plumbingqueens)
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
       violationsFound = violationsFound + 1
       
       if (violationsFound === totalNumberOfViolations) {
         showEndScreenqueens()
       }
      })
      function showEndScreenqueens() {
        const $endpopupqueens =  document.getElementById ('endpopupqueens')
        console.log ($endpopupqueens)  
        $endpopupqueens.style.display="block"
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

function gotoLevelSelectqueens(buttonnamequeens) {
    console.log (buttonnamequeens)
    //hide popup once clicked
    beginningpopupqueens.style.display="none"
}



  




 

   
    

    


   
    



  





