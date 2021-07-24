
let input = document.getElementById('input-task');
let ul = document.querySelector("ul");
let enterButton = document.getElementById('enter');
let date = document.getElementById('date');
const day = new Date();
date.innerHTML = day.toDateString();

let key = "taskList"

function createListElement(){
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.className = "list-group-item";
	ul.appendChild(li);
	input.value = "";

	let dBtn = document.createElement("button");
	dBtn.className = "btn btn-danger";
	dBtn.id = "close-btn";
	dBtn.appendChild(document.createTextNode('X'));

	li.appendChild(dBtn);

	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		//console.log("hi");
		this.closest(".list-group-item").remove();
	}
}

function addListAfterClick(){
	let inputLength = input.value.length;
	if(inputLength > 0){
		createListElement();
	}
	else{
		alert('Do something... Today is a great Day!')
	}
}

enterButton.addEventListener("click", addListAfterClick);