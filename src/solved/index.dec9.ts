"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_9_pt1());
    console.log(solve_dec_9_pt2());
};

module.exports = {
    start
};


const solve_dec_9_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec9.txt', 'utf8');
        const lines = data.split('\n');
        let positions = new Set();
        let head = {'x': 0, 'y': 0};
        let tail = {'x': 0, 'y': 0};
        positions.add('0,0');
        for(let line of lines){
            console.log(line);
            let direction = line.split(' ')[0];
            let steps = parseInt(line.split(' ')[1]);
            for(let i = 0; i < steps; i++){
                console.log("--------------------");
                console.log(head);
                console.log(tail);
                moveHead(head, tail, direction);
                positions.add(tail.x + ',' + tail.y);
                console.log(head);
                console.log(tail);
                console.log("--------------------");
            }
        }

        console.log(positions);
        return positions.size;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}

const moveHead = (head, tail, direction) => {
    if (direction === 'U') {
        head.y -= 1;
        if (Math.abs(head.y - tail.y) > 1) {
            tail.y -= 1;
            tail.x = head.x;
        }
    } else if (direction === 'D') {
        head.y += 1;
        if (Math.abs(head.y - tail.y) > 1) {
            tail.y += 1;
            tail.x = head.x;
        }
    } else if (direction === 'L') {
        head.x -= 1;
        if (Math.abs(head.x - tail.x) > 1) {
            tail.x -= 1;
            tail.y = head.y;
        }
    } else if (direction === 'R') {
        head.x += 1;
        if (Math.abs(head.x - tail.x) > 1) {
            tail.x += 1;
            tail.y = head.y;
        }
    }
}

const solve_dec_9_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec9.txt', 'utf8');
        const lines = data.split('\n');
        let positions = new Set();
        let knots = [];
        for(let i = 0; i < 10; i++){
            knots.push({'x': 0, 'y': 0});
        }
        positions.add('0,0');
        for(let line of lines){
            console.log(line);
            let direction = line.split(' ')[0];
            let steps = parseInt(line.split(' ')[1]);
            for(let i = 0; i < steps; i++){
                adjustHead(knots[0], direction);
                for(let j = 0; j < 9; j++){
                    adjustTail(knots[j], knots[j+1], j+1);
                }
                console.log(knots);
                positions.add(knots[9].x + ',' + knots[9].y);
            }
        }

        // 2926 too high
        // 2364 too high
        // 2331 just right
        console.log(positions);
        return positions.size;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}

const adjustHead = (head, direction) => {
    if (direction === 'U') {
        head.y -= 1;
    } else if (direction === 'D') {
        head.y += 1;
    } else if (direction === 'L') {
        head.x -= 1;
    } else if (direction === 'R') {
        head.x += 1;
    }
}

const adjustTail = (head, tail, position) => {
    let vector = {'x': head.x - tail.x, 'y': head.y - tail.y};
    // if (vector.x === 0 && vector.y === 0) return;
    if (vector.x < 2 && vector.x > -2 && vector.y < 2 && vector.y > -2) return;
    console.log("---------Move " + position + "--------------");
    console.log(head);
    console.log(tail);
    
    /*
    if (vector.x > 0) vector.x -= 1;
    if (vector.y > 0) vector.y -= 1;
    if (vector.x < 0) vector.x += 1;
    if (vector.y < 0) vector.y += 1;
    tail.x += vector.x;
    tail.y += vector.y;
    */

    console.log("---------Vector--------------");
    console.log(position + ": " + JSON.stringify(vector));
    if (vector.x > 1 && vector.y === 0) tail.x += 1;
    else if (vector.x < -1 && vector.y === 0) tail.x -= 1;
    else if (vector.y > 1 && vector.x === 0) tail.y += 1;
    else if (vector.y < -1 && vector.x === 0) tail.y -= 1;
    else if (Math.abs(vector.x) > 1 && Math.abs(vector.y) > 1) {
        if (vector.x > 0) tail.x += 1;
        if (vector.y > 0) tail.y += 1;
        if (vector.x < 0) tail.x -= 1;
        if (vector.y < 0) tail.y -= 1;
    } else if (vector.x > 1) {
        tail.x +=1;
        tail.y += vector.y;
    } else if (vector.x < -1) {
        tail.x -= 1;
        tail.y += vector.y;
    } else if (vector.y > 1) {
        tail.y += 1;
        tail.x += vector.x;
    } else if (vector.y < -1) {
        tail.y -= 1;
        tail.x += vector.x;
    }
    console.log("---------Result--------------");
    console.log(head);
    console.log(tail);
    
    // Move from 2,0 to 3,-1 when anchored to 4,-2
}


start();



