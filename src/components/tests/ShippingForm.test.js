import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {createShallow} from '@material-ui/core/test-utils';
import ShippingForm from "../ShippingForm";

Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
  let shallow;
  
  beforeEach(() => {
    shallow = createShallow();
  });
  
  it('renders without crashing', () => {
    const wrapper = shallow(<ShippingForm/>);
  })
  
  it('calls handleSubmit when submit button is clicked', () => {
    const wrapper = shallow(<ShippingForm/>);
    
  })
});
