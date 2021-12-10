window.addEventListener("DOMContentLoaded", function() {
    let backgroundMain = document.querySelector(".mainBackground");
    const backgrounds = [document.querySelector(".bg1 img"), document.querySelector(".bg2 img"), document.querySelector(".bg3 img"), document.querySelector(".bg4 img")];
    let selectedBackground = backgrounds[0];

    backgrounds.forEach(bg => {
        bg.addEventListener('click', function() {
            selectedBackground.parentElement.classList.remove('border', "border-dark")
            bg.parentElement.classList.add('border', 'border-dark')
            selectedBackground = bg;
            backgroundMain.style.background = `url("${bg.src}")`;
        });
    })

})