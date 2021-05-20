const Engineer = require('../lib/engineer');

describe('Engineer', () =>{
    describe('initalValues', () =>{
        it('Should return number as typeOf id', () => {
            let result = new Engineer(8765,'testName').id;
            result = typeof result;
            expect(result).toEqual('number');
        });
        it('Should return string as typeOf name', () => {
            let result = new Engineer(234,'testName').name;
            result = typeof result;
            expect(result).toEqual('string');
        });
        it('Should return string as typeOf email',() =>{{
            let result = new Engineer(8765,'testName','testEmail').email;
            result = typeof result;
            expect(result).toEqual('string');
        }});
        it('Should return string as typeOf github username', ()=>{
            let result = new Engineer(8765,'testName','testEmail','testGitHub').github;
            result = typeof result;
            expect(result).toEqual('string');
        });
    });
});