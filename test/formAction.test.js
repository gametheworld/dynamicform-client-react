import expect from 'expect';
import * as actions from '../src/actions/formAction';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action' ,()=>{
    const store = mockStore();
    it('should attach form' , ()=> {
        const form = { field: "test"};
        const expectAction = {
            type: 'ATTACH_FORM',
            payload: form
        };
        store.dispatch(actions.attachForm(form));
        expect(store.getActions()).toInclude(expectAction);
    })
});
