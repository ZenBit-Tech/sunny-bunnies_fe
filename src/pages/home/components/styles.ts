import { Box, Button, ButtonProps, TextField, styled } from "@mui/material";

import { homePageImages } from "~/assets/images/home-page/index.ts";
import { colors, fontWeight } from "~/libs/constants/index.ts";

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

const StyledCategoryCarouselContainer = styled(Box)`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	height: 414px;
	justify-content: flex-start;
	padding: 15px 25px;
	width: 100%;
`;

const StyledCategoriesContainer = styled(Box)`
	align-items: center;
	display: flex;
	gap: 20px;
	justify-content: center;
	width: 100%;
`;

const StyledCategoriesItems = styled(Box)`
	display: flex;
	gap: 30px;
	flex-wrap: nowrap;
	overflow-x: auto;
	justify-content: space-evenly;
	width: 100%;
`;

const StyledCategoryContainer = styled(Box)`
	align-item: center;
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: 240px;
	justify-content: center;
	width: 196px;
`;

const StyledCategoryImage = styled(Box)`
	align-item: center;
	display: flex;
	height: 196px;
	justify-content: center;
	overflow: hidden;
	width: 196px;
`;

const RoundImage = styled("img")`
	border-radius: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

// products

type FilterButtonProps = { selected: boolean } & ButtonProps;

const StyledFilterButton = styled(Button)<FilterButtonProps>(
	({ selected, theme }) => ({
		...theme.typography.dmSans,
		"&:hover": {
			backgroundColor: selected ? colors.pastelGreen : "transparent",
			border: "none",
		},
		backgroundColor: selected ? colors.pastelGreen : "transparent",
		border: "none",
		textTransform: "none",
	}),
);

// newsletter

const StyledNewsletterContainer = styled(Box)({
	alignItems: "center",
	backgroundColor: colors.grayishRed,
	display: "flex",
	flexDirection: "column",
	height: "100%",
	justifyContent: "center",
	width: "100%",
});

const StyledNewsletterContentContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	height: "166px",
	justifyContent: "space-between",
	width: "540px",
});

const StyledNewsletterHeader = styled(Box)({
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	gap: "15px",
	justifyContent: "space-between",
});

const StyledNewsletterForm = styled(Box)({
	alignItems: "center",
	borderBottom: "1px solid black",
	display: "flex",
	height: "52px",
	justifyContent: "center",
	width: "100%",
});

const StyledEmailTextField = styled(TextField)(({ theme }) => ({
	"& .MuiInput-underline:after": {
		borderBottom: "none",
	},
	"& .MuiInput-underline:before": {
		borderBottom: "none",
	},
	"& .MuiInput-underline:hover:not(.Mui-disabled):before": {
		borderBottom: "none",
	},
	"& .MuiInputBase-input::placeholder": {
		...theme.typography.dmSans,
		color: colors.textBlack,
		opacity: 1,
	},
	"& .MuiInputBase-root": {
		border: "none",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			border: "none",
		},
		"&.Mui-focused fieldset": {
			border: "none",
		},
		"&:hover fieldset": {
			border: "none",
		},
	},
	flexGrow: 1,
}));

const StyledSignUpButton = styled(Button)(({ theme }) => ({
	...theme.typography.dmSansBold,
	"&:hover": {
		backgroundColor: "inherit",
	},
	color: colors.textBlack,
	fontWeight: fontWeight.bold,
	textTransform: "none",
}));

export {
	RoundImage,
	StyledCategoriesContainer,
	StyledCategoriesItems,
	StyledCategoryCarouselContainer,
	StyledCategoryContainer,
	StyledCategoryImage,
	StyledEmailTextField,
	StyledFilterButton,
	StyledNewsletterContainer,
	StyledNewsletterContentContainer,
	StyledNewsletterForm,
	StyledNewsletterHeader,
	StyledSignUpButton,
	StyledTopInfoContainer,
	StyledTopInfoTextBlock,
};
