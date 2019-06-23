import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import {createShallow} from '@material-ui/core/test-utils';

Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
  let shallow;
  
  beforeEach(() => {
    shallow = createShallow();
  });
  
  it('renders without crashing', () => {
    const wrapper = shallow(<App/>);
  })
});

