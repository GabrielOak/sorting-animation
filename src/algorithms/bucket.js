import utils from './utils';


let callback, rows;
let result = [];
let aux = [];
let r = [];
let size = 90;
let stillSwapping = true;
let swappingAt = 0;
let madeSwap = false;
let endIndex;

function bucket(inputRows, update) {
	rows = inputRows;
	callback = update;
	r = [];
	rows.forEach(ganerateBuckets);
	callback(r);
	sortStep();
	setTimeout(() => callback(aux), 1000);
}

function sortStep() {

  endIndex = rows.length - 2;
  stillSwapping = true;
  swappingAt = 0;
  madeSwap = false;

	bubble();
}

// function sort(row) {
// 	row = mergeSort(row);
// 	aux.push(row);
// }

function ganerateBuckets(row) {
	result = [];
	aux = [[], [], [], []];

	for (let i = 0; i < row.length; i++) {

		if (row[i] <= size) {
			aux[0].push(row[i]);
		} else if (row[i] > size && row[i] <= size * 2) {
			aux[1].push(row[i]);
		} else if (row[i] > size * 2 && row[i] <= size * 3) {
			aux[2].push(row[i]);
		}
		else if (row[i] > size * 3 && row[i] <= size * 4) {
			aux[3].push(row[i]);
		}

	}

	result = result.concat(aux[3], aux[2], aux[1], aux[0]);
	r.push(result);

	return r;
}

function bubble(){

  r.forEach(iterateOnRow);
  callback(r);

  cleanup();

  if (stillSwapping) { setTimeout(bubble, 0); }
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

function iterateOnRow(row) {
  const didSwap = swapAtIndexIfNeeded(row);
  if (!madeSwap && didSwap) { madeSwap = true; }
}

function swapAtIndexIfNeeded(row) {
  const first = row[swappingAt];
  const second = row[swappingAt + 1];
  if (second > first) {
    utils.swap(row, swappingAt, swappingAt + 1);
    return true;
  }
}

export default bucket;