"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_6_pt1());
    console.log(solve_dec_6_pt2());
};

module.exports = {
    start
};


const solve_dec_6_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec6.txt', 'utf8');
        const lines = data.split('\n');
        let start = 0;
        let marker = '';
        for(let i = 0; i < lines[0].length - 3; i++){
            let buffer = lines[0].substring(i, i + 4);
            if (checkMarker(buffer.split(''), 4)){
                start = i;
                marker = buffer;
                break;
            }
        }
        
        console.log(marker);
        return start + 4;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}

const checkMarker = ( values : string[], size : number): boolean => {
    let check = new Set(values);
    if (check.size === size) 
        return true;
    return false;
}


const solve_dec_6_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec6.txt', 'utf8');
        const lines = data.split('\n');
        let start = 0;
        let marker = '';
        for(let i = 0; i < lines[0].length - 13; i++){
            let buffer = lines[0].substring(i, i + 14);
            if (checkMarker(buffer.split(''), 14)){
                start = i;
                marker = buffer;
                break;
            }
        }
        
        console.log(marker);
        return start + 14;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}



start();



