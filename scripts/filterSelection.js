//The main function for taking the selected button as input and calling the function to show/hide postings.
function filterSelection(selection) {
    //The variable represents the element of posting.
    var content; 
    content = document.getElementsByTagName("span");

    //If the persona selects “all” then set the selection variable to be empty string
    if (selection == "all"){
        selection = "";
    }

    //Call the showHide function to show or hide the posting
    showHide(content, selection);
}

//The function that takes the content of the postings and user selection as input. Based on the user selection, show or hide the posting section.
function showHide(content, selection){
    //The index of the loop that going through the elements.
    var i;

    //Loop through every element in content
    for (i = 0; i < content.length; i++) {
        if (content[i].className.indexOf(selection) > -1) {
            //If the title contains the filter string then show the element.
            content[i].style.display = "block";
        }
        else {
            //Otherwise hide the block.
            content[i].style.display = "none";
        }
    }
}