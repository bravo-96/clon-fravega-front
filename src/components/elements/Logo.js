import styled from 'styled-components';
import { fravegaLogo } from '../../constants/images';

const width = '163px';
const height = '25px';

export const LogoContainer = styled.div`
   background-image: url(${fravegaLogo});
   background-repeat: no-repeat;
   background-size: contain;
   min-width: ${width};
   min-height: ${height};

   ${({ margin }) => margin && `margin: ${margin};`}

   ${({ sc }) => sc && `${sc}`}
`;

export default LogoContainer;
