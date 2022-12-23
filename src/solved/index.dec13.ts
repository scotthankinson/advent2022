"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_13_pt1());
    console.log(solve_dec_13_pt2());
};

module.exports = {
    start
};


const solve_dec_13_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec13.txt', 'utf8');
        const lines = data.split('\n');
        let index = 1;
        let orderedIndexes = [];
        while (lines.length > 0) {
            if (lines[0].length === 0) lines.shift();
            let left = JSON.parse(lines.shift());
            let right = JSON.parse(lines.shift());
            let test = compare(left, right);
            if (test) orderedIndexes.push(index);
            console.log(left);
            console.log(right);
            console.log(test);
            console.log("------");
            index += 1;
        }

        console.log(orderedIndexes);
        let result = 0;
        orderedIndexes.forEach(o => result = result + o);
        return result;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}

const compare = (left, right) => {
    // Both numbers
    if (typeof left === 'number' && typeof right === 'number') {
        if (left < right) return true;
        if (left > right) return false;
        return null;
    }

    // list and number
    if (typeof left !== typeof right) {
        if (typeof left === 'number') left = [left];
        if (typeof right === 'number') right = [right];
        return compare(left, right);
    }

    // Both lists
    while (left.length > 0 && right.length > 0) {
        let test = compare(left.shift(), right.shift());
        if (test === null) continue;
        return test;
    }
    if (left.length < right.length) return true;
    if (left.length > right.length) return false;
    return null;
}

const compare2 = (left, right) => {
    // Both numbers
    if (typeof left === 'number' && typeof right === 'number') {
        // console.log('numbers');
        if (left < right) return -1;
        if (left > right) return 1;
        return 0;
    }

    // list and number
    if (typeof left !== typeof right) {
        // console.log('mixed');
        if (typeof left === 'number') left = [left];
        if (typeof right === 'number') right = [right];
        return compare2(left, right);
    }

    // console.log('lists');
    // Both lists
    while (left.length > 0 && right.length > 0) {
        let test = compare2(left.shift(), right.shift());
        if (test === 0) continue;
        return test;
    }
    if (left.length < right.length) return -1;
    if (left.length > right.length) return 1;
    return 0;
}

const compareWrapper = (leftString, rightString) => {
    let left = JSON.parse(leftString);
    let right = JSON.parse(rightString);
    let test = compare2(left, right);
    console.log(left);
    console.log(right);
    console.log("@@@@@@@ " + test);
    console.log("-------------");
    return test;
}

const solve_dec_13_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec13.txt', 'utf8');
        let lines = data.split('\n');
        lines.push('[[2]]');
        lines.push('[[6]]');
        let packets = [];
        for (let line of lines) {
            if (line.length === 0) continue;
            packets.push(line);
        }

        packets.sort(compareWrapper);
        let start = 0;
        let end = 0;
        
        for (let i = 0; i < packets.length; i++) {
            if (packets[i] === '[[2]]') 
                start = i+1;
            if (packets[i] === '[[6]]') 
                end = i+1;
        }

        return start * end;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}



start();



