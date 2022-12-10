"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_1_pt1());
    console.log(solve_dec_1_pt2());
};

module.exports = {
    start
};


const solve_dec_1_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec1.txt', 'utf8');
        const lines = data.split('\n');
        let calories = 0;
        let elves = [];
        for (let line of lines){
            console.log(line);
            if (line.length === 0) {
                elves.push(calories)
                calories = 0;
            } else {
                calories += parseInt(line);
            }
        }
        let sortedElves = elves.sort((n1,n2) => n2 - n1);
        console.log(sortedElves);

        return sortedElves[0];
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}


const solve_dec_1_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec1.txt', 'utf8');
        const lines = data.split('\n');
        let calories = 0;
        let elves = [];
        for (let line of lines){
            console.log(line);
            if (line.length === 0) {
                elves.push(calories)
                calories = 0;
            } else {
                calories += parseInt(line);
            }
        }
        let sortedElves = elves.sort((n1,n2) => n2 - n1);
        console.log(sortedElves);

        return sortedElves[0] + sortedElves[1] + sortedElves[2];
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}



start();



