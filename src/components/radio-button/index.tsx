import Radio, { RadioProps } from "@mui/material/Radio";
import React from "react";

import { CustomCheckedIcon, CustomIcon } from "./styles.ts";

const CustomRadioButton: React.FC<RadioProps> = (props) => {
	return (
		<Radio
			checkedIcon={<CustomCheckedIcon />}
			color="default"
			disableRipple
			icon={<CustomIcon />}
			{...props}
		/>
	);
};

export { CustomRadioButton };
