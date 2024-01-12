let arr = [1, 2, 3, 4];

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arr);
    }, 3000);
}).then((arr) => {
    let newArr = arr.filter((el) => el % 2 !== 0);
    return new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById('output').textContent = newArr;
            resolve(arr);
        }, 1000);
    });
}).then((arr) => {
    let newArr = arr.map((el) => (el % 2 === 0 ? el * 2 : el));
    return new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById('output').textContent = newArr;
            resolve(arr);
        }, 2000);
    });
});


