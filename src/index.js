import { FormController } from "./controllers/FormController.js";
import { MenuController } from "./controllers/MenuController.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

window.onload = () => {
	const Form = new FormController();
	const NavMenu = new MenuController(
		"navmenu-mobile",
		"navmenu__open-button"
	);

	const DropdownMenu = new MenuController(
		"dropdown-menu-mobile",
		"dropdown-mobile-trigger"
	);

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
};
