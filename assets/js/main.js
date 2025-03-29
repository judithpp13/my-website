/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/*===== SEARCH SHOW =====*/
/* Validate if constant exists */
if(searchButton){
  searchButton.addEventListener('click', () =>{
    searchContent.classList.add('show-search')
  })
}
  
/*===== SEARCH HIDDEN =====*/
/* Validate if constant exists */
if(searchClose){
  searchClose.addEventListener('click', () =>{
    searchContent.classList.remove('show-search')
  })
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton){
  loginButton.addEventListener('click', () =>{
    loginContent.classList.add('show-login')
  })
}
  
/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose){
  loginClose.addEventListener('click', () =>{
    loginContent.classList.remove('show-login')
  })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('shadow-header') 
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints:{
    1220: {
      spaceBetween: -32,
    },
  },
})

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints:{
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
})

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',

  breakpoints:{
    1150: {
      slidesPerView: 3,
    },
  },
})

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  breakpoints:{
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true, // Animations repeat
})

sr.reveal(`.home__data, .featured__container, .new__container, 
           .join__data, .testimonial__container, .footer`)
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'})


/* added on 10/25 by Judith */

// Add an event listener for when the slide changes
// swiperFeatured.on('slideChange', () => {
//   // Get the index of the active slide
//   const activeIndex = swiperFeatured.realIndex;
  
//   // Access the active slide element and its image
//   const activeSlide = swiperFeatured.slides[activeIndex];
//   const activeImage = activeSlide.querySelector('img'); // Assuming each slide has an <img> tag

//   // Log the active image's source
//   if (activeImage && activeImage.src.endsWith('.png')) {
//     // Extract the filename from the src
//     const imageName = activeImage.src.split('/').pop();
//     console.log(`Current active image name: ${imageName}`);
//  } else {
//     console.log('No PNG image found in the active slide.');
//  }
// });


// Select all the .ri-search-line buttons in the Swiper slides


// Select all the .ri-search-line buttons in the Swiper slides
// added by Judith on 10/25/2024
const zoomButtons = document.querySelectorAll('.ri-search-line');

zoomButtons.forEach(button => {
   button.addEventListener('click', (event) => {
      // Find the closest slide (parent element) and its image
      const slide = event.target.closest('.swiper-slide');
      const img = slide.querySelector('img');

      if (img) {
         // Check the current zoomed state
         if (img.dataset.zoomed === "true") {
            // If already zoomed, reset the image
            img.classList.remove('amplified');
            img.dataset.zoomed = "false";
         } else {
            // If not zoomed, apply the zoom effect
            img.classList.add('amplified');
            img.dataset.zoomed = "true";
         }
      }
   });
});

// added by Judith on 10/26/2024

// Select all the heart buttons in the Swiper slides
const likeButtons = document.querySelectorAll('.ri-heart-3-line');
likeButtons.forEach(button => {
   button.addEventListener('click', (event) => {
      // Find the closest parent container (e.g., '.featured__actions') and look for .like-count inside it
      const slide = button.closest('.swiper-slide');
      const likeCount = slide ? slide.querySelector('.like-count') : null;

      // Check if likeCount exists and is the correct element
      if (likeCount) {
         // Parse the current count and increment it
         let count = parseInt(likeCount.textContent) || 0;
         count += 1;

         // Update the displayed count
         likeCount.textContent = count;
      } else {
         console.error("Like count element not found or incorrect structure for this button.");
      }
   });
});


