// src/main.ts
import { americanCities } from './seeds/cities.js';
import { apartmentDescriptions } from './seeds/aptNames.js';

function getRandomItem<T>(arr: T[]): T {
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

function getRandomName<T>(arr: T[]): T {
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




function openMenu(): void {
    const menu: any = document.getElementById("menu");
    menu.classList.remove("hidden");
}

function closeMenu(): void {
    const menu: any = document.getElementById("menu");
    menu.classList.add("hidden");
}

// Isso faz com que as funções sejam acessíveis globalmente
// Isso é necessário para que o HTML possa chamar essas funções no JavaScript
(window as any).openMenu = openMenu;
(window as any).closeMenu = closeMenu;

function getRandomNumber(): number {
  return Math.floor(Math.random() * (800 - 300 + 1)) + 300;
}


document.addEventListener('DOMContentLoaded', () => {
    const pricingElements = document.querySelectorAll('.pricing');

    pricingElements.forEach(p => {
        const randomPrice = getRandomNumber();
        p.textContent = `$${randomPrice}/Month`;
    });
});