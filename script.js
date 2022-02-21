function zoomClick() {
    window.alert("have you tried next door?");
}

function remove() {
    var element = document.getElementById("disappear");
    element.remove();

    var friend = document.getElementById("friend");
    friend.innerHTML = "bro did... did you just delete my friend?"
    friend.style.backgroundImage = "url('Sad_Face_Emoji_large.png')";
}

function add() {
    var addElement = document.createElement("a");
    addElement.innerHTML = "woooooooo";
    addElement.style.display = "block";
    addElement.style.textAlign = "center";
    addElement.style.margin = "0";
    addElement.style.textDecoration = "none";
    addElement.style.transition = "1s all";
    addElement.style.borderRadius = "5px";
    addElement.style.padding = "10px";
    addElement.style.backgroundColor = "rgba(252, 252, 252, 0.678)";
    addElement.style.border = "2px solid rgb(79,185,227)";
    addElement.style.textAlign = "center";
    addElement.style.margin = "auto";
    


    document.body.appendChild(addElement);
}