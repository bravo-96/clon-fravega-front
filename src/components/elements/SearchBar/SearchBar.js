import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Container = styled.form`
   border: 1px solid var(--violet);
   border-radius: 5px;
   overflow: hidden;

   display: flex;
   justify-content: space-between;

   input {
      border: none;
      padding: 0.7rem;
      width: 100%;

      &:focus {
         outline: none;
      }
   }

   button {
      border: none;
      background-color: var(--violet);
      padding: 0.7rem 1rem;
      cursor: pointer;
      color: #fff;
   }
`;

const SearchBar = () => {
   return (
      <Container>
         <input type="text" id="search-bar" placeholder="Buscar productos" />
         <button type="submit">
            <FaSearch />
         </button>
      </Container>
   );
};

export default SearchBar;
