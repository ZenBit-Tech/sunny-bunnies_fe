import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledImageContainer = styled(Box)`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`;

const ImageBox = styled(Box)`
    position: relative;
    img {
        height: 12rem;
        width: 10rem;
        border: ${(props: { selected: boolean }) => (props.selected ? '2px solid' : 'none')};
    }
`;

const ImageOverlay = styled(Box)`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const HiddenInput = styled.input`
    display: none;
`;

export {HiddenInput, ImageOverlay, ImageBox, StyledImageContainer};