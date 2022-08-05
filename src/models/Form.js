const Form = class From {
	constructor() {
		this._form = document.getElementById("rd-form");
		this._formInputs = Array.from(
			document.querySelectorAll(".rd-form__input")
		);
		this._radioInputs = document.querySelectorAll(".rd-form__input-radio");
		this._selectJobInput = document.getElementById("rd-form__selectJob");
		this._button = document.getElementById("rd-form__button");
		this._formData = {};
	}

	get form() {
		return this._form;
	}

	get formInputs() {
		return this._formInputs;
	}

	set isValid(valid) {
		this._isValid = valid;
	}

	get isValid() {
		return this._isValid;
	}

	get radioInputs() {
		return this._radioInputs;
	}

	get selectJobInput() {
		return this._selectJobInput;
	}

	get formData() {
		return formData;
	}

	set formData(data) {
		this._formData = data;
	}

	get button() {
		return this._button;
	}
};

export { Form };
