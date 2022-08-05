import { Menu } from "../models/Menu.js";

const MenuController = class MenuController {
	constructor(element, button) {
		this._menu = new Menu(element, button);
		this._open = false;
		this.events();
	}

	get menu() {
		return this._menu;
	}

	get open() {
		return this._open;
	}

	set open(boolean) {
		this._open = boolean;
	}

	handleClick = () => {
		if (this.menu.openButton) {
			this.menu.openButton.addEventListener("click", () => {
				if (!this.open) this.showNavMenu();

				if (this.open) this.hideNavMenu();

				this.open = !this.open;
			});
		}
	};

	showNavMenu = () => {
		this.menu.element.classList.add("m-menu--open");
	};

	hideNavMenu = () => {
		this.menu.element.classList.remove("m-menu--close");
	};

	events = () => {
		window.onload = () => {
			this.handleClick();
		};
	};
};

export { MenuController };
