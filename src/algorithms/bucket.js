let callback, rows;
let result = [];
let aux = [];
let r = [];
let size = 90;

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
	aux = [];
	r.forEach(sort);
}

function sort(row) {
	row = mergeSort(row);
	aux.push(row);
}

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

	result = result.concat(aux[0], aux[1], aux[2], aux[3]);
	r.push(result);

	return r;
}

function mergeSort(unsortedArray) {
	if (unsortedArray.length <= 1) {
		return unsortedArray;
	}
	const middle = Math.floor(unsortedArray.length / 2);

	const left = unsortedArray.slice(0, middle);
	const right = unsortedArray.slice(middle);

	return merge(
		mergeSort(left), mergeSort(right)
	);
}

function merge(left, right) {
	let resultArray = [], leftIndex = 0, rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			resultArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			resultArray.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return resultArray
		.concat(left.slice(leftIndex))
		.concat(right.slice(rightIndex));
}

export default bucket;