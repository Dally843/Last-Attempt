var book = document.querySelectorAll('.image')
// taged the picture element

function searchbookByGender() {
    // create a function to filter the searches
    var searchbook = document.getElementById("searchbook").value;
    //
    for (var i = 0; i < book.length; i++) {
        // going to each picture
        if (book[i].getAttribute('alt').toLowerCase().includes(searchbook.toLowerCase())) {
            //we create an if condition to chek if our search is matching to what is wriiten in alt with the build in includes
            //we getting the alt attribute by getAttribut
            book[i].classList.remove("is-hidden");
            // remove the is hiden class to show the images
        } else {
            book[i].classList.add("is-hidden");
        }
    }
}


var time;
var inter = 2000;
var input = document.getElementById('searchbook');

input.addEventListener('detect', () => {
    // we are youssing the detect key to now what is the key pressed
    clearTimeout(time);
    time = setTimeout(searchbookByGender, inter);
});




