import { ChangeEvent } from "react";

const ZERO = 0;
const MAX_SIZE = 16;

const cardNumberChange = (
	event: ChangeEvent<HTMLInputElement>,
	setValue: (
		name: "cardNumber" | "cvvCode" | "expireDate",
		value: string,
	) => void,
): void => {
	const { name, value } = event.target;

	const cleanedValue = value.replace(/[^\d]/g, "");

	const limitedValue = cleanedValue.slice(ZERO, MAX_SIZE);

	const formattedValue = limitedValue.match(/.{1,4}/g)?.join(" ") || "";

	setValue(name as "cardNumber" | "cvvCode" | "expireDate", formattedValue);
};

export { cardNumberChange };
