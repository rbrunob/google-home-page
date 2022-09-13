document.querySelector('input[type="text"]').addEventListener('keydown', function(e) {
    document.querySelector('.search-bar').classList.add('search-bar-focused');
    if (e.target.value == '' && e.which == 8) {
        document.querySelector('.search-bar').classList.remove('search-bar-focused');
    }
})


document.querySelector('.svg-container').addEventListener('click', function(e) {
    document.querySelector('.apps-container').classList.toggle('active');
})