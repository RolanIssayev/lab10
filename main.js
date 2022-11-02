let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 4, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 0, 5, 10];
let lab8 = [5, 10, 9, 10, 5];

function get_sum(lab) {
    // body of the function
    let sum = 0;
    for (let i = 0; i < lab.length; i++) {
        sum += lab[i];
        }
    return sum;
    }

let sum1 = get_sum(lab1);
let sum2 = get_sum(lab2);
let sum3 = get_sum(lab3);
let sum4_5 = get_sum(lab4_5);
let sum6 = get_sum(lab6);
let sum8 = get_sum(lab8);
let sums = [sum1, sum2, sum3, sum4_5, sum6, sum8];

function main(lab1, lab2, lab3, lab4_5, lab6, lab8) {
    // body of the function
    let obj = (get_sum(lab1) + get_sum(lab2) + get_sum(lab3) + get_sum(lab4_5) + get_sum(lab6) + get_sum(lab8)) * 0.2142857143 + 32;
    return obj;
    }

const results = {
    lab1: [lab1[0], lab1[1], lab1[2], lab1[3], lab1[4], lab1[5], lab1[6]], // array of scores for lab1
    lab2: [lab2[0], lab2[1], lab2[2], lab2[3], lab2[4], lab2[5], lab2[6]], // array of scores for lab2
    lab3: [lab3[0], lab3[1], lab3[2], lab3[3]], // array of scores for lab3
    lab4_5: [lab4_5[0], lab4_5[1], lab4_5[2], lab4_5[3], lab4_5[4], lab4_5[5], lab4_5[6], lab4_5[7], lab4_5[8], lab4_5[9], lab4_5[10]], // array of scores for lab4 and 5
    lab6: [lab6[0], lab6[1], lab6[2], lab6[3], lab6[4], lab6[5]], // array of scores for lab6
    lab8: [lab8[0], lab8[1], lab8[2], lab8[3], lab8[4]],
    quiz1: 32, // score of quiz1
    sums: [sums[0], sums[1], sums[2], sums[3], sums[4], sums[5]], // array of sums of each lab
    total_score: main(lab1, lab2, lab3, lab4_5, lab6, lab8), // computed total score
    }

console.log(results);