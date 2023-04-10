
const newString = require ("./pigLatin");
 
describe ("newString", () => {
    test ("only === onlyway", ()=> {
        expect(newString.translate("only")).toEqual("onlyway")
    });
});