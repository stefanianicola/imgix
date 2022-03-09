import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import ImgContainer from '../../../components/ImgContainer/ImgContainer'
import { DataContext } from '../../../context/DataContext';

describe('ImgContainer component', () => {
    const data = [{
        "url": "https://assets.imgix.net/unsplash/alarmclock.jpg",
        "name": "alarmclock.jpg"
    }]
    const resetUrl = jest.fn();
    const wrapper = mount(
        <Router>
            <DataContext.Provider value={{ data, resetUrl }} >
                <ImgContainer />
            </DataContext.Provider>
        </Router>
    );


    it('should be create the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should eject resetUrl function', () => {
        const link = wrapper.find('a');
        link.simulate('click');

        expect(resetUrl).toHaveBeenCalled();
    });

})