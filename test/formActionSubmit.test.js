/**
 * Created by KangYe on 2017/7/21.
 */
import expect from 'expect';
import {submittingForm} from '../src/actions/formAction';

describe('Submit',()=>{
    const formData={submitDataSrc:'http://www.baidu.com'};
    function onSubmit(){return 'onSubmit';};
    function beforeSubmit(){return 'beforeSubmit';};
    function onSuccess(){return 'onSuccess';};
    function onError(){return 'onError';};
    const props={
        beforeSubmit:beforeSubmit,
        onSuccess:onSuccess,
        onError:onError,
    }
    // it('',()=>{
    //     const result=submittingForm(formData,props);
    //     console.log('___________',result);
    // });

});