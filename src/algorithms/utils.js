let temp;

export function swap(row, indexA, indexB) {
  temp = row[indexB];
  row[indexB] = row[indexA];
  row[indexA] = temp;
};

export function getColor(hslString) {

  return +hslString.split(',')[0].substring(4);

};

export function rand(min, max) {
  return parseInt(Math.random() * (max-min), 10);
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

export default {
  swap,
  getColor,
  randomColor,
  randomId,
};
