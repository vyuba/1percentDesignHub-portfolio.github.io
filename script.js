const slideOpen = document.querySelector('#openButton');
const slideClose = document.querySelector('#closeButton');
const projectButt = document.querySelector('#projectButt');
const darkMode = document.querySelector('#darkMode');
const lightMode = document.querySelector('#lightMode');
const themeContainer = document.querySelector('#themeContainer');


themeContainer.addEventListener('click', ()=>{
    if (darkMode.style.opacity === '1') {
        darkMode.style.opacity = 0
        lightMode.style.opacity = 1
    } else {
        darkMode.style.opacity = 1
        lightMode.style.opacity = 0
    }
})


// darkMode.addEventListener('click', ()=>[
//     darkMode.style.opacity = 0 ,
//     lightMode.style.opacity = 1
// ])
// lightMode.addEventListener('click', ()=>[
//     lightMode.style.opacity = 0 ,
//     darkMode.style.opacity = 1
// ])

slideOpen.addEventListener('click', () => {
    const slideMenu = document.querySelector('#slideMenu')
    slideMenu.style.left = '0';
})

slideClose.addEventListener('click', closeSlideMenu);

function closeSlideMenu() {
    slideMenu.style.left = '-100%';
}

projectButt.addEventListener('click', closeSlideMenu);

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')


  let loader = document.querySelector('#preloader');
  window.addEventListener('load', ()=>{
    setTimeout(() => {
        loader.style.display = 'none'; 
    }, 2000);
  })


let selectorArray = document.querySelectorAll('.selector')
selectorArray.forEach(button =>{
    button.addEventListener('click', () => {
        // Change the color of the clicked button
        selectorArray.forEach(btn =>{
                // Change the color of the clicked button
                btn.style.backgroundColor = '#fff';
                btn.style.color = '#000'
        })

        button.style.backgroundColor = '#3F60D3';
        button.style.color = '#fff';
      });
})