function toggleSidebar() { 
    document.getElementById("sidebar").classList.toggle(`active`);
    console.log('changed class');
}

function sidebarView() {
    let width = getElementById('sidebar').width();
    if (width == 0) {
        getElementById('sidebar').animate({width: "250"});
    } else {
        getElementById('sidebar').animate({width: "0"});
    }
}

