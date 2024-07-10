import { Badge, SvgIcon, styled } from "@mui/material";
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
	StyledBadge,
	StyledSvgIcon,
};
