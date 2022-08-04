import {
  Avatar,
  Banner,
  CakeIcon,
  Container,
  EditButton,
  Followage,
  Location,
  ProfileData
} from './styles';

import Feed from '../Feed/Feed';
import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Gustavo Lata</h1>
        <h2>@gustavo.lata</h2>

        <p>Developer at <a href="https:/twittercom">@PauloGustavoLatta</a> </p>

        <ul>
          <li>
            <Location />
            Florianópolis, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 05 de junho de 2000
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;