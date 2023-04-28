const $chef= document.getElementById ("chef")
$chef.addEventListener("click",function (){
    console.log($chef)
    // hide rats
   $chef.style.display="none"
    // show rat in footer
    document.getElementById ("footercertificate").style.opacity=1
    // show popup
   })

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
   })