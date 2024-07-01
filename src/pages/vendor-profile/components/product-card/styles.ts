import { Box, IconButton, styled } from "@mui/material";

import { colors } from "~/libs/constants/index.ts";

type SliderDotProps = {
	active: boolean;
};

const StyledProductCardContainer = styled(Box)`
	align-item: flex-start;
	border-radius: 12px;
	box-shadow: 4px 4px 24px 0px ${colors.cardBoxShadow};
	display: flex;
	flex-direction: column;
	cursor: pointer;
	width: 200px;
`;

const StyledProductCardImageContainer = styled(Box)`
	border: 1px solid ${colors.lightGray};
	border-radius: 12px 12px 0 0;
	height: 183px;
	overflow: hidden;
	position: relative;
	width: 100%;
`;

const ImageSlider = styled(Box)(() => ({
	bottom: "10px",
	display: "flex",
	gap: "5px",
	left: "50%",
	position: "absolute",
	transform: "translateX(-50%)",
}));

const SliderDot = styled(Box)<SliderDotProps>(({ active, theme }) => ({
	backgroundColor: active ? theme.palette.primary.main : theme.palette.darkGrey,
	borderRadius: "2px",
	cursor: "pointer",
	height: "3.87px",
	width: active ? "18px" : "9px",
}));

const StyledProductCardDataContainer = styled(Box)`
	display: flex;
	justify-content: space-between;
	position: relative;
`;

const StyledProductCardDataContent = styled(Box)`
	border-radius: 0 0 12px 12px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 8px;
`;

const StyledProductCardImage = styled("img")`
	border-radius: 12px 12px 0 0;
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
	ImageSlider,
	SliderDot,
	StyledLikeIconButton,
	StyledProductCardContainer,
	StyledProductCardDataContainer,
	StyledProductCardDataContent,
	StyledProductCardImage,
	StyledProductCardImageContainer,
	StyledShopIconButton,
};
