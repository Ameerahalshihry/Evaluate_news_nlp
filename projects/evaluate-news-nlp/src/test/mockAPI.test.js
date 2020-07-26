import json from '../server/mockAPI'

describe('check mockAPI', () =>{
    test('test mockAPI',()=>{ 
        expect(json).toBeDefined();
    })
})