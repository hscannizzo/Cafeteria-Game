// These are the levels of our game
const $kitchenLevel = document.getElementById('kitchen')
const $cafe1Level = document.getElementById('cafe1')
const $cafe2evel = document.getElementById('cafe2')
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

const $light= document.getElementById ("lighting")
$light.addEventListener("click",function (){
    console.log($light)
    // hide light
   $light.style.display="none"
    // show light in footer
    document.getElementById ("footerlight").style.opacity=1
    // show popup
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

   

   const $plumbing= document.getElementById ("plumbing")
   $plumbing.addEventListener("click",function (){
       console.log($plumbing)
       // hide light
      $plumbing.style.display="none"
       // show light in footer
       document.getElementById ("footerplumbing").style.opacity=1
       // show popup
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
$cafe2evel.style.display="none"
$lunchlineLevel.style.display="none"

//show level for location name
//use location name as id to find specific level element
const selectedlevel=document.getElementById (locationname)
console.log (selectedlevel)
selectedlevel.style.display="block"
}

function exitButton (buttonname) {
    console.log (buttonname)
    //hide popup once clicked
    beginningpopup.style.display="none"
}