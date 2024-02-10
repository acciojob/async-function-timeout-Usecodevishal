//your JS code here. If required.
let outPrint = document.getElementById("output");
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
	let inputText = document.getElementById("text");
	let delay = document.getElementById("delay");
	printAfterDelay(inputText.value,delay.value).then((res) => console.log(res));
})

async function printAfterDelay(input, delay){
	return await new Promise((req,res) => setTimeout(() => res(
		outPrint.innerText = `${input}`
	),delay))


}