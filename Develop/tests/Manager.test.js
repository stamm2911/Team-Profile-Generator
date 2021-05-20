const Manager = require('../lib/manager');

describe('Manager', () =>{
    describe('initalValues', () =>{
        it('Should return number as typeOf id', () => {
            let result = new Manager(8765).id;
            result = typeof result;
            expect(result).toEqual('number');
        });
        it('Should return string as typeOf name', () => {
            let result = new Manager(1234,'testName').name;
            result = typeof result;
            expect(result).toEqual('string');
        });
        it('Should return string as typeOf email',() =>{{
            let result = new Manager(234,'testName','testEmail').email;
            result = typeof result;
            expect(result).toEqual('string');
        }});
        it('Should return number as typeOf officeNumber', ()=>{
            let result = new Manager(2345,'testName','testEmail', 420).officeNumber;
            result = typeof result;
            expect(result).toEqual('number');
        });
    });
});