import utils from './utils';

let rows, callback, gap, position; 

function shell(input, update){
    rows = input;
    callback = update;
    position = 0;
    gap = 20;
    sortStep();
}

function sortStep(){
    rows.forEach(sort);
    position++;

    callback(rows);
    if(position <= 40) { 
        setTimeout(sortStep, 0);
    }
    else if(gap >=1){
        position = 0;
        gap = Math.floor(gap/2);

        sortStep();
    }else{
        rows.forEach(finalSort);
        callback(rows);

    }
}

function sort(row){
    if(position + gap <=40){
        if(row[position] < row[position+gap]){
            utils.swap(row, position, position+gap);
        }
    }
}

function finalSort(row){
    row = insertionSort(row);
}

function insertionSort(inputArr){
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};


export default shell;