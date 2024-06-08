let scrollArea = document.querySelector('.stories');
let setaLeft   = document.querySelector('.seta-storie-left');
let setaRight  = document.querySelector('.seta-storie-right');

setaLeft.addEventListener('click', (e) => {
    
    scrollArea.scrollTo({
        left:scrollArea.scrollLeft - 150,
        behavior: 'smooth'
    });
   
});

setaRight.addEventListener('click', (e) => {
    scrollArea.scrollTo({
        left:scrollArea.scrollLeft + 150,
        behavior: 'smooth'
    });
    
    

});