const actionLink = document.querySelectorAll(".link-card .link-action");

// console.log('actionLink : ', actionLink);

actionLink.forEach((action) => {
    action.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute('href'));

        document.getElementById('toast').innerHTML = `
        <div class="toast-container">
        <p>Tautan berhasil disalin</p>
        </div>
        `;
        
        setTimeout(() => {
            document
              .querySelector("#toast .toast-container")
              .classList.add("toast-hidden");
          }, 300);
      
          setTimeout(() => {
            document.querySelector("#toast .toast-container").remove();
          }, 2000);

        })
    
})

const nav = document.querySelector('header');

window.addEventListener('scroll', () => {
  if(document.documentElement.scrollTop > 20){
      nav.classList.remove('hidden');

  } else{
      nav.classList.add('hidden');

  }
});