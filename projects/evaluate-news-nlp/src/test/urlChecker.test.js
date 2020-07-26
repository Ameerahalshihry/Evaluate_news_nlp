import { checkForUrl } from '../client/js/urlChecker'

describe('check the user input if it is URL or not ', () =>{
    test('it should be true if the checkForUrl is defined', () =>{
        expect(checkForUrl).toBeDefined()
    })
})