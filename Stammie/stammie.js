function menuclick(x) {
    x.classList.toggle("change");
    document.getElementById("respmenu").classList.toggle("menu-show");
}

function chat() {
    textget = document.getElementById("chatbox").value
    document.getElementById("chattext").innerHTML = "You: " + textget
    document.getElementById("chatbox").value = ""
}