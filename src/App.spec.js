import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

describe("[UNIT] Testing the App component", () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  describe("Component validation", () => {    
    it('should render <App />', () => {
			expect(wrapper.length).toBe(1);
    });
    
    it('displays 0 as a default value', () => {
      expect(wrapper.find("h1").text()).toContain("0")    
    })
  
    it('should increase the counter when the button is clicked', () => {
      wrapper.find("button").simulate("click")
      expect(wrapper.find("h1").text()).toContain("1")
    })
  })
})