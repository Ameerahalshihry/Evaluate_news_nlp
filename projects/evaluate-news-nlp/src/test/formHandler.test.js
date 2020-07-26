import { handleSubmit } from '../client/js/formHandler'

describe('check formHandler', () =>{
    test('formHandler test', () =>{
        expect(handleSubmit).toBeDefined();
    })
})