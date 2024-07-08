import styled from "@emotion/styled";
import { Box } from "@mui/material";

const UploadContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    border: '2px dashed #cccccc',
    padding: '20px',
    marginBottom: '20px',
    height: '12rem',
    width: '10rem'
});

const Input = styled('input')({
    display: 'none',
});

export { UploadContainer, Input };
