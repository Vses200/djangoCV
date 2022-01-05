$(document).ready(function(){

  const bars = document.querySelectorAll('.progress-bar');  
  //console.log(bars);
function showskill(){
  bars.forEach(function(bar){
      let percentage = bar.dataset.percent;
      //console.log(percentage);
      let tooltip = bar.children[0];
      tooltip.innerText=percentage+ '%';
      bar.style.width = percentage + '%';
  })
}

  //counter
    const counters = document.querySelectorAll('.counter');
   // console.log(counters);
   function runCounter(){
       counters.forEach(counter =>{
           counter.innerText=0;
           let target = +counter.dataset.count;
           let step = target /100;

           
           //console.log(target);

           let countIt = function(){
               let displayedCount = +counter.innerText;
               if(displayedCount<target){
                   counter.innerText= Math.ceil(displayedCount + step);
                   // console.log(displayedCount);
                   setTimeout(countIt,1);
               }
               else{
                   counter.innerText = target;
               }
           }
           countIt();

       })
   }
   runCounter();

   let counterSection = document.querySelector('.counter-wrapper');
   let options1 ={
       rootMargin : '0px 0px -200px 0px'
   }
   let options2 ={
    rootMargin : '0px 0px -200px 0px'
}
let done =0;
   const sectionObserver = new IntersectionObserver(function(entries){

    if(entries[0].isIntersecting && done!==1){
        done=1;
        runCounter();
    }
   },options2)
   sectionObserver.observe(counterSection);
   let skillSection = document.querySelector('.skills-wrapper');
   const skillObserver = new IntersectionObserver(function(entries){

    if(entries[0].isIntersecting){
        showskill();
    }
   },options1)
   skillObserver.observe(skillSection);




   //image filter

   var $wrapper = $('.portfolio-wrapper');
   
   //initialize plugin

   $wrapper.isotope({
       filter : '*',
       layoutMode : 'masonry',
       animationOptions : {
           duration : 750,
           easing : 'linear'
       }
   });

   let links = document.querySelectorAll('.tabs a');
   //console.log(links);
   links.forEach(link => {
       let selector = link.dataset.filter;
       //console.log(selector);
       link.addEventListener('click',function(e){
           e.preventDefault();
        //console.log("gugugaga")

        $wrapper.isotope({
            filter : selector,
            layoutMode : 'masonry',
            animationOptions : {
                duration : 750,
                easing : 'linear'
            }
        });
       
        links.forEach(link =>{
            link.classList.remove('active');
        })
        e.target.classList.add('active');
       });
   })




   //magnify popup

   $('.magnify').magnificPopup({
       type: 'image',
       gallery : {
           enabled : true
       },
       zoom : {
           enable : true
       }
   });

   //slider
   $('.slider').slick({
        arrows: false,
        autoplay : true
   });
});