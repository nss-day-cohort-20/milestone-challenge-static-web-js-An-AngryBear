// object to hold tree values

let tree = {
	height: 0,
	character: null
};		

// DOM Elements

const heightInputField = document.getElementById("user-input-height"),
	characterInputField = document.getElementById("user-input-char"),
	growButton = document.getElementById("grow-button");

// set height and char of tree based on input values

function treeValues() {
	tree.height = heightInputField.value;
	tree.character = characterInputField.value;
	console.log(tree);
}

// takes in an object and outputs a tree in the console

function treeBuilder(input) {
	treeValues();
	let treeOutput = "",
		treeSpacing = " ",
		spaceCounter = input.height,
		characterCounter = 1;
	for (var i = 0, x = input.height; i < x; i++) {
		treeOutput += (treeSpacing.repeat(spaceCounter)) + (input.character.repeat(characterCounter)) + (treeSpacing.repeat(spaceCounter)) + "\n";
		spaceCounter--;
		characterCounter += 2;
	}
	console.log(treeOutput);
}

// triggers validation on click. if passed, triggers tree builder function

growButton.addEventListener("click", function() {
	if (validation()) {
	treeBuilder(tree);
	}
})

// listens for enter key on either input field

heightInputField.addEventListener("keydown", enterAsSubmit);
characterInputField.addEventListener("keydown", enterAsSubmit);

function enterAsSubmit() {
	if (event.keyCode == 13) {
		growButton.click();
	}
}

// invalidates empty values for both inputs; invalidates spaces as a input character

function validation() {
	if (characterInputField.value === " ") {
		characterInputField.value = "";
	}
	if (heightInputField.value === "" || characterInputField.value === "") {
		alert("Please enter a valid character in both input fields");
		return false;
	} else {
		return true;
	}
}
