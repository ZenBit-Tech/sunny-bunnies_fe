import React from "react";

import { SvgIconProps } from "@mui/material";

import { StyledSvgIcon } from "~/components/Header/styles.ts";

export const ArrowLeftIcon: React.FC = ({ ...props }: SvgIconProps) => {
	return (
		<StyledSvgIcon
			fill="none"
			height="24"
			viewBox="0 0 24 25"
			width="24"
			{...props}
		>
			<g clipPath="url(#clip0_608_32241)">
				<path
					clipRule="evenodd"
					d="M3 12.5C3 12.0858 3.33579 11.75 3.75 11.75H21.21C21.6242 11.75 21.96 12.0858 21.96 12.5C21.96 12.9142 21.6242 13.25 21.21 13.25H3.75C3.33579 13.25 3 12.9142 3 12.5Z"
					fill="#141519"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M10.6847 3.95526C10.9911 4.23402 11.0135 4.70836 10.7347 5.01474L3.97654 12.4427C3.97649 12.4428 3.97643 12.4429 3.97636 12.4429C3.97344 12.4464 3.95996 12.4663 3.95996 12.505C3.95996 12.5438 3.97346 12.5637 3.97637 12.5671C3.97643 12.5672 3.97649 12.5672 3.97654 12.5673L10.7347 19.9953C11.0135 20.3017 10.9911 20.776 10.6847 21.0548C10.3783 21.3335 9.90396 21.3111 9.6252 21.0047L2.86521 13.5747L2.86338 13.5727C2.32549 12.9772 2.32549 12.0328 2.86338 11.4373L2.8652 11.4353L2.86521 11.4353L9.6252 4.00529C9.90396 3.69891 10.3783 3.67651 10.6847 3.95526Z"
					fill="#141519"
					fillRule="evenodd"
				/>
			</g>
			<defs>
				<clipPath id="clip0_608_32241">
					<rect
						fill="white"
						height="24"
						transform="translate(0 0.5)"
						width="24"
					/>
				</clipPath>
			</defs>
		</StyledSvgIcon>
	);
};
