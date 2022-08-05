const ElementHTML = class ElementHTML {
	constructor(element) {
		this._element = element;
	}

	get element() {
		return this._element;
	}

	createElementError = (message) => {
		const div = document.createElement("div");
		div.innerHTML = message;
		div.classList.add("c-error__text");
		this.element.insertAdjacentElement("afterend", div);
		this.element.classList.add("c-error__input");

		this.element.addEventListener("focus", () => {
			if (this.element.classList.contains("c-error__input")) {
				this.element.classList.remove("c-error__input");
				this.element.parentNode.removeChild(div);
			}
		});
	};
};

export { ElementHTML };
