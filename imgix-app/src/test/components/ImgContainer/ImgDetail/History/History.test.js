import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import History from '../../../../../components/ImgContainer/ImgDetail/History/History'
import { DataContext } from '../../../../../context/DataContext';

describe('History component', () => {
    const removeItem = jest.fn()
    const wrapper = mount(
        <Router>
            <DataContext.Provider value={{ removeItem }} >
                <History />
            </DataContext.Provider>
        </Router>
    );


    it('should be create the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should eject removeItem function', () => {
        const btn = wrapper.find('button');
        btn.simulate('click');

        expect(removeItem).toHaveBeenCalled();
    });

})