import {
  Avatar,
  Body,
  CommentIcon,
  Container,
  Content,
  Description,
  Dot,
  Header,
  Icons,
  ImageContent,
  LikeIcon,
  RetweetIcon,
  Retweeted,
  Status,
  Twitter
} from './styles';

import React from 'react';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <Twitter />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Gustavo Lata</strong>
            <span>@Gustavo.lata</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description> Foguete não tem ré</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;