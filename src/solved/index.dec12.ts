"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_12_pt1());
    console.log(solve_dec_12_pt2());
};

module.exports = {
    start
};


const solve_dec_12_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec12.txt', 'utf8');
        const lines = data.split('\n');
        let heightMap = {};
        let start = "";
        let end = "";
        let lastStep = {steps: 0};
        for(let y = 0; y < lines.length; y++) {
            let line = lines[y].split('');
            for(let x = 0; x < line.length; x++) {
                if (line[x] === "S") {
                    line[x] = 'a';
                    start = x + ',' + y;
                }
                if (line[x] === "E") {
                    line[x] = 'z';
                    end = x + ',' + y;
                }
                heightMap[x + ',' + y] = { 'height': line[x]};
            }
        }
        console.log(start);
        console.log(end);
        console.log(heightMap);

        let path = [{x: parseInt(start.split(",")[0]), y: parseInt(start.split(",")[1]), steps: 0}];
        let visited = new Set();
        visited.add(start);
        while(path.length > 0) {
            let current = path.shift();
            console.log(current);
            if (current.x + "," + current.y === end) {
                lastStep = current;
                break;
            }
            
            let up = current.x + ',' + (current.y-1);
            if (heightMap[up] && !visited.has(up) && canMove(heightMap[current.x + ',' + current.y].height, heightMap[up].height)){
                path.push({x: current.x, y: current.y - 1, steps: current.steps + 1});
                visited.add(up);
            }
            let down =  current.x + ',' + (current.y+1);
            if (heightMap[down] && !visited.has(down) && canMove(heightMap[current.x + ',' + current.y].height, heightMap[down].height)){
                path.push({x: current.x, y: current.y + 1, steps: current.steps + 1});
                visited.add(down);
            }
            let left = (current.x-1) + ',' + current.y;
            if (heightMap[left] && !visited.has(left) && canMove(heightMap[current.x + ',' + current.y].height, heightMap[left].height)){
                path.push({x: current.x - 1, y: current.y, steps: current.steps + 1});
                visited.add(left);
            }
            let right = (current.x+1) + ',' + current.y;
            if (heightMap[right] && !visited.has(right) && canMove(heightMap[current.x + ',' + current.y].height, heightMap[right].height)){
                path.push({x: current.x + 1, y: current.y, steps: current.steps + 1});
                visited.add(right);
            }

            path.sort((a, b) => a.steps - b.steps);
        }

        // 468 too high (and the answer to someone else's puzzle) --> was starting at 0,0 and not at S
        return lastStep.steps;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;    
}

const canMove = (source: string, destination: string) : boolean => {
    // console.log("Compare " + source + " to " + destination);
    let sourceValue = source.charCodeAt(0);
    let destValue = destination.charCodeAt(0);
    return destValue - sourceValue <= 1;
}

const solve_dec_12_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec12.txt', 'utf8');
        const lines = data.split('\n');
        let heightMap = {};
        let start = "";
        let end = "";
        let starts = [];
        let distances = [];
        for(let y = 0; y < lines.length; y++) {
            let line = lines[y].split('');
            for(let x = 0; x < line.length; x++) {
                if (line[x] === "S") {
                    line[x] = 'a';
                }
                if (line[x] === "E") {
                    line[x] = 'z';
                    end = x + ',' + y;
                }
                let key = x + ',' + y;
                heightMap[key] = { 'height': line[x]};
                
                if (line[x] === 'a') {
                    starts.push(key);
                }
            }
        }
        console.log(starts);
        console.log(end);
        // console.log(heightMap);

        for(let z = 0; z < starts.length; z++){
            start = starts[z];
            let lastStep = {steps: 0};
            let path = [{x: parseInt(start.split(",")[0]), y: parseInt(start.split(",")[1]), steps: 0}];
            let visited = new Set();
            visited.add(start);
            while(path.length > 0) {
                let current = path.shift();
                // console.log(current);
                if (current.x + "," + current.y === end) {
                    lastStep = current;
                    break;
                }
                
                let up = current.x + ',' + (current.y-1);
                if (heightMap[up] && !visited.has(up) && canMove(heightMap[current.x + ',' + current.y].height, heightMap[up].height)){
                    path.push({x: current.x, y: current.y - 1, steps: current.steps + 1});
                    visited.add(up);
                }
                let down =  current.x + ',' + (current.y+1);
                if (heightMap[down] && !visited.has(down) && canMove(heightMap[current.x + ',' + current.y].height, heightMap[down].height)){
                    path.push({x: current.x, y: current.y + 1, steps: current.steps + 1});
                    visited.add(down);
                }
                let left = (current.x-1) + ',' + current.y;
                if (heightMap[left] && !visited.has(left) && canMove(heightMap[current.x + ',' + current.y].height, heightMap[left].height)){
                    path.push({x: current.x - 1, y: current.y, steps: current.steps + 1});
                    visited.add(left);
                }
                let right = (current.x+1) + ',' + current.y;
                if (heightMap[right] && !visited.has(right) && canMove(heightMap[current.x + ',' + current.y].height, heightMap[right].height)){
                    path.push({x: current.x + 1, y: current.y, steps: current.steps + 1});
                    visited.add(right);
                }

                path.sort((a, b) => a.steps - b.steps);
            }
            console.log(lastStep.steps);
            distances.push(lastStep.steps);
        }

        // console.log(starts);
        // console.log(distances);
        console.log(distances.filter(o => o > 0).sort((a, b) => a - b)[0]);
        return distances.filter(o => o > 0).sort((a, b) => a - b)[0];
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;    
}



start();



