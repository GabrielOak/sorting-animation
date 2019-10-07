import utils from './utils';

let rows, callback, gap, position; 
let h =0;

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
	else if(gap >2){
		position = 0;
		gap = Math.floor(gap/2);

		sortStep();
	}else{
		position = 0;
		bubble();

	}
}

function sort(row){
	if(position + gap <=40){
		if(row[position] < row[position+gap]){
			utils.swap(row, position, position+gap);
		}
	}
}

function bubble(){
	h +=9;
	rows.forEach(iterateOnRow);
  callback(rows);
	position++;

  if (position <40) { setTimeout(bubble, 0); }
}

function iterateOnRow(row) {
	row[position] = h;

}

export default shell;