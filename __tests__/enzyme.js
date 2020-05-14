import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // adapter for our version of React
import toJson from 'enzyme-to-json'; // to render components to JSON object
/*
 * use toJson and Enzyme's shallow to get snapshots instead of
 * react-rest-renderer package because it creates snapshots
 * that don't child components so the snapshot is only of a single component
 */
// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
import App from '../client/App';
import LoginContainer from '../client/container/loginContainer';
import MainContainer from '../client/container/MainContainer';
import NavBar from '../client/components/NavBar';
import CodeSnippet from '../client/components/CodeSnippet';
import InputField from '../client/components/InputField';
import Leaderboard from '../client/components/Leaderboard';

// configure adapter
configure({ adapter: new Adapter() });
/* Layout
                                            [App]
                            [MainContainer]             [LoginContainer]
                                <div>                      <div login>
                                <center>                        <div message> 
                                [NavBar]                            <h2>
                                [CodeSnippet]                       <span>
                                <div>                               <div signIn>
                                    [InputField]                    <div signIn>
                                    [Leaderboard]                   <div signIn>
                                </div>                                 
                                                                

 */

// describe React tests
describe('React component unit tests', () => {
  describe('App display', () => {
    /* Expectation for App
    1. if logged in have Main Container
    2. if not logged in have Login Container
  */
    let wrapper;

    it('Renders a <div> tag with classname containers', () => {
      const props = {
        isLoggenIn: false,
      };
      wrapper = shallow(<App {...props} />);
    });
  });
  /* Expectation for Login Container
    1. Render div with className login
    2. div with className login should have one child, a div with className message
    3. div with classname message should have 5 children
    4. ...
  */
  /* Expectation for Main Container
    1. should render a div with className mainContainer
    2. rendiv should have 5 children
    3. ...
  */
});
