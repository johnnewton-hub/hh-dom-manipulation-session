//REFACTOR
//STEP 1: Remove console.log statements and comments
//STEP 2: All variable declarations should be as high up in the code as possible
//          (this lets future devs see what they are working with as an overview to the file)
//STEP 3: I condensed some code by looking at one variable at a time. 
//          I look at everything I did to that variable and I try to see if I can do it all at once, or as much as I can at once
//          If one variable depends on another then this becomes trickier, but parentClassNum was pretty easy to get in one line
//          I also renamed it to parentClassNum instead of parentClassName because semantic names are important!
//          For the sake of consistency I changed the code so that newParentClassName is a string and newParentClassNum is an int
//STEP 4: The .splice() method's first parameter is an int representing the index of the element we want to delete
//          I realized that we don't need to loop through the array to find a match because my array is an ORDERED list of ints
//          Because I am working with an ORDERED list, my values are almost the same as the indexes. 
//          The value is actually equal to index + 1! 
//          This means I can delete the whole loop and just subtract 1 from the parentClassNum and splice the array there
//STEP 5: Just like in STEP 3, I'm looking at newParentClassName and realizing I can make that a one-liner
//STEP 6: Repeating the same as STEP 5 one more time. Really just folding all of this newParent code into one liners if I can.
//STEP 7: I can get rid of the parent variable too!
//STEP 8: I like to break up the one-liners a bit to make them more human-readable. I usually put a line-break before each . as a start
//          But more importantly - I also step back and READ my own code. 
//STEP 9: I was testing my code and noticed that sometimes the button wouldn't move away.
//          This was because I had moved the newParent logic up higher in the code!
//          My splice wasn't happening until after I had already picked the new spot for the button. 
//          THANK GOODNESS I WAS THOROUGHLY TESING MY APP AFTER EACH CHANGE.... (1 in 9 chance of finding the bug)
//STEP 10: For this step I did nothing. 
//          But I THOUGHT about maybe cramming everything from parentClassNum into the splice call.
//          I feel like this would have made my code less human-readable.
//          At this point I am done refactoring. I'm just going to style my code...
//STEP 11: Style guides can be used to help you refactor code: https://www.w3schools.com/js/js_conventions.asp
//          Adding spaces between values and parenthesis ( value )
//          Adding spaces after commas
//          (I never listen to rules about indenting exactly 2 spaces, but you can if you want to)
//          Use one space before opening { on functions
let button = document.querySelector("button");

function chaseButton() {
    let arrayOfNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    let parentClassNum = parseInt(
        button.parentElement
            .className
            .replace( 's', '' )
        );

    arrayOfNums.splice(( parentClassNum - 1 ), 1);

    let newParent = document.getElementsByClassName(
        's' +
        arrayOfNums[ Math.floor( Math.random() * arrayOfNums.length )]
    )[ 0 ];
    
    newParent.appendChild( button );
}