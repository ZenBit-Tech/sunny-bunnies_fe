import React from "react";

import { t } from "i18next";

import { StyledButton } from "./styles.ts";

type FormButtonsProps = {
	handleNext?: () => void;
	isStart: boolean;
	redirectTo?: string;
};

const FormButtons: React.FC<FormButtonsProps> = ({
	handleNext,
	isStart,
	redirectTo,
}) => {
	return (
		<React.Fragment>
			{!isStart && (
				<StyledButton to={redirectTo} variant="outlined">
					{t("Form.prev")}
				</StyledButton>
			)}
			<StyledButton
				onClick={handleNext}
				type={handleNext ? "button" : "submit"}
				variant="contained"
			>
				{t("Form.next")}
			</StyledButton>
		</React.Fragment>
	);
};

export { FormButtons };
