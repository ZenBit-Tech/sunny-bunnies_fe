import styled from "@emotion/styled";
import { Box, Typography } from '@mui/material';

import theme from '~/theme';

const StyledDescriptionBox = styled(Box)`
    width: 15%;
`;

const TitleTypography = styled(Typography)`
  color: ${theme.palette.primary.main};
  margin-bottom: 8px;
  font-size: ${theme.typography.playfairDisplayBold};
`;

const DescriptionTypography = styled(Typography)`
  color: ${theme.palette.fontGray};
  font-size: ${theme.typography.dmSans};
`;

export { StyledDescriptionBox, TitleTypography, DescriptionTypography };