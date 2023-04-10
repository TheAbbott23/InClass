


const math = require('./math.js')

describe ('math', () => {

        test ('4-2 =2', ()=> {
            expect( math.subtract(4,2)).toEqual(2);
            expect(math.add(2,2)).toEqual(4);
        });

});
