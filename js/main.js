//JavaScript Document
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
    if (xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
        console.log(myStuff[0]);
        console.log(myStuff[1].first);
        console.log(myStuff[2].last);
    } // end of the if
} // end of the onload function
