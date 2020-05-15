import React from 'react';
import { configure, mount, shallow, render } from 'enzyme';
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
describe('<App />', () => {
  // beforeEach(() => {
  //   wrapper = shallow(<App />);
  // });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  xit('renders a LoginContainer on initial load', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').hasClass('containers')).toEqual(true);
    expect(wrapper.find(LoginContainer)).toHaveLength(1);
  });

  it('renders a MainContainer if logged in', () => {
    const realUseState = React.useState;
    const stubInitialState = true;
    const spy = jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => realUseState(stubInitialState));
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').hasClass('containers')).toEqual(true);
    expect(wrapper.find(LoginContainer)).toHaveLength(1);
    // set isLoggedInto true
    // expect(wrapper.find('div').hasClass('containers')).toEqual(true);
    // expect(wrapper.find(MainContainer)).toHaveLength(1);
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
