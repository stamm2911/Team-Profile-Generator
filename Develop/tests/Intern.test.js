const Intern = require('../lib/engineer');

describe('Intern', () =>{
    describe('initalValues', () =>{
        it('Should return number as typeOf id', () => {
            let result = new Intern(8765).id;
            result = typeof result;
            expect(result).toEqual('number');
        });
        it('Should return string as typeOf name', () => {
            let result = new Intern(234,'testName').name;
            result = typeof result;
            expect(result).toEqual('string');
        });
        it('Should return string as typeOf email',() =>{{
            let result = new Intern(8765,'testName','testEmail').email;
            result = typeof result;
            expect(result).toEqual('string');
        }});
        it('Should return string as typeOf github username', ()=>{
            let result = new Intern(8765,'testName','testEmail','testGitHub').github;
            result = typeof result;
            expect(result).toEqual('string');
        });
    });
});