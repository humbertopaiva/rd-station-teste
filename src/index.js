import { FormController } from "./controllers/FormController.js";
import { MenuController } from "./controllers/MenuController.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
import { Menu } from "./models/Menu.js";

const Form = new FormController();

// const navmenu = new MenuController("navMenu", "navMenu__open-button");
// console.log(navmenu);

// const dropdown = new MenuController("", "");

const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

// navmenu.showNavMenu();

// console.log(HeaderButton.button.element);

// this._element = document.getElementById("navMenu");
// this._openButton = document.getElementById("navMenu__open-button");
