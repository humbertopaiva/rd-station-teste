const Menu = class Menu {
	constructor(element, button) {
		this._element = document.getElementById(element);
		this._openButton = document.getElementById(button);
	}

	get element() {
		return this._element;
	}

	get openButton() {
		return this._openButton;
	}
};

export { Menu };
