import { Container, Wrapper } from './styles';

// import MainComponent from '../Main/Main';
import MenuBar from '../MenuBar/MenuBar';
import React from 'react';

// import SideBar from '../SideBar/SideBar';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        {/* <MainComponent />
        <SideBar /> */}
      </Wrapper>
    </Container>
  );
}

export default Layout;