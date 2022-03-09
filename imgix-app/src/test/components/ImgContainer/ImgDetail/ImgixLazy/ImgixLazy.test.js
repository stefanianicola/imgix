import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import ImgixLazy from '../../../../../components/ImgContainer/ImgDetail/ImgixLazy/ImgixLazy'
import { DataContext } from '../../../../../context/DataContext';

describe('ImgixLazy component', () => {
    const urlImg = "https://assets.imgix.net/unsplash/";
    const url = "exp=11&";
    const wrapper = mount(
        <Router>
            <DataContext.Provider value={{ urlImg, url }} >
                <ImgixLazy />
            </DataContext.Provider>
        </Router>
    );


    it('should be create the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

})