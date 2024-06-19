import { ChangeEvent } from "react";

const MAX_LENGTH = 4;
const ZERO = 0;
const ONE = 1;
const TWO = 2;

const expireDateChange = (
	event: ChangeEvent<HTMLInputElement>,
	setValue: (
		name: "cardNumber" | "cvvCode" | "expireDate",
		value: string,
	) => void,
): void => {
	const { name, value } = event.target;

	let formattedValue = value.replace(/\D/g, "");

	if (formattedValue.length > MAX_LENGTH) {
		formattedValue = formattedValue.slice(ZERO, MAX_LENGTH);
	}

	const firstDigit = formattedValue.charAt(ZERO);
	const secondDigit = formattedValue.charAt(ONE);

	if (firstDigit !== "0" && firstDigit !== "1") {
		formattedValue = "";
	} else if (firstDigit === "0" && secondDigit && !/[1-9]/.test(secondDigit)) {
		formattedValue = "0" + secondDigit;
	} else if (
		firstDigit === "1" &&
		secondDigit &&
		(parseInt(secondDigit, 10) > TWO || isNaN(parseInt(secondDigit, 10)))
	) {
		formattedValue =
			"1" + (parseInt(secondDigit, 10) <= TWO ? secondDigit : "");
	}

	if (formattedValue.length > TWO) {
		formattedValue =
			formattedValue.slice(ZERO, TWO) + "/" + formattedValue.slice(TWO);
	}

	setValue(name as "cardNumber" | "cvvCode" | "expireDate", formattedValue);
};

export { expireDateChange };
