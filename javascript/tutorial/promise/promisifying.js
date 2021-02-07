// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout( () => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//             console.log('3 seconds passed');
//             setTimeout(() => {
//                 console.log('4 seconds passed');
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);


const wait = function(seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000 );
    })
};

wait(1).
            then(() => {
                console.log('1 second passed');
                return wait(1);
            }).then(() => {
                console.log('2 seconds passed');
                return wait(1);
            }).then(() => {
                console.log('3 seconds passed');
                return wait(1);
            }).then(() => {
                console.log('4 seconds passed');
                return wait(1);
            });