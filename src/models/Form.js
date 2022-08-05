import { Input } from "./Input.js";
import { Select } from "./Select.js";

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

	// CHECK IF ALL INPUTS ARE VALID
	checkAllFields = () => {
		//CHECK ALL INPUTS

		for (let element of this.formInputs) {
			const input = new Input(element);
			if (input) input.IsValid();
		}

		// CHECK SELECT

		if (!this.selectJobInput.value) {
			const select = new Select(this.selectJobInput);
			select.createElementError("Escolha seu cargo");
		} else {
		}
	};

	isValid = () => {
		const errorMessages = document.querySelectorAll(".c-error__text");
		return !errorMessages.length;
	};

	handleClick = () => {
		this.clearErrorMessages();
		this.checkAllFields();
		//send data if form is ok
		if (this.isValid()) {
			const data = this.createFormData();
			console.log(data);

			if (
				data.name &&
				data.email &&
				data.job &&
				data.password &&
				data.phone
			) {
				fetch("https://rdstation-signup-psel.herokuapp.com", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-type": "application/json;charset=UTF-8",
					},
				})
					.then((response) => response.json())
					.then((json) => console.log(json))
					.catch((err) => console.log(err));
			}
		} else console.log("Formulário inválido!");
	};

	createFormData = () => {
		const name = document.getElementById("rd-form__name").value;
		const email = document.getElementById("rd-form__email").value;
		const phone = document.getElementById("rd-form__phone").value;
		const job = document.getElementById("rd-form__selectJob").value;
		const password = document.getElementById("rd-form__password").value;
		const site = document.getElementById("rd-form__site-input").value;

		return { name, email, phone, job, password, site };
	};

	//add mask to phone input
	addPhoneMask = () => {
		const phoneInput = document.getElementById("rd-form__phone");
		phoneInput.onkeyup = (e) => {
			const input = e.target;

			input.value = input.value
				.replace(/\D/g, "")
				.replace(/^(\d{2})(\d)/g, "($1) $2");

			//create an Array with 2 positions, with code and phone number
			const numberArray = input.value.split(" ");

			//get the code number from  the numberArray
			const ddd = numberArray[0]
				.replace(`${"("}`, "")
				.replace(`${")"}`, "");

			//get the phone number from the numberArray
			const phoneNumber = numberArray[1];
			const phoneNumberArray = phoneNumber && phoneNumber.split("");

			if (phoneNumberArray) {
				const numberInputValue = `(${ddd}) ${phoneNumberArray
					.slice(0, 9)
					.join("")}`;

				input.value = numberInputValue.replace(/(\d)(\d{4})$/, "$1-$2");
			}
		};
	};

	setRadioButtonsListeners = () => {
		const siteInputElement = document.getElementById("rd-form__site-input");

		const radioButtonDisabled = document.getElementById(
			"rd-form__radio-siteDisabled"
		);

		const radioButtonEnabled = document.getElementById(
			"rd-form__radio-siteEnabled"
		);

		radioButtonDisabled.addEventListener("change", () => {
			if (radioButtonDisabled.checked) {
				siteInputElement.disabled = true;
				siteInputElement.value = "";
				siteInputElement.classList.remove("c-error__input");
				this.removeSibling(siteInputElement);
				this.removeSibling(siteInputElement);
			}
		});

		radioButtonEnabled.addEventListener("change", () => {
			if (radioButtonEnabled.checked) {
				siteInputElement.disabled = false;
				siteInputElement.classList.remove("c-error__input");
				this.removeSibling(siteInputElement);
				this.removeSibling(siteInputElement);
			}
		});
	};

	removeSibling = (input) => {
		const sibling = input.nextElementSibling;
		if (sibling) sibling.parentNode.removeChild(sibling);
	};

	clearErrorMessages = () => {
		const errorMessages = document.querySelectorAll(".c-error__text");

		for (let message of errorMessages) {
			message.parentNode.removeChild(message);
		}
	};

	events = () => {
		window.onload = () => {
			//add click event to button
			this._button.addEventListener("click", (event) => {
				event.preventDefault();
				this.handleClick();
			});

			this.setRadioButtonsListeners();
			this.addPhoneMask();
		};
	};
};

export { Form };
