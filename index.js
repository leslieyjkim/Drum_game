document.querySelector("button").addEventListener("click", handleClick); //This event listener linked only to 'first drum button.'

//question: codeline#1, handleClick() or handleClick which one would be correct?
//Answer: handleClick 
// You need to pass the function reference, not the result of calling the function, to addEventListener.
//handleClick() would immediately execute when the script runs, 
//and its return value (which is undefined in this case) would be passed to addEventListener. 
//By removing the parentheses (), you're passing the reference to the function instead, which is what you want.
//We want it to trigger when the click happens.

//So in that case, instead of calling our function as we would with the (),
//we're passing in just name of the function as an input without ().

//That means we're waiting for this click event to happen before we call the handleClick function. 

function handleClick() {
    alert("I got clicked");
}


// alert("test!"); //for test linked up properly in index.html