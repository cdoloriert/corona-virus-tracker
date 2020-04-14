import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Two</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Under Construction</h1>
        <p>Coming soon...</p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
