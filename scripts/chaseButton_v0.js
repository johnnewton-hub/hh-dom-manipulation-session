//Chase the button

// STEP 1: capture the button in a variable

let button = document.querySelector("button");
console.log(button);

// STEP 2: wire up the button
// add onclick attribute to html and assign this function as onclick's value

function chaseButton(){
    // variables that are initiated inside a function will be re-initiated every time the function is called
    // this can act as a 'reset' feature in an app that manages the state of data.
    let arrayOfNums = [1,2,3,4,5,6,7,8,9];
    console.log(arrayOfNums);

    // STEP 3: remove the parent number from the array
    // STEP 3.1: capture the parent section's number from their className, and make sure it is in the right datatype
    let parent = button.parentElement;
    console.log(parent);
    // once we have the HTML element trapped inside our JS variable 
    // we can isolate the element's attributes into their own variables if we want
    let parentClassName = parent.className;
    console.log(parentClassName);
    // HTML will not let us have class names that start with a number so I just named the classes s + num
    // This means that to get the number back out of the class name we have to strip the 's' off of it
    parentClassName = parseInt(parentClassName.replace('s', ''));
    console.log(parentClassName);

    // STEP 3.2: removing a specific element from the array
    // (we remove the current parent number or else there is a 1 in 9 chance the button will not move when we click it)
    
    // to get a specific element out is a three-step process
    // 3.2.1: loop through each element in the array
    for( var i = 0; i < arrayOfNums.length; i++){ 
        // 3.2.2: compare the current element [i] with the search value parentClassName
        if ( arrayOfNums[i] === parentClassName) {
            // 3.2.3: remove that element out of the array using splice
            arrayOfNums.splice(i, 1); 
        }
    }
    console.log(arrayOfNums);

    // STEP 4: select a new parent

    // STEP 4.1: Pick a random number from what's left of the array
    // (REMEMBER that we removed the original parent number already)
    // this is how you get a random element out of the array.
    // arrayOfNums[] <----- the code that goes inside these brackets MUST return an integer that is between 0 and 8
    // The returned value is not between 1 and 9 because if you think about it 1-9 represents the gameboard.
    // We need to find a random element in our ARRAY, not a random spot on the BOARD
    let newParentClassName = arrayOfNums[Math.floor(Math.random() * arrayOfNums.length)];
    // console.log(newParentClassName);
    // HTML will not let us have class names that start with a number so I just named the classes s + num
    newParentClassName = 's'+newParentClassName;
    // console.log(newParentClassName);
    // Make sure we actually have the element in our grasp - notice how the method returns a collection elements and we only want one.
    let newParent = document.getElementsByClassName(newParentClassName)[0];
    // console.log(newParent);

    // STEP 5: Move the button
    // button.parentElement = newParent; //Doesn't work
    newParent.appendChild(button);
    // This seems to take care of all the steps I was going to do next. 
    // Last time I wrote a program like this I had to shuffle the one value 
    // into a temp variable before I could remove it from the first container 
    // and then add it to the next container.

    // That may have been in a different language from a long while ago. If this works then I am happy with it!

}