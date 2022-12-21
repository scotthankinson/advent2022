"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_8_pt1());
    console.log(solve_dec_8_pt2());
};

module.exports = {
    start
};


const solve_dec_8_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec8.txt', 'utf8');
        const lines = data.split('\n');
        let trees = [];
        for(let line of lines) {
            trees.push(line.split('').map(o => parseInt(o)));
        }
        let visibleCount = 0;

        for(let y = 0; y < trees.length; y++){
            for(let x = 0; x < trees[0].length; x++){
                const visible = isVisible(trees, x, y);
                console.log(x + "," + y + ": " + visible);
                if (visible) visibleCount += 1;
            }
        }

        return visibleCount;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}

const isVisible = (trees, x: number, y: number) : boolean => {
    if (x === 0) return true;
    if (y === 0) return true;
    if (x === trees[0].length - 1) return true;
    if (y === trees.length - 1) return true;
    let visibleLeft = true;
    let visibleRight = true;
    let visibleTop = true;
    let visibleBottom = true;
    for (let rowX = 0; rowX < x; rowX++) {
        if (trees[y][rowX] >= trees[y][x]) {
            visibleLeft = false;
        }
    }
    for(let rowX = x + 1; rowX < trees[0].length; rowX++) {
        if (trees[y][rowX] >= trees[y][x]) {
            visibleRight = false;
        }
    }
    for(let colY = 0; colY < y; colY++) {
        if (trees[colY][x] >= trees[y][x]) {
            visibleTop = false;
        }
    }
    for(let colY = y + 1; colY < trees.length; colY++) {
        if (trees[colY][x] >= trees[y][x]) {
            visibleBottom = false;
        }
    }

    return visibleLeft || visibleRight || visibleTop || visibleBottom;
}

const solve_dec_8_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec8.txt', 'utf8');
        const lines = data.split('\n');
        let trees = [];
        for(let line of lines) {
            trees.push(line.split('').map(o => parseInt(o)));
        }
        let visibleCount = 0;

        let maxScore = 0;
        for(let y = 0; y < trees.length; y++){
            for(let x = 0; x < trees[0].length; x++){
                const score = getScore(trees, x, y);
                console.log(x + "," + y + ": " + score);
                if (score > maxScore) maxScore = score;
            }
        }

        return maxScore;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}

const getScore = (trees, x: number, y: number) : number => {
    if (x === 0) return 0;
    if (y === 0) return 0;
    if (x === trees[0].length - 1) return 0;
    if (y === trees.length - 1) return 0;
    let topScore = 0;
    let bottomScore = 0;
    let leftScore = 0;
    let rightScore = 0;
    
    for (let rowX = x - 1; rowX >= 0; rowX--) {
        leftScore += 1;
        if (trees[y][rowX] >= trees[y][x]) {
            break;
        } 
    }
    for(let rowX = x + 1; rowX < trees[0].length; rowX++) {
        rightScore +=1;
        if (trees[y][rowX] >= trees[y][x]) {
            break;
        }
    }
    for(let colY = y - 1; colY >= 0; colY--) {
        topScore += 1;
        if (trees[colY][x] >= trees[y][x]) {
            break;
        }
    }
    for(let colY = y + 1; colY < trees.length; colY++) {
        bottomScore += 1;
        if (trees[colY][x] >= trees[y][x]) {
            break;
        }
    }

    return topScore * bottomScore * leftScore * rightScore;
}


start();



