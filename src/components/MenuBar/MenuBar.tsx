import {
  Avatar,
  BellIcon,
  Botside,
  Container,
  EmailIcon,
  ExitIcon,
  FavoriteIcon,
  HomeIcon,
  Logo,
  MenuButton,
  ProfileData,
  ProfileIcon,
  Topside
} from './styles';

import Button from '../Button/Button';
import React from 'react';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo></Logo>

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className='active'>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Gustavo Lata</strong>
          <span>@Gustavo.lata</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;