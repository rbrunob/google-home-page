const input = document.querySelector('input[type="text"]');
const searchBar = document.querySelector('.search-bar');

input.addEventListener('keydown', function(e) {
    searchBar.classList.add('search-bar-focused');
    if (e.target.value == '' && e.which == 8) {
        searchBar.classList.remove('search-bar-focused');
    }
    // } else if (e.target.value == true && e.which == 13) {
    //     e.target.value = search;
    //     window.location.assign(`https://www.google.com/search?q='${search}'`)
    // }
})


const svgApps = document.querySelector('.svg-container');
const appsContainer = document.querySelector('.apps-container');

svgApps.addEventListener('click', function(e) {
    appsContainer.classList.toggle('active');
})