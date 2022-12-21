"use strict";
// tslint:disable
import fs = require('fs');
import { forInRight } from 'lodash';
import { getConfigFileParsingDiagnostics } from 'typescript';

const start = (): void => {
    // console.log(solve_dec_7_pt1());
    console.log(solve_dec_7_pt2());
};

module.exports = {
    start
};


const solve_dec_7_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec7.txt', 'utf8');
        const lines = data.split('\n');
        let inputs = [];
        let outputs = [];
        let currentPath = '';
        for(let line of lines) {
            if (line.startsWith("$ ")) {
                inputs.push(line.replace("$ ", "").split(' '));
                outputs.push([]);
            } else {
                outputs[outputs.length - 1].push(line);
            }
        }
            
        let directories = new Set();
        let files = [];
        let fileSizes = [];
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i][0] === 'cd') {
                // console.log(inputs[i]);
                if (inputs[i][1] ===  '/'){
                    currentPath = '/';
                } else if (inputs[i][1] === '..'){
                    let parts = currentPath.split('/').filter(o => o.length > 0);
                    parts.pop();
                    currentPath = "/";
                    for(let part of parts){
                        currentPath += part + "/";
                    }
                } else {
                    currentPath += inputs[i][1] + '/';
                }
                directories.add(currentPath);
                // console.log(currentPath);
            } else if (inputs[i][0] === 'ls') {
                let contents =  outputs[i];
                for(let file of contents){
                    if (file.length === 0) continue;
                    if (file.startsWith("dir")) continue;
                    let fileParts = file.split(' ');
                    files.push(currentPath + fileParts[1]);
                    fileSizes.push(parseInt(fileParts[0]));
                }
            }
            
        }

        let clearSpace = 0;
        console.log(directories);
        for(let i = 0; i < files.length; i++){
            console.log(files[i] + ": " + fileSizes[i]);
        }
        for(let i = 0; i < directories.size; i++){
            let size = 0;
            let directory = Array.from(directories.values())[i];
            for(let j = 0; j < files.length; j++){
                if (files[j].startsWith(directory)){
                    size += fileSizes[j];
                }
            }
            console.log("Directory " + directory + ": " + size);
            if (size <= 100000) console.log("Ding!");
            console.log(clearSpace);
            if (size <= 100000) clearSpace += size;
        }
        
        return clearSpace;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}


const solve_dec_7_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec7.txt', 'utf8');
        const lines = data.split('\n');
        let inputs = [];
        let outputs = [];
        let currentPath = '';
        for(let line of lines) {
            if (line.startsWith("$ ")) {
                inputs.push(line.replace("$ ", "").split(' '));
                outputs.push([]);
            } else {
                outputs[outputs.length - 1].push(line);
            }
        }
            
        let directories = new Set();
        let files = [];
        let fileSizes = [];
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i][0] === 'cd') {
                // console.log(inputs[i]);
                if (inputs[i][1] ===  '/'){
                    currentPath = '/';
                } else if (inputs[i][1] === '..'){
                    let parts = currentPath.split('/').filter(o => o.length > 0);
                    parts.pop();
                    currentPath = "/";
                    for(let part of parts){
                        currentPath += part + "/";
                    }
                } else {
                    currentPath += inputs[i][1] + '/';
                }
                directories.add(currentPath);
                // console.log(currentPath);
            } else if (inputs[i][0] === 'ls') {
                let contents =  outputs[i];
                for(let file of contents){
                    if (file.length === 0) continue;
                    if (file.startsWith("dir")) continue;
                    let fileParts = file.split(' ');
                    files.push(currentPath + fileParts[1]);
                    fileSizes.push(parseInt(fileParts[0]));
                }
            }
            
        }

        let totalSpace = 70000000;
        let freeSpace = 70000000;
        for(let i = 0; i < fileSizes.length; i++){
            freeSpace -= fileSizes[i];
        }
        console.log(freeSpace);
        let neededSpace = 30000000 - freeSpace;
        let foundSpace = 70000000;
        for(let i = 0; i < directories.size; i++){
            let size = 0;
            let directory = Array.from(directories.values())[i];
            for(let j = 0; j < files.length; j++){
                if (files[j].startsWith(directory)){
                    size += fileSizes[j];
                }
            }
            console.log("Directory " + directory + ": " + size);
            if (size > neededSpace && size < foundSpace){
                console.log("This could work!");
                foundSpace = size;
            }
        }
        
        return foundSpace;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}



start();



