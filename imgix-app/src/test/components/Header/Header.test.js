import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Header from '../../../components/Header/Header'

describe('Header component', () => {


    const wrapper = shallow(<Header />);
    it('should be create the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

})