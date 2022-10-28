const atags =document.querySelector('#linked');
const gh =document.querySelector('#gh');
const cd =document.querySelector('#cd');
atags.addEventListener('mouseover', function() {
   atags.classList.add("animate__animated", "animate__rubberBand"); 
   let tID = setTimeout(function () {
    atags.classList.remove("animate__animated", "animate__rubberBand"); 
    window.clearTimeout(tID);
    
   		// clear time out.
}, 2000);

})

gh.addEventListener('mouseover', function() {
    gh.classList.add("animate__animated", "animate__rubberBand"); 
    let tID = setTimeout(function () {
     gh.classList.remove("animate__animated", "animate__rubberBand"); 
     window.clearTimeout(tID);
     
            // clear time out.
 }, 2000);
 
 })


 cd.addEventListener('mouseover', function() {
    cd.classList.add("animate__animated", "animate__rubberBand"); 
    let tID = setTimeout(function () {
     cd.classList.remove("animate__animated", "animate__rubberBand"); 
     window.clearTimeout(tID);
     
            // clear time out.
 }, 2000);
 
 })