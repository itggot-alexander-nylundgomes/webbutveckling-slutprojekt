function dropdown_profile(){
    dropdown = document.querySelector(".drop-down-profile")
    dropdown.classList.toggle("a_dropdown_profile")

    profilebox = document.querySelector(".profilebox")
    profilebox.classList.toggle("a_profilebox")

    box2 = document.querySelector(".box2")
    box2.classList.toggle("a_profilebox")
}

function dropdown_more(){
    more = document.querySelector(".game-ad-parent")
    more.classList.toggle("a_game-ad-parent")
}

function side_menu(){
    side = document.querySelector(".side-menu")
    side.classList.toggle("a_side-menu")

    middle = document.querySelector(".second")
    middle.classList.toggle("deactivate_mid")

    first = document.querySelector(".first")
    first.classList.toggle("spin_first")

    third = document.querySelector(".third")
    third.classList.toggle("spin_third")

}

function launch(){
    launch_text = document.querySelector(".launch_text")

    if (launch_text.innerHTMl === "Launch"){
        launch_text.innerHTMl = "..."
    }
    else{
        launch_text.innerHTMl = "Launch"
    }
}

function goBack(){
    window.history.back();
}

function changeImg(){
    img = document.querySelector(".first-img-product")
    
    if (img.id === 'fallout76_first_image'){
        img.id = 'fallout76_second_image'
    }
    else {
        img.id = 'fallout76_first_image'
    }
}