import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import ImproveImg from '../../../../components/ImgContainer/ImproveImg/ImproveImg'
import { DataContext } from '../../../../context/DataContext';
import { ButtonToolbar } from 'react-bootstrap';

describe('ImproveImg component', () => {
    const addControl = jest.fn();
    const params = {
        "id": 11,
        "name": "Unsharp Mask",
        "alias": "usm",
        "value": 0,
        "min": -100,
        "max": 100
    };

    const wrapper = mount(
        <Router>
            <DataContext.Provider value={{ addControl }} >
                <ImproveImg props={params} />
            </DataContext.Provider>
        </Router>
    );


    it('should be create the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should eject addControl function', () => {
        const btn = wrapper.find('button');
        btn.simulate('click');

        expect(addControl).toHaveBeenCalled();
    });

})