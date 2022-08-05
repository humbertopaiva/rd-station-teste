import { Select } from "../models/Select.js";

const SelectController = class SelectController {
	constructor(element) {
		this._select = new Select(element);
	}

	get select() {
		return this._select;
	}
};

export { SelectController };
