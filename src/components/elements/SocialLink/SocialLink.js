import styled from 'styled-components';

const Container = styled.div`
   background-color: #ccc;
   padding: 0.3rem;
   width: fit-content;
   height: fit-content;
   border-radius: 50%;

   display: flex;
   justify-content: center;
   align-items: center;
`;

const SocialLink = ({ icon }) => {
   return <Container>{icon}</Container>;
};

export default SocialLink;
