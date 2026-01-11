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

        // API Configuration
        const API_URL = 'https://api.itsvde.com/';
        
        // Fetch bio links from API
        async function fetchBioLinks() {
            const linkListElement = document.getElementById('linkList');
            
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        data: 'bioLink'
                    })
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                
                if (result.success && result.data && result.data.length > 0) {
                    renderLinks(result.data);
                } else {
                    showError('No links found');
                }
                
            } catch (error) {
                console.error('Error fetching bio links:', error);
                showError('Failed to load links. Please try again.');
            }
        }
        
        // Render links to the page
        function renderLinks(links) {
            const linkListElement = document.getElementById('linkList');
            linkListElement.innerHTML = '';
            
            links.forEach((link, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="${link.URL}" target="_blank" class="link-card" title="${link.Name}">
                        <div class="link-icon">
                            <i class="${link.Icon}"></i>
                        </div>
                        <p>${link.Name}</p>
                        <div class="link-action">
                            <!--<i class="ph-duotone ph-copy"></i>-->
                        </div>
                    </a>
                `;
                linkListElement.appendChild(li);
            });
        }
        
        // Show error message with retry button
        function showError(message) {
            const linkListElement = document.getElementById('linkList');
            linkListElement.innerHTML = `
                <div class="error-container">
                    <p class="error-message">${message}</p>
                    <button class="retry-button" onclick="fetchBioLinks()">
                        <i class="ph-bold ph-arrow-clockwise"></i> Retry
                    </button>
                </div>
            `;
        }
        
        // Initialize on page load
        document.addEventListener('DOMContentLoaded', function() {
            fetchBioLinks();
        });