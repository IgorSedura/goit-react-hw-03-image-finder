import { GlobalStyle } from 'GlobalStyles';
import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { AppStyles } from './AppStyles';

export class App extends Component {
  render() {
    return (
      <AppStyles>
        <GlobalStyle />
        <Searchbar />
      </AppStyles>
    );
  }
}
