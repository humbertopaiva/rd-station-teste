import { Form } from "../models/Form.js";
import { InputController } from "./InputController.js";
import { SelectController } from "./SelectController.js";

const FormController = class FormController {
	constructor() {
		this._form = new Form();
		this.events();
	}

	get form() {
		return this._form;
	}

	// CHECK IF ALL INPUTS ARE VALID
	checkAllFields = () => {
		//CHECK ALL INPUTS

		const formInputs = this.form.formInputs;

		for (let element of formInputs) {
			const input = new InputController(element);
			if (input) input.isValid();
		}

		// CHECK SELECT

		if (!this.form.selectJobInput.value) {
			const selectInput = new SelectController(this.form.selectJobInput);
			selectInput.select.createElementError("Escolha seu cargo");
		}
	};

	isValid = () => {
		const password = document.getElementById("rd-form__password");
		const confirmedPassword = document.getElementById(
			"rd-form__passwordConfirm"
		);

		if (password.value !== confirmedPassword.value) {
			const confirmedInput = new InputController(confirmedPassword);
			confirmedInput.input.createElementError(
				"As senhas precisam ser iguais"
			);
		}

		const errorMessages = document.querySelectorAll(".c-error__text");
		return !errorMessages.length;
	};

	openLoadingModal = () => {
		const modal = document.getElementById("modal");
		modal.style.display = "flex";

		const spinner = document.getElementById("modal__spinner");
		spinner.style.display = "flex";

		modal.addEventListener("click", () => {
			modal.style.display = "none";
		});
	};

	closeLoadingModal = () => {
		const modal = document.getElementById("modal");
		modal.style.display = "none";
	};

	openSuccessMessage = () => {
		this.form.form.innerHTML = "";
		const div = document.createElement("div");
		const h2 = document.createElement("h2");
		const img = document.createElement("img");

		h2.innerText = "Obrigado! Entraremos em contato.";
		h2.style.textAlign = "center";
		h2.style.marginTop = "16px";
		img.alt = "Imagem de agradecimento";
		img.src = "../../public/images/thank.svg";
		div.appendChild(img);
		div.appendChild(h2);

		this.form.form.appendChild(div);

		const formContainer = document.getElementById("rd-form__container");
		formContainer.classList.add("rd-form__container");
	};

	changeInputVisibility = (input) => {
		if (input.type === "text") input.type = "password";
		else input.type = "text";
	};

	setPasswordEvents = () => {
		const password = document.getElementById("button-reveal-password");
		const passwordInput = document.getElementById("rd-form__password");
		const passwordIcon = document.getElementById("password-reveal-icon");

		const confirmPassword = document.getElementById(
			"button-reveal-confirm"
		);
		const confirmPasswordInput = document.getElementById(
			"rd-form__passwordConfirm"
		);
		const confirmPasswordIcon = document.getElementById(
			"confirm-reveal-icon"
		);

		password.addEventListener("click", () => {
			this.changeInputVisibility(passwordInput);
			if (passwordInput.type === "password") {
				passwordIcon.src = "../../public/images/eye_closed.svg";
			} else passwordIcon.src = "../../public/images/eye.svg";
		});

		confirmPassword.addEventListener("click", () => {
			this.changeInputVisibility(confirmPasswordInput);
			if (confirmPasswordInput.type === "password") {
				confirmPasswordIcon.src = "../../public/images/eye_closed.svg";
			} else confirmPasswordIcon.src = "../../public/images/eye.svg";
		});
	};

	handleClick = () => {
		this.clearErrorMessages();
		this.checkAllFields();

		//send data if form is valid
		if (this.isValid()) {
			this.openLoadingModal();
			const data = this.createFormData();

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
					.then((json) => {
						console.log(json);
						this.closeLoadingModal();
						this.openSuccessMessage();
					})
					.catch((err) => alert("Erro ao enviar os dados."));
			}
		}
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
		//add click event to button
		this.form.button.addEventListener("click", (event) => {
			event.preventDefault();
			this.handleClick();
		});

		this.setPasswordEvents();
		this.setRadioButtonsListeners();
		this.addPhoneMask();
	};
};

export { FormController };
