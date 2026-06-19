
const button = document.querySelector('.bnt');

button.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Light";
    } else {
        this.textContent = "Dark";
        console.log('current class name: ' + className);
    }
});
