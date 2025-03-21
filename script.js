function toggleDropdown(menuId) {
    const allMenus = document.querySelectorAll('.allMenu');
    allMenus.forEach(item => {
        if (item.id !== menuId) {
            item.classList.add('hidden');
        }
    });
    let menu1 = document.getElementById(menuId);
    menu1.classList.toggle('hidden');
}

const menu = document.getElementById('menu')
const body = document.querySelector('body')

function navbar() {
    menu.style.transform = 'translateX(0)';
   
}

function deleteNav() {
    menu.style.transform = 'translateX(100%)';
}

const menuDropdown = document.getElementById("menuDropdown")
const menuDropdown2 = document.getElementById("menuDropdown2")
const menuDropdown3 = document.getElementById("menuDropdown3")
const menuDropdown4 = document.getElementById("menuDropdown4")
const menuDropdown5 = document.getElementById("menuDropdown5")

const menuItems = document.querySelectorAll('.menu-item');

function dropDown(menuId) {
    const allMenus = [menuDropdown, menuDropdown2, menuDropdown3, menuDropdown4, menuDropdown5];
    menuItems.forEach(item => {
        if (item.id == menuId) {
            item.classList.toggle('hidden')
        } else {
            item.classList.add('hidden')
        }
    })

}

function stopMenu(event) {
    event.stopPropagation()
}

const popup = document.getElementById('popup')

let flag = true
function handlePopup() {
    popup.style.display = flag ? 'grid' : 'none'
    flag = !flag
}
function deletePopup() {
    popup.style.display = 'none'
}
function stopPopup(event){
    event.stopPropagation()
}