import { SvgIconProps } from "@mui/material";
import React from "react";

import { StyledSvgIcon } from "~/components/Header/styles.ts";

export const UserIcon: React.FC = ({ ...props }: SvgIconProps) => {
	return (
		<StyledSvgIcon
			fill="none"
			height="24"
			viewBox="0 0 17 21"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M8.5 0.25C5.87665 0.25 3.75 2.37665 3.75 5C3.75 7.62335 5.87665 9.75 8.5 9.75C11.1234 9.75 13.25 7.62335 13.25 5C13.25 2.37665 11.1234 0.25 8.5 0.25ZM5.25 5C5.25 3.20507 6.70507 1.75 8.5 1.75C10.2949 1.75 11.75 3.20507 11.75 5C11.75 6.79493 10.2949 8.25 8.5 8.25C6.70507 8.25 5.25 6.79493 5.25 5Z"
				fill="#323232"
				fillRule="evenodd"
			/>
			<path
				clipRule="evenodd"
				d="M8.5 11.25C6.46067 11.25 4.57752 11.7208 3.17815 12.5204C1.8 13.3079 0.75 14.5101 0.75 16C0.75 17.4899 1.8 18.6921 3.17815 19.4796C4.57752 20.2792 6.46067 20.75 8.5 20.75C10.5393 20.75 12.4225 20.2792 13.8219 19.4796C15.2 18.6921 16.25 17.4899 16.25 16C16.25 14.5101 15.2 13.3079 13.8219 12.5204C12.4225 11.7208 10.5393 11.25 8.5 11.25ZM2.25 16C2.25 15.2807 2.76701 14.483 3.92236 13.8228C5.05649 13.1747 6.67334 12.75 8.5 12.75C10.3267 12.75 11.9435 13.1747 13.0776 13.8228C14.233 14.483 14.75 15.2807 14.75 16C14.75 16.7193 14.233 17.517 13.0776 18.1772C11.9435 18.8253 10.3267 19.25 8.5 19.25C6.67334 19.25 5.05649 18.8253 3.92236 18.1772C2.76701 17.517 2.25 16.7193 2.25 16Z"
				fill="#323232"
				fillRule="evenodd"
			/>
		</StyledSvgIcon>
	);
};
