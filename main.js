/* Kombination mellan https://code.tutsplus.com/tutorials/making-a-sliding-side-navigation-menu-for-responsive-designs--cms-28400 och https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
*/

function openNav() {
    document.getElementById("sideNavigation").style.width = "150px";
    document.getElementsById("content").style.marginLeft = "150px";
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementsById("content").style.marginLeft = "0";
}