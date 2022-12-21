"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_4_pt1());
    console.log(solve_dec_4_pt2());
};

module.exports = {
    start
};


const solve_dec_4_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec4.txt', 'utf8');
        const lines = data.split('\n');
        let overlaps = 0;
        for(let line of lines) {
            console.log(line);
            let parts = line.split(',');
            let teamA = parts[0].split('-').map(o => parseInt(o));
            let teamB = parts[1].split('-').map(o => parseInt(o));
            console.log(teamA);
            console.log(teamB);
            if (teamA[0] <= teamB[0] && teamA[1] >= teamB[1]) {
                overlaps +=1;
            } else if (teamB[0] <= teamA[0] && teamB[1] >= teamA[1]) {
                overlaps +=1;
            }
        }

        return overlaps;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}


const solve_dec_4_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec4.txt', 'utf8');
        const lines = data.split('\n');
        let overlaps = 0;
        for(let line of lines) {
            console.log(line);
            let parts = line.split(',');
            let teamA = parts[0].split('-').map(o => parseInt(o));
            let teamB = parts[1].split('-').map(o => parseInt(o));
            console.log(teamA);
            console.log(teamB);
            if (teamA[0] <= teamB[0] && teamA[1] >= teamB[1]) {
                // Team A contains Team B
                console.log("A Contains!");
                overlaps +=1;
            } else if (teamB[0] <= teamA[0] && teamB[1] >= teamA[1]) {
                // Team B contains Team A
                console.log("B Contains!");
                overlaps +=1;
            } else if (teamA[0] <= teamB[0] && teamA[1] >= teamB[0] && teamA[1] <= teamB[1]) {
                // Team A less than Team B but stretches in
                console.log("A Overlaps!");
                overlaps +=1;
            } else if (teamB[0] <= teamA[0] && teamB[1] >= teamA[0] && teamB[1] <= teamA[1]) {
                // Team B less than Team A but stretches in
                console.log("B Overlaps!");
                overlaps +=1;
            }
        }

        return overlaps;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}



start();



