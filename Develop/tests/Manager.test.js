const Manager = require('../lib/manager');

describe('Manager', () =>{
    describe('initalValues', () =>{
        it('Should return number as typeOf id', () => {
            let result = new Manager(8765).id;
            result = typeof result;
            expect(result).toEqual('number');
        });
    });
});