function menu_mobile() {
    var btn_menu = document.getElementById('ul-mobile');
    if (btn_menu.style.display === "inline-block")
        btn_menu.style.display = "none";
    else {
        btn_menu.style.display = "inline-block";
    }
}