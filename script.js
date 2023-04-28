const $rats= document.getElementById ("rats")

$rats.addEventListener("click",function (){
 console.log($rats)
 // hide rats
$rats.style.display="none"
 // show rat in footer
 document.getElementById ("footerrats").style.opacity=1
 // show popup
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

const $map= document.getElementById ("map")
$map.addEventListener("click",function (){
    console.log($map)
//bring up map popup
   })
