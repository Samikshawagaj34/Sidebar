function openSidebar()
{
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility = 'visible';

    const hamburgerMenuElement = document.getElementById('hamburger-menu');
    hamburgerMenuElement.style.visibility = 'hidden';

}
function closeSidebar()
{
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility = 'hidden';

    const hamburgerMenuElement = document.getElementById('hamburger-menu');
    hamburgerMenuElement.style.visibility = 'visible';

}