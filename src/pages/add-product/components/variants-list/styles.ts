import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormContainer = styled(Box)`
	align-items: center;
	justify-content: center;
	display: flex;
	gap: 40px;
	padding: 24px;
	width: 100%;
`;

const ItemRow = styled("div")`
	display: grid;
	grid-template-columns: 30% 30% 30% 10%;
	justify-content: space-between;
	align-items: center;
`;

const ItemColumn = styled("div")(({ theme }) => ({
	...theme.typography.dmSans,
	color: theme.palette.black,
	marginBottom: "1rem",
	marginLeft: "2rem",
}));

export { ItemColumn, ItemRow, StyledFormContainer };
