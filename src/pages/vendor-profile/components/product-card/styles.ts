import { Box, IconButton, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

const StyledProductCardContainer = styled(Box)`
	align-item: flex-start;
	box-shadow: 4px 4px 24px 0px #0000000a;
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 180px;
`;

const StyledProductCardImageContainer = styled(Box)`
	border: 1px solid ${colors.lightGray};
	height: 183px;
	position: relative;
	width: 100%;
`;

const StyledProductCardDataContainer = styled(Box)`
	display: flex;
	justify-content: space-between;
	position: relative;
`;

const StyledProductCardDataContent = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const StyledProductCardImage = styled("img")`
	height: 100%;
	width: 100%;
`;

const StyledLikeIconButton = styled(IconButton)(() => ({
	"& .MuiTouchRipple-root": {
		display: "none",
	},
	"&:hover, &:focus": {
		background: "none",
		boxShadow: "none",
		color: colors.black,
		outline: "none",
	},
	color: `${colors.black}`,
	position: "absolute",
	right: "5px",
	top: "5px",
}));

const StyledShopIconButton = styled(IconButton)`
	bottom: 8px;
	color: ${colors.black};
	height: 30px;
	padding: 0;
	position: absolute;
	right: 8px;
	width: 30px;
`;

export {
	StyledLikeIconButton,
	StyledProductCardContainer,
	StyledProductCardDataContainer,
	StyledProductCardDataContent,
	StyledProductCardImage,
	StyledProductCardImageContainer,
	StyledShopIconButton,
};
