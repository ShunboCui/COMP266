function textFilter() {
    //Get the text from the input box
    var input = document.getElementById("textInput");
    //Set the input text as filter
    var filter = input.value.toLowerCase();

    //Get all the cards in the document
    var card = document.getElementById("cardRow");
    var column = card.getElementsByTagName("span");
    
    var a, txtValue;
    //For every card, get the corresponding title
    for (var j = 0; j < column.length; j++) {
        a = column[j].getElementsByTagName("h4")[0];
        //Get the text in the title
        txtValue = a.textContent || a.innerText;
        //If the title includes the filter string, set the card to display
        if (txtValue.toLowerCase().includes(filter)) {
            column[j].style.display = "";
        //Else hide the card
        } else {
            column[j].style.display = "none";
        }
        
    }
}


// References:
//  https://www.w3schools.com/howto/howto_js_filter_lists.asp