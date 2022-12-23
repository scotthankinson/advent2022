"use strict";
// tslint:disable
import fs = require('fs');

const start = (): void => {
    // console.log(solve_dec_11_pt1());
    console.log(solve_dec_11_pt2());
};

module.exports = {
    start
};


const solve_dec_11_pt1 = () => {
    try {
        let data = fs.readFileSync('src/test.dec11.txt', 'utf8');
        const lines = data.split('\n');
        let testMonkeys = [
            {
                id: 0,
                items: [79, 98],
                operation: "multiply",
                operand: 19,
                test: 23,
                pass: 2,
                fail: 3, 
                inspections: 0
            },
            {
                id: 1,
                items: [54, 65, 75, 74],
                operation: "add",
                operand: 6,
                test: 19,
                pass: 2,
                fail: 0, 
                inspections: 0
            },
            {
                id: 2,
                items: [79, 60, 97],
                operation: "square",
                test: 13,
                pass: 1,
                fail: 3, 
                inspections: 0
            },
            {
                id: 3, 
                items: [74],
                operation: "add",
                operand: 3,
                test: 17,
                pass: 0,
                fail: 1, 
                inspections: 0
            },
        ];

        let monkeys = [
            {
                id: 0,
                items: [75, 63],
                operation: "multiply",
                operand: 3,
                test: 11,
                pass: 7,
                fail: 2, 
                inspections: 0
            },
            {
                id: 1,
                items: [65, 79, 98, 77, 56, 54, 83, 94],
                operation: "add",
                operand: 3,
                test: 2,
                pass: 2,
                fail: 0, 
                inspections: 0
            },
            {
                id: 2,
                items: [66],
                operation: "add",
                operand: 5,
                test: 5,
                pass: 7,
                fail: 5, 
                inspections: 0
            },
            {
                id: 3,
                items: [51, 89, 90],
                operation: "multiply",
                operand: 19,
                test: 7,
                pass: 6,
                fail: 4, 
                inspections: 0
            },
            {
                id: 4,
                items: [75, 94, 66, 90, 77, 82, 61],
                operation: "add",
                operand: 1,
                test: 17,
                pass: 6,
                fail: 1, 
                inspections: 0
            },
            {
                id: 5,
                items: [53, 76, 59, 92, 95],
                operation: "add",
                operand: 2,
                test: 19,
                pass: 4,
                fail: 3, 
                inspections: 0
            },
            {
                id: 6,
                items: [81, 61, 75, 89, 70, 92],
                operation: "square",
                test: 3,
                pass: 0,
                fail: 1, 
                inspections: 0
            },
            {
                id: 7,
                items: [81, 86, 62, 87],
                operation: "add",
                operand: 8,
                test: 13,
                pass: 3,
                fail: 5, 
                inspections: 0
            }
        ];

        for(let i =  0; i < 20; i++) {
            for(let monkey of monkeys) {
                console.log("Procesing Monkey " + monkey.id);
                while(monkey.items.length > 0) {
                    monkey.inspections += 1;
                    let item = monkey.items.shift();
                    if (monkey.operation === "multiply"){
                        item = item * monkey.operand;
                    } else if (monkey.operation === "add") {
                        item = item + monkey.operand;
                    } else if (monkey.operation === "square") {
                        item = item * item;
                    }
                    item = Math.floor(item / 3);

                    if (item % monkey.test === 0){
                        monkeys[monkey.pass].items.push(item);
                    } else {
                        monkeys[monkey.fail].items.push(item);
                    }
                }
            }
        }

        let inspections = monkeys.map(o => o.inspections).sort((a,b) => b - a);
        let monkeyBusiness = inspections.shift() * inspections.shift();
        console.log(monkeys);


        return monkeyBusiness;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}


const solve_dec_11_pt2 = () => {
    try {
        let data = fs.readFileSync('src/test.dec11.txt', 'utf8');
        const lines = data.split('\n');
        let testMonkeys = [
            {
                id: 0,
                items: [79, 98],
                operation: "multiply",
                operand: 19,
                test: 23,
                pass: 2,
                fail: 3, 
                inspections: 0
            },
            {
                id: 1,
                items: [54, 65, 75, 74],
                operation: "add",
                operand: 6,
                test: 19,
                pass: 2,
                fail: 0, 
                inspections: 0
            },
            {
                id: 2,
                items: [79, 60, 97],
                operation: "square",
                test: 13,
                pass: 1,
                fail: 3, 
                inspections: 0
            },
            {
                id: 3, 
                items: [74],
                operation: "add",
                operand: 3,
                test: 17,
                pass: 0,
                fail: 1, 
                inspections: 0
            },
        ];

        let monkeys = [
            {
                id: 0,
                items: [75, 63],
                operation: "multiply",
                operand: 3,
                test: 11,
                pass: 7,
                fail: 2, 
                inspections: 0
            },
            {
                id: 1,
                items: [65, 79, 98, 77, 56, 54, 83, 94],
                operation: "add",
                operand: 3,
                test: 2,
                pass: 2,
                fail: 0, 
                inspections: 0
            },
            {
                id: 2,
                items: [66],
                operation: "add",
                operand: 5,
                test: 5,
                pass: 7,
                fail: 5, 
                inspections: 0
            },
            {
                id: 3,
                items: [51, 89, 90],
                operation: "multiply",
                operand: 19,
                test: 7,
                pass: 6,
                fail: 4, 
                inspections: 0
            },
            {
                id: 4,
                items: [75, 94, 66, 90, 77, 82, 61],
                operation: "add",
                operand: 1,
                test: 17,
                pass: 6,
                fail: 1, 
                inspections: 0
            },
            {
                id: 5,
                items: [53, 76, 59, 92, 95],
                operation: "add",
                operand: 2,
                test: 19,
                pass: 4,
                fail: 3, 
                inspections: 0
            },
            {
                id: 6,
                items: [81, 61, 75, 89, 70, 92],
                operation: "square",
                test: 3,
                pass: 0,
                fail: 1, 
                inspections: 0
            },
            {
                id: 7,
                items: [81, 86, 62, 87],
                operation: "add",
                operand: 8,
                test: 13,
                pass: 3,
                fail: 5, 
                inspections: 0
            }
        ];

        for(let i =  0; i < 10000; i++) {
            for(let monkey of monkeys) {
                console.log("Procesing Monkey " + monkey.id);
                while(monkey.items.length > 0) {
                    monkey.inspections += 1;
                    let item = monkey.items.shift();
                    if (monkey.operation === "multiply"){
                        item = item * monkey.operand;
                    } else if (monkey.operation === "add") {
                        item = item + monkey.operand;
                    } else if (monkey.operation === "square") {
                        item = item * item;
                    }
                    // item = Math.floor(item / 3);

                    // https://www.calculatorsoup.com/calculators/math/lcm.php
                    // LCM for test set
                    // item = item % 96577;
                    // LCM for real set
                    item = item % 9699690;

                    if (item % monkey.test === 0){
                        monkeys[monkey.pass].items.push(item);
                    } else {
                        monkeys[monkey.fail].items.push(item);
                    }
                }
            }
        }

        let inspections = monkeys.map(o => o.inspections).sort((a,b) => b - a);
        let monkeyBusiness = inspections.shift() * inspections.shift();
        console.log(monkeys);


        return monkeyBusiness;
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return -1;
}



start();



