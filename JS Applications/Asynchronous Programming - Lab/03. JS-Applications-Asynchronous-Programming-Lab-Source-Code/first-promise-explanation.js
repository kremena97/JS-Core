const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const finished = true;
        try {
            console.log('I took 2 seconds to come to live');
            resolve(finished);
        } catch (error) {
            reject(error);
        }
    }, 2000);
});

alert('Hey I don\'t care about the promises');

myPromise
    .then((hasFinished) => {
        if (hasFinished) {
            console.log('Promise seems to have been fullfilled');
        }

        console.log('I was logged after the other log');
    })
    .catch((error) => {
        alert(error.message);
    });