import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const UploadContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    border: `3px dashed ${theme.palette.darkGrey}`,
    padding: '20px',
    marginBottom: '20px',
    height: '12rem',
    width: '10rem',
}));

const Input = styled('input')({
    display: 'none',
});

const ErrorSpan = styled('div')(({ theme }) => ({
    color: theme.palette.red,
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.fontGray,
    fontSize: theme.typography.dmSans.fontSize,
}));

export { UploadContainer, Input, ErrorSpan, DescriptionTypography };
