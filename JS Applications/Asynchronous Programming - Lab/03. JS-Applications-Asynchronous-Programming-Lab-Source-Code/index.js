function promisedTimeout(cb, timeInMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                cb();
                resolve();
            } catch (error) {
                reject(error);
            }
        }, timeInMs);
    });
}

promisedTimeout(() => console.log('before time runs out'), 5000)
    .then(() => {
        console.log('Time ran out');
    })
    .catch((error) => {
        console.error(error.message);
    });