const Engineer = require('../lib/engineer');

describe('Engineer', () =>{
    describe('initalValues', () =>{
        it('Should return number as typeOf id', () => {
            let result = new Engineer(8765).id;
            result = typeof result;
            expect(result).toEqual('number');
        });
    });
});