"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_10_pt1());
    console.log(solve_dec_10_pt2());
};

module.exports = {
    start
};


const solve_dec_10_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec10.txt', 'utf8');
        const lines = data.split('\n');
        let cycle = 1;
        let x = 1;
        let signal = 0;
        for(let line of lines) {
            if (line.startsWith('noop')) {
                if ((cycle - 20) % 40 === 0) {
                    console.log(cycle + ": " + (x * cycle));
                    signal += (x * cycle);
                }
                cycle += 1;
                // console.log("After Cycle " + cycle + ": " + x);
            } else {
                let value = parseInt(line.split(' ')[1]);
                for(let i = 0; i < 2; i++){
                    if ((cycle - 20) % 40 === 0) {
                        console.log(cycle + ": " + (x * cycle));
                        signal += (x * cycle);
                    }
                    cycle += 1;
                    // console.log("After Cycle " + cycle + ": " + x);
                }
                x += value;
            }
        }

        return signal;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}


const solve_dec_10_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec10.txt', 'utf8');
        const lines = data.split('\n');
        let cycle = 1;
        let x = 1;
        let image = [];
        let row = '';
        for(let line of lines) {
            if (line.startsWith('noop')) {
                console.log("Cycle: " + cycle + ", " + x);
                let variance = x - ((cycle - 1 ) % 40);
                if (variance === 1 || variance === 0 || variance === -1) {
                        row = row + "#";
                } else {
                    row = row + ".";
                }
                if (cycle % 40 === 0) {
                    image.push(row);
                    row = '';
                }
                console.log(row);
                cycle += 1;
            } else {
                let value = parseInt(line.split(' ')[1]);
                for(let i = 0; i < 2; i++){
                    console.log("Cycle: " + cycle + ", " + x);
                    console.log(cycle % 40);
                    let variance = x - ((cycle - 1) % 40);
                    if (variance === 1 || variance === 0 || variance === -1) {
                        row = row + "#";
                    } else {
                        row = row + ".";
                    }
                    if (cycle % 40 === 0) {
                        image.push(row);
                        row = '';
                    }
                    console.log(row);
                    cycle += 1;
                }
                x += value;
            }
        }

        console.log(image);
        return 0;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}



start();



