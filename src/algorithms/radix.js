import utils from './utils';

let callback, rows, endIndex, getColor;
let stillSwapping = true;
let swappingAt = 0;
let madeSwap = false;

function iterateOnRow(row) {
  const didSwap = swapAtIndexIfNeeded(row);
  if (!madeSwap && didSwap) { madeSwap = true; }
}

function cleanup() {
  if (swappingAt === endIndex) {
    swappingAt = 0;
    endIndex = endIndex === 0 ? 0 : endIndex - 1;
    if (!madeSwap) {
      stillSwapping = false;
    } else {
      madeSwap = false;
    }
  } else {
    swappingAt++;
  }
}

function sortStep() {
  rows = [];
  callback(rows);

  cleanup();

  if (stillSwapping) { setTimeout(sortStep, 0); }
}

function radix(inputRows, updateCB) {
  getColor = utils.getColor.bind(null);
  rows = inputRows;
  callback = updateCB;
  endIndex = rows.length - 2;
  stillSwapping = true;
  swappingAt = 0;
  madeSwap = false;
  sortStep();
}

export default radix;