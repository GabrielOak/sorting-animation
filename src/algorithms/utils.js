import {shuffle} from 'underscore';
let temp;

export function swap(row, indexA, indexB) {
  temp = row[indexB];
  row[indexB] = row[indexA];
  row[indexA] = temp;
};

export function rand(min, max) {
  return Math.floor(Math.random() * (max-min));
};

export function randomColor() {
  let h;
  let s = 100;
  let l = 50;
  h = rand(1, 360);
  return `hsl(${h},${s}%,${l}%)`;
};

export function randomId() {
  return Math.random() * 1000;
}

export function completeRandomColor(){
  let y= [];
  let h = 0;
  for(var i=0; i<40; i++){
    y.push(h);
    h+=9;
  }
  return Array.from(shuffle(y));
}

export default {
  swap,
  randomColor,
  randomId,
};
