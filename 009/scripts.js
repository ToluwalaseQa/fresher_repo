// GSAP Animations
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// List Feature Section Animation
const listAnimation = gsap.utils.toArray('.gsapListAnimation');
listAnimation.forEach((ele) => {
  let listContain = gsap.timeline({
    scrollTrigger: {
      trigger: ele,
      start: 'top 75%',
      end: '+=0.6',
      scrub: false,
      markers: false,
      once: true,
    },
  });
  listContain.from(ele, {
    y: 20,
    opacity: 0,
    scale: 0.8,
    duration: 0.75,
    ease: 'power2.out',
  });
});

// Slide Left Animation
const listAnimationRight = gsap.utils.toArray('.gsapListAnimationRight');
listAnimationRight.forEach((ele) => {
  let listContainRight = gsap.timeline({
    scrollTrigger: {
      trigger: ele,
      start: 'top 85%',
      end: '+=0.6',
      scrub: false,
      markers: false,
      once: true,
    },
  });
  listContainRight.from(ele, {
    opacity: 0,
    scale: 0.9,
    duration: 0.75,
    ease: 'power2.out',
  });
});

// Pricing Card Animation
const listAnimationCard = gsap.utils.toArray('.gsapCardAnimation');
const screenWidth = window.innerWidth;
const diffStart = screenWidth < 768 ? 'top 70%' : 'top 70%';
var listContainCard = gsap.timeline({
  scrollTrigger: {
    trigger: '.pricing-card-holder',
    start: diffStart,
    end: '+=0.4',
    scrub: false,
    markers: false,
    once: true,
  },
});
listAnimationCard.forEach((ele) => {
  listContainCard.from(ele, {
    y: 40,
    opacity: 0,
    duration: 0.75,
    stagger: 0.1,
    ease: 'back.inOut',
  });
});

// Chatfuel Widget Interaction
document.addEventListener('click', function (event) {
  const hostElement = document.querySelector('.chatfuel-ai-widget');
  if (hostElement) {
    const shadowRoot = hostElement.shadowRoot;
    const chatWidget = shadowRoot.querySelector('.cfai-widget');
    const chatContainer = shadowRoot.querySelector('.cfai-widget__chat');
    const chat_close = shadowRoot.querySelector('.cfai-widget__close-btn');
    var targetElement = event.target;
    if (targetElement !== hostElement && chatContainer) {
      chatWidget.classList.remove('cfai-widget--visible');
      chat_close.click();
    }
  }
});
