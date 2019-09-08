import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { GlobalStyle, theme } from './shared-ui';
import AppRouter from './AppRouter';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <AppRouter />
      </Fragment>
    </ThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));