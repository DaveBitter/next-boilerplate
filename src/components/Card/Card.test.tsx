// Libs
import React from 'react';
import Card from './Card';
import { mount } from 'enzyme';

// Test constants

// Component test setup
const setup = (props: any) => {
    const _props = {
        ...props
    };

    const wrapper = mount(<Card {..._props} />);

    return {
        _props,
        wrapper
    };
};

// Test scenarios
describe('<Card />', () => {
    it('should mount', () => {
        const { wrapper } = setup({
        });

        expect(wrapper.childAt(0).exists());
    });
});
