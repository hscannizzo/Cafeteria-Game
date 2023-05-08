// These are the levels of our game
const $kitchenLevel = document.getElementById('kitchen')
const $cafe1Level = document.getElementById('cafe1')
const $cafe2Level = document.getElementById('cafe2')
const $lunchlineLevel = document.getElementById('lunchline')



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
$ratspopup.style.display= "none"}
)
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
    $fliespopup.style.display= "none"}
    )
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
    $verminproofpopup.style.display= "none"}
    )
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
$certificatepopup.style.display= "none"}
)
    }

  

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
        $contaminationpopup.style.display= "none"}
        )
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
        $bulbpopup.style.display= "none"}
        )
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
        $improperpopup.style.display= "none"}
        )
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
       $plumbingpopup.style.display= "none"}
       )
      })
      
      const $uncleansurface= document.getElementById ("uncleansurface")
      $uncleansurface.addEventListener("click",function (){
          console.log($uncleansurface)
          // hide light
         $uncleansurface.style.display="none"
          // show light in footer
          document.getElementById ("footeruncleansurface").style.opacity=1
          // show popup
          const $uncleansurfacespopup =  document.getElementById ('uncleansurfacespopup')
          console.log ($uncleansurfacespopup)  
          $uncleansurfacespopup.style.display="block"
          //close popup
          $uncleansurfacespopup.addEventListener('click', function(){
          $uncleansurfacespopup.style.display= "none"}
          )
         })

         const $pesticides= document.getElementById ("pesticides")
         $pesticides.addEventListener("click",function (){
             console.log($pesticides)
             // hide light
            $pesticides.style.display="none"
             // show light in footer
             document.getElementById ("footerpesticides").style.opacity=1
             // show popup
             const $pesticidespopup =  document.getElementById ('pesticidespopup')
             console.log ($pesticidespopup)  
             $pesticidespopup.style.display="block"
             //close popup
             $pesticidespopup.addEventListener('click', function(){
             $pesticidespopup.style.display= "none"}
             )
            })

   
const $map= document.getElementById ("map")
$map.addEventListener("click",function (){
    console.log($map)
//bring up map popup
const $mappopup = document.getElementById ('mappopup')
console.log (mappopup)
mappopup.style.display = 'block'
   })

   const mappopup = document.getElementById('mappopup')
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