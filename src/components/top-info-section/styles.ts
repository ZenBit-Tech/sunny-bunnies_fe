import { Box, styled } from "@mui/material";

import { homePageImages } from "~/assets/images/home-page/index.ts";

const StyledTopInfoContainer = styled(Box)`
	align-items: center;
	background-image: url(${homePageImages.backgroundWithBag});
	background-size: cover;
	background-position: center;
	display: flex;
	height: 268px;
	justify-content: center;
	width: 100%;
`;

const StyledTopInfoTextBlock = styled(Box)`
	align-items: center;
	display: flex;
	gap: 10px;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	width: 45%;
`;

export { StyledTopInfoContainer, StyledTopInfoTextBlock };
