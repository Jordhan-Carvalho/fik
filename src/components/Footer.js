import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const FooterContainer = styled.footer`
  padding: 1em;
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
  }
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <span>
        <Text
          mb={2}
          pb={1}
          style={{
            textTransform: 'uppercase',
            borderBottom: 'white 3px solid',
            display: 'table',
          }}
        >
          Todos os Direitos Reservados. © 2020 FiK Soluções Web
        </Text>
      </span>
      <Flex justifyContent="center" alignItems="center">
        <Text m={2} fontSize={4}>
          <span role="img" aria-label="heart">
            📧 carvalho@jordhan.dev - 📱 (77) 99111-6269
          </span>
        </Text>
      </Flex>
    </Fade>
  </FooterContainer>
);

export default Footer;
