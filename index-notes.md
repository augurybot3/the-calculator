INSTRUCTIONS:

Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.

add
subtract
multiply
divide

<script>
    function add(a,b){
        let c = a + b;
        return c;

    };
    function subtract(a,b){
        let c = a - b;
        return c;
    };
    function multiply(a,b){
        let c = a * b;
        return c;
    };
    function divide(a, b){
        let c = a / b;
        return c;
    }

// CONCEPT IMPROVEMENT:

// Having started my calculator by using an editable <input> field I realized that, a cool unique value add for a feature would be to allow the user to select and copy the results of the calculations. This is an automatic benefit of using the <input> element. However this causes some problems... mainly that, if a user then types into the input field without first clicking outside of it.... the numbers are not treated the same as inputs from the buttons on the screen or the key down events from the keyboard. 

//In order for the functionality to work properly the user cannot have the cursor actively engaged or focused in the input field if they are using their keyboard keypad to enter the values (as opposed to the interface buttons, which are triggered by mouse click events). 

// so, some rule still needs to be written that does not allow direct cursor access by the user to the display screen.

// of some other rule system which disengages the user's keyboard functionality with an exception made fo "cmnd+c" in order to copy the results to the clipboard.

// but for now, it's pretty easy and natural even, to break the program IF the user attempts to copy by using their cursor to highlight and select the results from the <input> field. It's inevitable even.

//which then defeats the purpose of the <input> element and decreases the novelty value of being able to copy the results to the clipboard.

// the other option is to disable the input field all-together as editable and instead to create a copy button.

// Here is some code i was starting to write in order to implement that. Not entirely sure how I would want this to work and where and how I might dynamically populate the DOM with a new "copy to clipboard" button.

// truthfully all of this
// of course is a lot further beyond the scope of my assignments and a pretty unnecessary feature
// I'm supposed to be moving forward and ultimately I need to 
// manage my time more efficiently. I hope to return to this issue if it seems like any of this may be usable as some sort of portfolio project. 



function copyToClipboard() {
    var copyText = document.getElementById("display");
    copyText.select();
    copyText.setSelectionRange(0, 9999999999999999999999999999999999);
    navigator.clipboard.writeText(copyText.value);
};
function createCopyButton() {
    const mainContainer = document.getElementById('button-container');
    const newKey = document.createElement('button')
    const node = document.createTextNode("copy");
    newKey.appendChild(node);
    newKey.setAttribute("class", "clipboard-button");
    mainContainer.appendChild(newKey);
    let copyResult = document.getElementById("copyResult");
    copyResult.addEventListener("click", copyToClipboard);

};

const interactiveButton = () => {
hoverInput.addEventListener("mouseover", function (event) {
    createCopyButton();
    event.target.style.color = "red";
    event.target.style.fontSize = "1.8rem";

}, false);
};





    


</script>