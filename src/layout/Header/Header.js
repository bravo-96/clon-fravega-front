import styled from 'styled-components';
import Logo from '../../components/elements/Logo';
import SearchBar from '../../components/elements/SearchBar';
import Btn from './Btn';
import UpperLinks from './UpperLinks';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';
import NavCategories from './NavCategories';

const HeaderContent = styled.div`
   max-width: 1280px;
   margin: 0 auto;
   padding: 1rem;

   display: grid;
   align-items: center;
   grid-template-columns: min-content auto min-content min-content;

   a {
      display: block;
   }

   form {
      width: 100%;
      max-width: 600px;
      justify-self: center;
   }

   & > button:first-of-type {
      margin-right: 1rem;
   }
`;

const Header = () => {
   return (
      <header>
         <UpperLinks />
         <HeaderContent>
            <a href="/">
               <Logo margin="0 1rem 0 0"></Logo>
            </a>
            <SearchBar />
            <Btn icon={<FaRegUserCircle size={'1.5rem'} />} text="Mi cuenta" />
            <Btn icon={<FaShoppingCart size={'1.5rem'} />} />
         </HeaderContent>
         <NavCategories />
      </header>
   );
};

export default Header;
