import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';
import Writing from '../sections/Writing';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Contact />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;
