function fireScript()
{
    var content = document.getElementById("content");
    var btn = document.getElementById("show-more")

    btn.onclick = function () {
        if (content.className == ("open")) {
            // shrink the box
            content.className = "";
            btn.innerHTML = "Show More";

        } else {
            content.className = "open";
            btn.innerHTML = "Show less";

        }
    };
}

window.onload = function () {
    
fireScript()

}
