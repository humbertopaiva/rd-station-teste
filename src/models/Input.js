import { ElementHTML } from "./ElementHTML.js";

const Input = class Input extends ElementHTML {
	constructor(element) {
		super(element);

		this._valid = true;
	}

	get valid() {
		return this._valid;
	}

	set valid(boolean) {
		this._valid = boolean;
	}

	// checkIsEmpty = () => {
	// 	if (!this.element.value && !this.element.disabled) {
	// 		this.createElementError("- Este campo não pode ficar vazio");
	// 	}
	// };

	// IsValid = () => {
	// 	this.valid = this.checkIsEmpty();

	// 	switch (this.element.name.toUpperCase()) {
	// 		case "NAME":
	// 			this.valid = this.nameIsValid();
	// 			break;
	// 		case "EMAIL":
	// 			this.valid = this.emailIsValid();
	// 			break;
	// 		case "SITE":
	// 			this.valid = this.siteIsValid();
	// 			break;
	// 		case "PHONE":
	// 			this.valid = this.phoneIsValid();
	// 			break;
	// 		case "PASSWORD":
	// 			this.valid = this.passwordIsValid();
	// 			break;
	// 		default:
	// 			return;
	// 	}

	// 	return this.valid;
	// };

	// changeVisible = () => {
	// 	if (this.element.type === "password") {
	// 		this.element.type = "text";
	// 		return;
	// 	}

	// 	if (this.element.type === "text") {
	// 		this.element.type = "password";
	// 		return;
	// 	}
	// };

	//NAME VALIDATION

	// nameIsValid = () => {
	// 	const nameRegex = new RegExp(/[0-9]/);
	// 	if (nameRegex.test(this.element.value)) {
	// 		this.createElementError("- Digite apenas letras");
	// 		return false;
	// 	}

	// 	return true;
	// };

	//EMAIL VALIDATION

	// emailIsValid = () => {
	// 	const emailRegex = new RegExp(/\S+@\S+\.\S+/);

	// 	if (!emailRegex.test(this.element.value)) {
	// 		this.createElementError("- Digite um email válido");
	// 		return false;
	// 	}

	// 	return true;
	// };

	// PHONE IS VALID

	// phoneIsValid = () => {
	// 	const phoneRegex = new RegExp(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g);

	// 	if (!phoneRegex.test(this.element.value)) {
	// 		this.createElementError("Digite um número de telefone inválido");
	// 		return false;
	// 	}

	// 	return true;
	// };

	//SITE VALIDATION

	// siteIsValid = () => {
	// 	if (!this.element.disabled) {
	// 		const siteRegex = new RegExp(
	// 			/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
	// 		);
	// 		if (!siteRegex.test(this.element.value)) {
	// 			this.createElementError(
	// 				"- Digite um endereço válido e que comece com `www`"
	// 			);
	// 			return false;
	// 		}
	// 	}

	// 	return true;
	// };

	//PASSWORD VALIDATION

	// passwordIsValid = () => {
	// 	const passwordRegex = new RegExp(
	// 		/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{10,})$/
	// 	);
	// 	console.log("Senha", this.element.value);
	// 	if (
	// 		passwordRegex.test(this.element.value) ||
	// 		this.element.value.length < 6
	// 	) {
	// 		this.createElementError(
	// 			"- Sua senha deve conter: no mínimo 6 caracteres; máximo 10 caracteres; uma letra maiúscula; uma letra minúscula e um número"
	// 		);
	// 		return false;
	// 	}

	// 	return true;
	// };
};

export { Input };
