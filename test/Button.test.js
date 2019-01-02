import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import {QButton} from '../src/components/elements/Button';

describe('Components:Button' ,()=>{
    it('render the button', ()=> {
        const definition = {
            "type" : "button",
            "action" : "submit",
            "label" : "提交",
            "style" : "success"
        };
        const wrapper = shallow(
            <QButton definition={definition}/>
            );
        expect(wrapper.length).toEqual(1);
    });
});
