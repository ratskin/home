import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectExamples from './pages/ProjectExamples';

class App extends React.Component {
  static propTypes = {
    // showLoader: PropTypes.func.isRequired,
    hideLoader: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.sayHi();
  }

  componentDidMount() {
    const { hideLoader } = this.props;
    hideLoader();
  }

  sayHi = () => {
    console.log(
      '%c Designed and developed by Elliot "Ratskin" Schep\t\n > Site: https://ratsk.in/home\t\t\t\t\t\t\n > Github: https://github.com/ratskin/home\t\t\t%c\n',
      'background: black; padding:5px; font-size: 10px; color: #ffffff',
      '',
    );
  }

  render() {
    return (
      <>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/"
          component={About}
        />
        <Route
          path="/"
          component={Projects}
        />
        <Route
          path="/"
          component={ProjectExamples}
        />
      </>
    );
  }
}

export default App;
