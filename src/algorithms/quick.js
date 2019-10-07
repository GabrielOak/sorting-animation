import utils from './utils';

let callback, rows, position = 0, storeIndex = 1;
let pivot;

function quick(inputRows, update){
    rows = inputRows;
    callback = update;
    position = 0;
    storeIndex = 1;
    sortStep();
}

function sortStep() {
    rows.forEach(iterateOnRow);
    callback(rows);
    position++
    console.log(position);
    
    if (position <= 40) { setTimeout(sortStep, 0); }
}

function iterateOnRow(row) {
    pivot = row[0];
    if(row[position] < pivot) {
        utils.swap(row, position, storeIndex);
        storeIndex++;
    }
}

export default quick;