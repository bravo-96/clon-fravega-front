import styled from 'styled-components';
import { fravegaLogo } from '../../constants/images';

const width = '163px';
const height = '25px';

const LogoContainer = styled.span`
   background-image: url(${fravegaLogo});
   background-repeat: no-repeat;
   background-size: contain;
   min-width: ${width};
   min-height: ${height};

   ${({ margin }) => margin && `margin: ${margin};`}
`;

const Logo = ({ margin }) => {
   return <LogoContainer margin={margin} />;
};

export default Logo;
