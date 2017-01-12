function bubbleSort(array) {
	let sorted = array.length < 2 ? true : false,	
	lastIndex = array.length;

	while(!sorted){
		let madeSwap = false;
		for (var i = 0; i < lastIndex - 1; i++){
			if (array[i] > array[i+1]){
				array = swap(array, i, i+1);
				madeSwap = true;
			}
		}
		if (!madeSwap)
			sorted = true;
		lastIndex--;
	}
	return array;
}

function swap(arr, i, j){
	temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
}