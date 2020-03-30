import React from 'react'
import { Heading, Box } from 'rebass';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);

const sent = () => {
    return (
      <Layout>
        <Section.Container id="404" Background={Background}>
          <Box width={[320, 400, 600]} m="auto">
              <Heading color="primaryDark" fontSize={['9rem', '13rem', '16rem']} />
              <Heading color="secondary" fontSize={['4rem', '5rem', '6rem']}>
              {"Mensagem enviada com sucessso, responderemos em até 24 horas!"}
            </Heading>
            </Box>
        </Section.Container>
      </Layout>
    )
}

export default sent
