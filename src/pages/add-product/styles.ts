import { Box, Grid, styled } from "@mui/material";


const StyledProfileContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.lightGray,
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.white,
    borderRadius: '10px',
    marginTop: '24px',
}));

const StyledContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    width: '80%',
});

const StyledMainGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.gray,
    padding: '3rem',
    width: '100%',
}));

const StyledTabsBox = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: '2rem',
}));

const StyledContentBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.white,
    width: '100%',
}));

export {
    StyledTabsBox,
    StyledMainGrid,
    StyledContainer,
    StyledGrid,
    StyledProfileContainer,
    StyledContentBox
};