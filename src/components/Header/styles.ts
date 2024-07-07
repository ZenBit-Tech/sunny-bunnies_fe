import { Badge, Button, SvgIcon, styled } from "@mui/material";
import { Box } from "@mui/system";

const IconsSection = styled("div")({
	alignItems: "center",
	display: "flex",
	gap: "20px",
});

const ButtonsContainer = styled("div")({
	alignItems: "center",
	display: "flex",
	gap: "9px",
});

const NavHeaderBox = styled(Box)({
	display: "flex",
	gap: "40px",
});

const StyledSvgIcon = styled(SvgIcon)({
	cursor: "pointer",
});

const HeaderLogOutNav = styled(Box)({
	display: "flex",
	paddingLeft: "68px",
});
const HeaderContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.white,
	border: `1px solid ${theme.palette.white}`,
	display: "flex",
	height: "68px",
	justifyContent: "space-between",
	paddingInline: "38px",
}));

const StyledButtonSignUp = styled(Button)(({ theme }) => ({
	"&:hover": {
		backgroundColor: theme.palette.black,
		color: theme.palette.white,
	},
	backgroundColor: theme.palette.white,
	border: `1px solid ${theme.palette.black}`,
	borderRadius: "12px",
	color: theme.palette.black,
	...theme.typography.dmSans,
	fontSize: theme.fontSizes.small,
	fontWeight: theme.fontWeight.medium,
	height: "34px",
	textTransform: "none",
	transition: "background-color 0.3s, color 0.3s",
	width: "77px",
}));

const StyledButtonLogIn = styled(Button)(({ theme }) => ({
	"&:hover": {
		backgroundColor: theme.palette.white,
		color: theme.palette.black,
	},
	backgroundColor: theme.palette.black,
	border: `1px solid ${theme.palette.black}`,
	borderRadius: "12px",
	color: theme.palette.white,
	...theme.typography.dmSans,
	fontSize: theme.fontSizes.small,
	fontWeight: theme.fontWeight.medium,
	height: "34px",
	textTransform: "none",
	transition: "background-color 0.3s, color 0.3s",
	width: "77px",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: theme.palette.black,
		right: 10,
		top: 10,
	},
	color: theme.palette.white,
}));

export {
	ButtonsContainer,
	HeaderContainer,
	HeaderLogOutNav,
	IconsSection,
	NavHeaderBox,
	StyledBadge,
	StyledButtonLogIn,
	StyledButtonSignUp,
	StyledSvgIcon,
};
