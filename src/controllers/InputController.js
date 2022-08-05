import { Input } from "../models/Input.js";

const InputController = class InputController {
	constructor(element) {
		this._input = new Input(element);
	}

	get input() {
		return this._input;
	}

	checkIsEmpty = () => {
		if (!this.input.value && !this.input.element.disabled) {
			this.input.createElementError("- Este campo não pode ficar vazio");
		}
	};

	isValid = () => {
		this.input.valid = this.checkIsEmpty();

		switch (this.input.element.name.toUpperCase()) {
			case "NAME":
				this.input.valid = this.nameIsValid();
				break;
			case "EMAIL":
				this.input.valid = this.emailIsValid();
				break;
			case "SITE":
				this.input.valid = this.siteIsValid();
				break;
			case "PHONE":
				this.input.valid = this.phoneIsValid();
				break;
			case "PASSWORD":
				this.input.valid = this.passwordIsValid();
				break;
			default:
				return;
		}

		return this.valid;
	};

	nameIsValid = () => {
		const nameRegex = new RegExp(/[0-9]/);
		if (nameRegex.test(this.input.value)) {
			this.input.createElementError("- Digite apenas letras");
			return false;
		}

		return true;
	};

	emailIsValid = () => {
		const emailRegex = new RegExp(/\S+@\S+\.\S+/);

		if (!emailRegex.test(this.input.value)) {
			this.input.createElementError("- Digite um email válido");
			return false;
		}

		return true;
	};

	phoneIsValid = () => {
		const phoneRegex = new RegExp(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g);

		if (!phoneRegex.test(this.input.value)) {
			this.input.createElementError(
				"Digite um número de telefone inválido"
			);
			return false;
		}

		return true;
	};

	siteIsValid = () => {
		if (!this.input.element.disabled) {
			const siteRegex = new RegExp(
				/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
			);
			if (!siteRegex.test(this.input.value)) {
				this.input.createElementError(
					"- Digite um endereço válido e que comece com `www`"
				);
				return false;
			}
		}

		return true;
	};

	passwordIsValid = () => {
		const passwordRegex = new RegExp(
			/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,})$/
		);

		if (
			!passwordRegex.test(this.input.value) ||
			this.input.value.length > 10
		) {
			this.input.createElementError(
				"- Sua senha deve conter: no mínimo 6 caracteres; máximo 10 caracteres; uma letra maiúscula; uma letra minúscula e um número"
			);
			return false;
		}

		return true;
	};
};

export { InputController };
