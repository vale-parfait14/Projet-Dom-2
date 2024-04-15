


colo=function getRandomColor() {
    let letters = "123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
       color+= letters[Math.floor(Math.random()*16)];
        
    }

    return color;
}

function setRandomColor() {
    
    $("#color-box").css("backgroundColor", colo);
    $("#change-color-btn").css("background",colo);
    $(".container").css("background",colo);
}

