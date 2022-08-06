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
				if (!this.open) {
					this.showNavMenu();

					if (this.menu.openButton.id === "navmenu__open-button") {
						const iconButton =
							document.getElementById("icon-button");
						iconButton.src = "../../public/images/close_btn.svg";
					}
				}

				if (this.open) {
					this.hideNavMenu();

					if (this.menu.openButton.id === "navmenu__open-button") {
						const iconButton =
							document.getElementById("icon-button");
						iconButton.src = "../../public/images/menu.svg";
					}
				}

				this.open = !this.open;
			});
		}
	};

	showNavMenu = () => {
		this.menu.element.style.display = "flex";
	};

	hideNavMenu = () => {
		this.menu.element.style.display = "none";
	};

	events = () => {
		this.handleClick();
	};
};

export { MenuController };
