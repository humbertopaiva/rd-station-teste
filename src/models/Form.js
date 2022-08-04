const Form = class From {
	constructor() {
		this._form = document.getElementById("rd-form");
		this._formInputs = Array.from(
			document.querySelectorAll(".rd-form__input")
		);
		this._button = document.getElementById("rd-form__button");
		// this.events();
	}

	get form() {
		return this._form;
	}

	get formInputs() {
		return this._formInputs;
	}

	handleClick = () => {};

	nameValidate = () => {
		return true;
	};

	emailValidate = () => {
		const email = document.getElementById("rd-form__email");
		const emailRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		return emailRegex.test(email.value);
	};

	phoneValidate = () => {
		return true;
	};

	phoneMask = () => {
		//add mask to phone input
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

	jobValidate = () => {
		return true;
	};

	passwordValidate = () => {
		return true;
	};

	siteValidate = () => {
		return true;
	};

	validForm = () => {
		return (
			this.nameValidate() &&
			this.emailValidate() &&
			this.phoneValidate() &&
			this.jobValidate() &&
			this.passwordValidate() &&
			this.siteValidate()
		);
	};

	events = () => {
		window.onload = () => {
			//add click event to button
			this._button.addEventListener("click", (event) => {
				event.preventDefault();
				console.log(this.validForm());
			});

			this.phoneMask();
		};
	};
};

export { Form };
