import { Container } from './styles';
import React from 'react';

interface Props {
  title: string;
  text: string;
}

const News: React.FC<Props> = ({title, text}) => {
  return (
    <Container>
      <span>
        {title}
      </span>
      <strong>
        {text}
      </strong>
    </Container>
  );
}

export default News;