import { Pagination, styled } from "@mui/material";

const StyledPagination = styled(Pagination)(({ theme }) => ({
	"& .MuiPagination-ul": {
		justifyContent: "right",
	},
	"& .MuiPaginationItem-root": {
		"&.Mui-selected": {
			"&:hover": {
				backgroundColor: theme.palette.primary.dark,
			},
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
		},
		"&.css-1xfvptr-MuiButtonBase-root-MuiPaginationItem-root": {
			fontFamily: theme.typography.playfairDisplay,
		},
		borderRadius: "10px",
		color: theme.palette.text.primary,
		fontFamily: theme.fontFamily.dmSans,
		height: "32px",
		margin: "12px 0",
		width: "32px",
	},
}));

export { StyledPagination };
