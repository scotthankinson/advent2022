"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_5_pt1());
    console.log(solve_dec_5_pt2());
};

module.exports = {
    start
};


const solve_dec_5_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec5.txt', 'utf8');
        const lines = data.split('\n');
        let processingInstructions = false;
        let instructions = [];
        let boxes = [];
        for(let line of lines){
            if (line.length === 0) {
                processingInstructions = true;
                continue;
            }
            if (!processingInstructions) {
                boxes.push(line);
            } else {
                instructions.push(line);
            }
        }
        let stackCount = parseInt(boxes.pop().split(' ').filter(o => o.length > 0).pop());
        let stacks = [];
        for(let i = 1; i <= stackCount; i++){
            stacks.push([]);
        }
        for(let i = boxes.length - 1; i >= 0; i--) {
            let row = boxes[i];
            let boxPosition = -1;
            while(row.length > 0) {
                let box = row.substring(0, 4).trim();
                row = row.substring(4);
                boxPosition += 1;
                if (box.length === 0) continue;
                stacks[boxPosition].push(box.substring(1, 2));
            }
        }
        console.log(stacks);

        for(let i = 0; i < instructions.length; i++){
            let details = instructions[i].replace('move ', '').replace('from ','').replace('to ','').split(' ').map(o => parseInt(o));
            for(let c = 0; c < details[0]; c++) {
                let box = stacks[details[1] - 1].pop();
                stacks[details[2] - 1].push(box);
            }
        }
        console.log(stacks);
        let result = '';
        for(let i = 0; i < stacks.length; i++){
            result += stacks[i][stacks[i].length - 1];
        }
        return result;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}


const solve_dec_5_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec5.txt', 'utf8');
        const lines = data.split('\n');
        let processingInstructions = false;
        let instructions = [];
        let boxes = [];
        for(let line of lines){
            if (line.length === 0) {
                processingInstructions = true;
                continue;
            }
            if (!processingInstructions) {
                boxes.push(line);
            } else {
                instructions.push(line);
            }
        }
        let stackCount = parseInt(boxes.pop().split(' ').filter(o => o.length > 0).pop());
        let stacks = [];
        for(let i = 1; i <= stackCount; i++){
            stacks.push([]);
        }
        for(let i = boxes.length - 1; i >= 0; i--) {
            let row = boxes[i];
            let boxPosition = -1;
            while(row.length > 0) {
                let box = row.substring(0, 4).trim();
                row = row.substring(4);
                boxPosition += 1;
                if (box.length === 0) continue;
                stacks[boxPosition].push(box.substring(1, 2));
            }
        }
        console.log(stacks);

        for(let i = 0; i < instructions.length; i++){
            let details = instructions[i].replace('move ', '').replace('from ','').replace('to ','').split(' ').map(o => parseInt(o));
            let boxes = [];
            for(let c = 0; c < details[0]; c++) {
                let box = stacks[details[1] - 1].pop();
                boxes.push(box);
            }
            while(boxes.length > 0){
                let box = boxes.pop();
                stacks[details[2] - 1].push(box);
            }            
        }
        console.log(stacks);
        let result = '';
        for(let i = 0; i < stacks.length; i++){
            result += stacks[i][stacks[i].length - 1];
        }
        return result;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}



start();



