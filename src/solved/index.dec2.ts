"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_2_pt1());
    console.log(solve_dec_2_pt2());
};

module.exports = {
    start
};


const solve_dec_2_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec2.txt', 'utf8');
        const lines = data.split('\n');
        let scores = [];
        let values = {
            'A': 1, 
            'B': 2, 
            'C': 3, 
            'X': 1, 
            'Y': 2, 
            'Z': 3
        }
        for (let line of lines) {
            let parts = line.split(' ');
            let score = 0;
            let win = false;
            let draw = false;
            if (values[parts[0]] === values[parts[1]]) draw = true;
            if (values[parts[1]] > values[parts[0]]) win = true;
            if (parts[0] === 'C' && parts[1] === 'X') win = true;
            if (parts[0] === 'A' && parts[1] === 'Z') win = false;
            // if Z and A are selected, Z counts as 0
            console.log(line);
            console.log(win);
            console.log(draw);
            if (draw) score += 3;
            if (win) score += 6;
            score += values[parts[1]];
            console.log(score);
            scores.push(score);
        }
        let result = 0;
        scores.forEach(o => result += o);
        
        return result;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}


const solve_dec_2_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec2.txt', 'utf8');
        const lines = data.split('\n');
        let scores = [];
        let values = {
            'A': 1,         // Rock
            'B': 2,         // Paper
            'C': 3,         // Scissors
            'X': 1, 
            'Y': 2, 
            'Z': 3
        }
        for (let line of lines) {
            let parts = line.split(' ');
            if (parts[0] === 'A'){
                if (parts[1] === 'X') scores.push(3);   //  Loss + Scissors = 3
                if (parts[1] === 'Y') scores.push(4);   //  Tie + Rock = 4
                if (parts[1] === 'Z') scores.push(8);   //  Win + Paper = 8
            } else if (parts[0] === 'B') {
                if (parts[1] === 'X') scores.push(1);   //  Loss + Rock = 1
                if (parts[1] === 'Y') scores.push(5);   //  Tie + Paper = 5
                if (parts[1] === 'Z') scores.push(9);   //  Win + Scissors = 9
            } else if(parts[0]==='C') {
                if (parts[1] === 'X') scores.push(2);   //  Loss + Paper = 2
                if (parts[1] === 'Y') scores.push(6);   //  Tie + Scissors = 6
                if (parts[1] === 'Z') scores.push(7);   //  Win + Rock = 7
            }
        }
        let result = 0;
        scores.forEach(o => result += o);
        
        return result;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}



start();



