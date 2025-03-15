import Swiper from 'assets/js/swiper-bundle.min.js';
// import 'swiper/swiper-bundle.css';

// Initialize Swiper with your desired configuration
const swiper = new Swiper('.swiper', {
   // your configuration settings
});

// Listen for the slide change event
swiper.on('slideChange', () => {
   // Get the index of the active slide
   const activeIndex = swiper.activeIndex;

   // Access the active slide element
   const activeSlide = swiper.slides[activeIndex];
   
   // Log or manipulate the active slide status
   console.log(`Current active slide index: ${activeIndex}`);
   console.log(`Active slide element:`, activeSlide);
});