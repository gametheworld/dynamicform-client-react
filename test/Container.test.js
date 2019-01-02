import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import {QContainer} from '../src/components/elements/Container';

describe('Components:Container' ,()=>{
    const definition =  {
        "type" : "container",
        "name" : "customer",
        "label" : "testContainer",
        "components" : [
        ]
    };
    it('render the container', ()=> {
        const wrapper = shallow(
            <QContainer definition={definition}/>
        );
        expect(wrapper.length).toEqual(1);
    });
    it('should not update component', ()=> {
        const wrapper = shallow(
            <QContainer definition={definition}/>
        );

        const shouldUpdate = wrapper.instance().shouldComponentUpdate();
        expect(shouldUpdate).toBe(false);
    });
});
