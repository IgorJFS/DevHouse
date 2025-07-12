// src/main.ts
import { americanCities } from './seeds/cities.js';
import { apartmentDescriptions } from './seeds/aptNames.js';
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
document.addEventListener('DOMContentLoaded', () => {
    const citySpans = document.querySelectorAll('.randomCity');
    citySpans.forEach(spanElement => {
        const randomCity = getRandomItem(americanCities);
        spanElement.textContent = randomCity;
    });
});
function getRandomName(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
document.addEventListener('DOMContentLoaded', () => {
    const h2Elements = document.querySelectorAll('.randomName');
    h2Elements.forEach(h2 => {
        const randomName = getRandomName(apartmentDescriptions);
        h2.textContent = randomName;
    });
});
function openMenu() {
    const menu = document.getElementById("menu");
    menu.classList.remove("hidden");
}
function closeMenu() {
    const menu = document.getElementById("menu");
    menu.classList.add("hidden");
}
// Make functions globally accessible
window.openMenu = openMenu;
window.closeMenu = closeMenu;
function getRandomNumber() {
    return Math.floor(Math.random() * (800 - 300 + 1)) + 300;
}
document.addEventListener('DOMContentLoaded', () => {
    const pricingElements = document.querySelectorAll('.pricing');
    pricingElements.forEach(p => {
        const randomPrice = getRandomNumber();
        p.textContent = `$${randomPrice}/Month`;
    });
});
