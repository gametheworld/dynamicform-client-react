/**
 * Created by KangYe on 2017/7/19.
 */
import expect from 'expect';
import React from 'react';
import {getIsCascadeElement} from '../src/utility/common';

describe('Reducer',()=> {
    it('默认传递空值，返回false', ()=> {
        expect(getIsCascadeElement({}, {}, [])).toBe(false);
    });
    it ('规则为空，返回false', ()=> {
            const nextForm = {selectabc: 'relationshipRelMat'};
            const currentForm = {selectabc: 'relationshipRelMat'};
            const conditionMap = [];
            const actualResult=getIsCascadeElement(nextForm, currentForm, conditionMap);
            expect(actualResult).toBe(false);
        });
    it ('目标源当前的值和即将改变的值不相等，返回true', ()=> {
        const nextForm = {selectabc: 'relationshipRelMat'};
        const currentForm = {selectabc: 'relationshipRelMab'};
        const conditionMap = [{
            'action' : 'disabled',
            'actionValue' : true,
            'value' : 'relationshipRelMat',
            'how' : 'equal',
            'whichcontrol' : 'selectabc'
        }];
        const actualResult=getIsCascadeElement(nextForm, currentForm, conditionMap);
        expect(actualResult).toBe(true);
    });
    it ('目标源不在当前Form中，返回false', ()=> {
        const nextForm = {selectabc: 'relationshipRelMat'};
        const currentForm = {selectabc: 'relationshipRelMat'};
        const conditionMap = [{
            'action' : 'disabled',
            'actionValue' : true,
            'value' : 'relationshipRelMat',
            'how' : 'equal',
            'whichcontrol' : 'selectabc1'
        }];
        const actualResult=getIsCascadeElement(nextForm, currentForm, conditionMap);
        expect(actualResult).toBe(false);
    });

});











