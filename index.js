function makeId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 50; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


module.exports = function () {
    const chance = Math.floor(Math.random() * 100);

    if (chance > 66) {
        //unit tests

        for (let i = 0; i < (Math.floor(Math.random() * 500)); i++) {
            const color = (Math.random() > 0.5) ? "\x1b[42m%s\x1b[0m" : "\x1b[41m%s\x1b[0m";
            console.log(color, `\nTest ${i}: ${Math.floor(Math.random() * 20)} ms`);
        }

    } else if ((chance > 33 && chance < 66)) {
        //network mapping
        const times = Math.floor(Math.random() * 30);
        for (let i = 0; i < times; i++) {
            let ip1 = Math.floor(Math.random() * 200);
            while (ip1 < 100) ip1 = Math.floor(Math.random() * 200);
            let ip2 = Math.floor(Math.random() * 200);
            while (ip2 < 100) ip2 = Math.floor(Math.random() * 200);
            const ip3 = Math.floor(Math.random() * 9);
            const ip4 = Math.floor(Math.random() * 20);


            console.log(`Pinging ${ip1}.${ip2}.${ip3}.${ip4}...\n ${Math.floor(Math.random() * 100)}ms ping \n Data received: ${makeId()}`);
        }
    } else {
        //buncho errors
        throw new Error('MEMORY INITIALIZATION FAILED');
    }
};
