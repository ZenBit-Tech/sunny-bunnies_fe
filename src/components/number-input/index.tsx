import * as React from "react";

import {
	Unstable_NumberInput as BaseNumberInput,
	NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
	StyledDecrementButton,
	StyledIncrementButton,
	StyledInput,
	StyledInputRoot,
} from "./styles.ts";

interface CustomNumberInputProps extends Omit<NumberInputProps, "onChange"> {
	onChange: (
		event: React.ChangeEvent<HTMLInputElement>,
		value?: null | number,
	) => void;
	onDecrement: () => void;
	onIncrement: () => void;
	value: number;
}

const NumberInput = React.forwardRef<HTMLDivElement, CustomNumberInputProps>(
	function CustomNumberInput(props, ref) {
		const { onChange, onDecrement, onIncrement, value, ...rest } = props;

		const handleChange = (
			event:
				| React.ChangeEvent<HTMLInputElement>
				| React.FocusEvent<HTMLInputElement>
				| React.KeyboardEvent<Element>
				| React.PointerEvent<Element>,
			value?: null | number,
		): void => {
			if (event.target && event.target instanceof HTMLInputElement) {
				onChange(event as React.ChangeEvent<HTMLInputElement>, value);
			}
		};

		return (
			<BaseNumberInput
				slotProps={{
					input: {
						onChange: handleChange,
						value,
					},
				}}
				slots={{
					decrementButton: (props) => (
						<StyledDecrementButton {...props} onClick={onDecrement}>
							<RemoveIcon fontSize="small" />
						</StyledDecrementButton>
					),
					incrementButton: (props) => (
						<StyledIncrementButton {...props} onClick={onIncrement}>
							<AddIcon fontSize="small" />
						</StyledIncrementButton>
					),
					input: StyledInput,
					root: StyledInputRoot,
				}}
				{...rest}
				ref={ref}
			/>
		);
	},
);

export { NumberInput };
