import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

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




const Contact = () => {
    return (
      <Section.Container id="home" Background={Background}>
  <form name="contact" method="POST" data-netlify="true">
              <p>
    <label>
Your Name:
{' '}
<input type="text" name="name" />
</label>   
  </p>
              <p>
    <label>
Your Email:
{' '}
<input type="email" name="email" />
</label>
  </p>
              <p>
    <label>
Your Role:
{' '}
<select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select>

    </label>
  </p>
              <p>
    <label>
Message:
{' '}
<textarea name="message"></textarea>
</label>
  </p>
              <p>
    <button type="submit">Send</button>
  </p>
                        </form>
</Section.Container>

    )
}

export default Contact

