// export default {
//     hello() {
//         console.log('Hi')
//     }
// }
function test(a) {
    alert(a + 100);
}

let b = {
    hello() {
        console.log('Hi')
    },
    some(par) {
        test(par);
    }
}


export default b