const Intern = require('../lib/engineer');

describe('Intern', () =>{
    describe('initalValues', () =>{
        it('Should return number as typeOf id', () => {
            let result = new Intern(8765).id;
            result = typeof result;
            expect(result).toEqual('number');
        });
    });
});