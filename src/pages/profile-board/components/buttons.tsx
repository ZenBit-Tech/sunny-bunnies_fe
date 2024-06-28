import React from "react";

import { t } from "i18next";

import { BaseButton } from "~/components/index.ts";
import theme from "~/theme.ts";

type FormButtonsProps = {
	isStart: boolean;
	redirectTo?: string;
};

const FormButtons: React.FC<FormButtonsProps> = ({ isStart, redirectTo }) => {
	return (
		<React.Fragment>
			{!isStart && (
				<BaseButton
					sx={{
						border: "1px solid",
						borderRadius: "8px",
						gap: "8px",
						height: "34px",
						padding: "8px 24px",
						textTransform: "none",
						width: "78px",
					}}
					to={redirectTo}
					variant="outlined"
				>
					{t("Form.prev")}
				</BaseButton>
			)}
			<BaseButton
				sx={{
					border: `1px solid ${theme.palette.transparent}`,
					borderRadius: "8px",
					gap: "8px",
					height: "34px",
					padding: "8px 24px",
					textTransform: "none",
					width: "78px",
				}}
				type="submit"
				variant="contained"
			>
				{t("Form.next")}
			</BaseButton>
		</React.Fragment>
	);
};

export { FormButtons };
