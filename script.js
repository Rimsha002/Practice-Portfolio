//   Professional Skills------ Other Method of Dynamic-Circles/////
/*
const circles =document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg" ></div> `; 
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let x = 0; x < percent ; x++){
         pointsMarked[i].classList.add('marked')
        } 
    
    })*/



// Turn the page next or previous by cliking button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick= ( ) => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn'))
        {
            pageTurn.classList.remove('turn');
            setTimeout(() =>{
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else
        {
            pageTurn.classList.add('turn');
            setTimeout(() =>{
                pageTurn.style.zIndex = 20 +index;
            }, 500)
        }
    }
})


//Contact Me button when click
const pages = document.querySelectorAll('.page-right');
const contactMeBtn =document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page,index) =>{
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
               page.style.zIndex = 20 + index; 
            },   500 )
        }, (index +1) *200 + 100 )
    })
}

//Create Reverse index function
let totalPages = pages.length;
let pageNumber = 0;
 function reverseIndex() {
    pageNumber -- ; 
    if (pageNumber < 0) {
        pageNumber = totalPages - 1 ; 
    }
 }

//Back to profile page when click
const backProfileBtn = document.querySelector(".back-profile");

backProfileBtn.onclick = () => {

    pages.forEach(( _, index)  => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove("turn");

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        },  (index + 1) * 200 + 100  )
    })
}

//Opening Animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

//Opening animation (Cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
},2100 )

setTimeout(() => {
    coverRight.style.zIndex = -1;
},2800 )

//Opening animation (Page-Left and profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
},3200 )




//Opening animation (All pages right animation)
pages.forEach(( _, index)  => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove("turn");

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    },  (index + 1) * 200 + 2100  )
})


