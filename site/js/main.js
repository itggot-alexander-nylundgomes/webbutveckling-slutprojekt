function dropdown_profile(){
    dropdown = document.querySelector(".drop-down-profile")
    dropdown.classList.toggle("a_dropdown_profile")

    profilebox = document.querySelector(".profilebox")
    profilebox.classList.toggle("a_profilebox")
}

function dropdown_more(){
    more = document.querySelector(".game-ad-parent")
    more.classList.toggle("a_game-ad-parent")
}

function side_menu(){
    side = document.querySelector(".side-menu")
    side.classList.toggle("a_side-menu")
}

// function color_switch_game(event){
//     gameColor = event.target
//     gameColor.classList.toggle("a_myGame-text")
// }

// function registerGameTextClick(myGame_text){
//     myGame_text.addEventListener("click", myGame_text)
// }

// gameColor = document.querySelectorAll(".myGame_text")
// gameColor.forEach(registerGameTextClick)