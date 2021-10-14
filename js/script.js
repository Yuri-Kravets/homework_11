let enterNum = +prompt('введите число');


let result = true;
for (let i = 2; i < enterNum; i++) {

	if (enterNum % i === 0) {
		result = false;
		break; 
	}
}

console.log(result);