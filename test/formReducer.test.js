import expect from 'expect';
import React from 'react';
import formReducer from '../src/reducers/formReducer';

describe('Reducer' ,()=>{
    const initialState = {
        form: {},
        formDefinitionLoaded: false,
        formDataLoaded: false,
        formLoadedComplete: false,
        formDictionaryLoaded: false,
        formDefinition: [],
        formIsValid: false,
        initFormData:{},
        formData: {},
        formDictionary:{},
        isNewForm: false,
        isSubmitting: false
    };
    it('should return initial state', ()=> {
        expect(formReducer(undefined, {})).toEqual(initialState);
    });
    it('should attach form when type is "ATTACH_FORM"', ()=> {
        const testForm = {field:"testField"};
        initialState.form = testForm;
        const expectState = initialState;
        const actualState = formReducer(undefined, {type: "ATTACH_FORM", payload: testForm});
        expect(actualState).toEqual(expectState);
    });
    //more test put here
});

