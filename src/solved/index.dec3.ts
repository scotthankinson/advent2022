"use strict";
// tslint:disable
import fs = require('fs');
import { stringify } from 'querystring';

const start = (): void => {
    // console.log(solve_dec_3_pt1());
    console.log(solve_dec_3_pt2());
};

module.exports = {
    start
};


const solve_dec_3_pt1 = () => {
    try {
        "abcdefghijklmnopqrstuvwxyz".split('').forEach(o => console.log(value(o)));
        "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('').forEach(o => console.log(value(o)));
        
        let data = fs.readFileSync('src/test.dec3.txt', 'utf8');
        const lines = data.split('\n');
        let priority = 0;
        for(let line of lines){
            // console.log(line);
            // console.log(line.length);
            let leftBin = line.substring(0, line.length / 2);
            let rightBin = line.substring(line.length / 2);
            let intersection = new Set(leftBin.split('').filter(o => rightBin.indexOf(o) >= 0));
            console.log(intersection);
            if (intersection.size === 0) {
                console.log(line);
                console.log(line.length);
                console.log(leftBin);
                console.log(rightBin);
            }
            intersection.forEach(o => priority += value(o));
        }

        return priority;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}

const value = (character : string) : number => {
    if (character.toUpperCase() == character) return character.charCodeAt(0) - 38;
    else return character.charCodeAt(0) - 96;
}

const solve_dec_3_pt2 = () => {
    try {
        "abcdefghijklmnopqrstuvwxyz".split('').forEach(o => console.log(value(o)));
        "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('').forEach(o => console.log(value(o)));
        
        let data = fs.readFileSync('src/test.dec3.txt', 'utf8');
        const lines = data.split('\n');
        let groups = [];
        let priority = 0;
        for (let i = 0; i < (lines.length / 3); i++) {
            console.log("Group " + i);
            // console.log(lines[i * 3]);
            // console.log(lines[i * 3 + 1]);
            // console.log(lines[i * 3 + 2]);
            let firstIntersection = new Set(lines[i*3].split('').filter(o => lines[i*3+1].indexOf(o) >= 0));
            let secondIntersection = new Set(Array.from(firstIntersection.values()).filter(o => lines[i*3 + 2].indexOf(o) >= 0));
            console.log(secondIntersection);
            secondIntersection.forEach(o => priority += value(o));
        }

        return priority;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}



start();



