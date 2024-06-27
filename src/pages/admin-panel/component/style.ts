import {
	Box,
	Button,
	Divider,
	TableCell,
	Typography,
	styled,
} from "@mui/material";
import { Link } from "react-router-dom";

import theme from "~/theme.ts";

type StyledUserBoxProps = {
	gap?: string;
	width?: string;
};

const StyledContainer = styled(Box)({
	backgroundColor: theme.palette.gray,
	height: "100%",
	padding: "30px",
});

const StyledWrapperContainer = styled(Box)({
	backgroundColor: theme.palette.white,
	borderRadius: "10px",
	padding: "24px",
});

const StyledWrapperHeader = styled(Box)({
	alignItems: "center",
	display: "flex",
	justifyContent: "space-between",
	marginBottom: "32px",
});

const StylesSearchBox = styled(Box)({
	border: `1px solid ${theme.palette.gray}`,
	borderRadius: "6px",
	marginBottom: "32px",
	width: "100%",
});

const StyledPaper = styled(Box)({
	alignItems: "center",
	boxShadow: "inherit",
	display: "flex",
	width: "100%",
});

const VerticalDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.gray,
	height: "auto",
	marginLeft: "24px",
	marginRight: "12px",
	width: "1px",
}));

const BoldDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.contentBlack,
	borderRadius: "10px",
	height: "24px",
	marginRight: "12px",
	width: "8px",
}));

const ProductBox = styled(Box)({
	alignItems: "center",
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
});

const StyledLink = styled(Link)(({ theme }) => ({
	"&.active": {
		backgroundColor: theme.palette.lightGreen,
	},
	alignItems: "center",
	backgroundColor: theme.palette.transparent,
	borderRadius: "4px",
	color: theme.palette.black,
	display: "flex",
	height: "48px",
	minWidth: "36px",
	padding: "8px 12px",
	textDecoration: "none",
}));

const CustomTableCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.dmSans,
	fontWeight: theme.fontWeight.medium,
	width: "20%",
}));

const CustomUpperCaseTableCell = styled(TableCell)(({ theme }) => ({
	...theme.typography.playfairDisplayBold,
	cursor: "pointer",
	fontSize: theme.fontSizes.small,
	textTransform: "uppercase",
}));

const StyledSortButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.gray,
	display: "flex",
	gap: "10px",
	padding: "6px 16px",
}));

const StyledUserBox = styled(Box)<StyledUserBoxProps>`
	display: flex;
	flex-direction: column;
	gap: ${(props): null | string => props.gap || null};
	width: ${(props): null | string => props.width || null};
`;

const StyledTitle = styled(Typography)({
	...theme.typography.playfairDisplay,
	marginBottom: "16px",
});

const StyledTitleDmSans = styled(Typography)({
	...theme.typography.dmSans,
});

export {
	BoldDivider,
	CustomTableCell,
	CustomUpperCaseTableCell,
	ProductBox,
	StyledContainer,
	StyledLink,
	StyledPaper,
	StyledSortButton,
	StyledTitle,
	StyledTitleDmSans,
	StyledUserBox,
	StyledWrapperContainer,
	StyledWrapperHeader,
	StylesSearchBox,
	VerticalDivider,
};
