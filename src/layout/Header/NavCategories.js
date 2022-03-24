import styled from 'styled-components';

const Container = styled.nav`
   border-top: 1px solid #ddd;
   border-bottom: 1px solid #ddd;
   padding: 1rem 0 0;

   ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1%;

      max-width: 1280px;
      margin: 0 auto;

      overflow-y: hidden;
      overflow-x: scroll;

      &::-webkit-scrollbar {
         display: none;
      }
   }
`;

const LiStyled = styled.li`
   min-width: max-content;

   a {
      color: inherit;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 300;
      padding: 0 0.1rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      &::after {
         content: '';
         margin-top: 0.5rem;
         width: 0;
         height: 3px;
         background-color: var(--magenta);
         transition: width 0.3s ease;
      }

      &:hover::after {
         width: 100%;
      }
   }
`;

const CategoriesItem = ({ text }) => {
   return (
      <LiStyled>
         <a href="/">{text}</a>
      </LiStyled>
   );
};

const NavCategories = () => {
   return (
      <Container>
         <ul>
            <CategoriesItem text="Tv, Audio y Video" />
            <CategoriesItem text="Celulares, Notebooks y Tecnología" />
            <CategoriesItem text="Electrodomésticos y Aires Ac." />
            <CategoriesItem text="Hogar, Muebles y Jardín" />
            <CategoriesItem text="Salud, Belleza y Fitness" />
            <CategoriesItem text="Bebé y Niños" />
            <CategoriesItem text="Más categorías" />
         </ul>
      </Container>
   );
};

export default NavCategories;
