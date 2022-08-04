import { Body, Container, SearchIcon, SearchInput, SearchWrapper } from './styles';

import FollowSuggestion from '../FollowSuggestion/FollowSuggestion';
import List from '../List/List';
import News from '../News/News';
import React from 'react';
import StickyBox from 'react-sticky-box';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Buscar no Twitter' />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSuggestion
                name="HBO MAX"
                nickname="@hbomax"
              />,
              <FollowSuggestion
                name="Disney+"
                nickname="@disneyplus"
              />,
              <FollowSuggestion
                name="São Paulo FC"
                nickname="@saopaulofc"
              />
            ]}
          />

          <List
            title='Assuntos do momento'
            elements={[
              <News
                title='Para você - Assuntos do momento'
                text='HBO MAX'
              />,
              <News
                title='Internacional - Assuntos do momento'
                text='China'
              />,
              <News
                title='Esporte - Assuntos do momento no Brasil'
                text='Bia Haddad Maia'
              />,
              <News
                title='Futebol - Assuntos do momento no Brasil'
                text='Craque Neto'
              />,
              <News
                title='Internacional - Assuntos do momento'
                text='Pelosi'
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;