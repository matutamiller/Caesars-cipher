document.getElementById('symbol').oninput = function(){
	//to cyfer
	const offset = 3;
	//code to symbol
	let str = this.value;
	//symbol to code
	console.log(str.charCodeAt(0));
	let out = '';
	for (let i=0; i< str.length; i++){
		let code = str.charCodeAt(i);
		code = code + offset;
		out += String.fromCharCode(code);
	}
	document.getElementById('code').innerHTML = out;
}
	
	//to decyfer
document.getElementById('cyfer').oninput = function(){
	const offset = 3;
	let str = this.value;
	let out = '';
	for (let i=0; i< str.length; i++){
		let code = str.charCodeAt(i);
		code = code - offset;
		out += String.fromCharCode(code);
	}
	document.getElementById('decyfer').innerHTML = out;
}