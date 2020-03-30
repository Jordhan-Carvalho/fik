import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Flex, Box } from 'rebass';
import styled from 'styled-components';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

import Posts from '../posts';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Post = ({ title, text, image, url, date, wtime }) => (
  <Card onClick={() => window.open(url, '_blank')} pb={4}>
    <EllipsisHeading m={3} p={1}>
      {title}
    </EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3}>{text}</Text>
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {`${date} - ${Math.ceil(wtime)} min`}
    </ImageSubtitle>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  wtime: PropTypes.number.isRequired,
};

const MorePosts = () => (
  <Card onClick={() => window.open(`https://jordhan.dev/blog`, '_blank')} p={4}>
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      style={{ height: '100%' }}
    >
      <Box>
        <EllipsisHeading fontSize={5} my={2}>
          Opa! &nbsp;
          <span role="img" aria-label="party">
            🎉
          </span>
        </EllipsisHeading>
        <Heading lineHeight={1.5}>
          Parece que temos mais blogs no
          <Text color="secondary">Jordhan.Dev</Text>
        </Heading>
      </Box>
      <Heading color="primary" mt={5} textAlign="right">
        Visitar Blog &nbsp;
        <FontAwesomeIcon name="arrow-right" aria-label="Go to Blog" />
      </Heading>
    </Flex>
  </Card>
);

const Writing = () => {
  let allPosts = Posts;
  if (Posts.length > 7) {
    allPosts = Posts.filter((post, index) => index < 7);
  }

  return (
    <Section.Container id="posts" Background={Background}>
      <Section.Header name="Posts" icon="✍️" label="posts" />
      <CardContainer minWidth="300px">
        {allPosts.map(post => Post(post))}
        {Posts.length > 7 ? MorePosts() : null}
      </CardContainer>
    </Section.Container>
  );
};

export default Writing;
