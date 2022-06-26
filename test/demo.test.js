describe('passing test examples', () => {
    test('this test pass', () => {
        let a = 2;
        const b = a * 2;
        console.log(b);
    });

    test('this test pass', () => {
        console.log(22);
    });
});

// describe('falling tests examples',() => {
//     test('this test fail too', () => {
//         throw new Error('error');
//     });
// });