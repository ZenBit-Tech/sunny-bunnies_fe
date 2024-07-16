import { styled } from "@mui/material/styles";

const StyledInputRoot = styled("div")(
	({ theme }) => `
  display: flex;
  align-items: center;
  border: 1px solid ${theme.palette.darkGrey};
  border-radius: 0.3rem;
  width: 100%;
`,
);

const StyledInput = styled("input")(({ theme }) => ({
	...theme.typography.dmSans,
	outline: "none",
	textAlign: "center",
	width: "100%",
}));

const StyledButton = styled("button")(
	() => `
  box-sizing: border-box;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3.4rem;
  padding: 0;
  cursor: pointer;
`,
);

const StyledIncrementButton = styled(StyledButton)`
	order: 2;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
`;

const StyledDecrementButton = styled(StyledButton)`
	order: 0;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
`;

export {
	StyledButton,
	StyledDecrementButton,
	StyledIncrementButton,
	StyledInput,
	StyledInputRoot,
};
