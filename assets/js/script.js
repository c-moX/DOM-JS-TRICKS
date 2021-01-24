// Main JavaScript File

var authorBox = document.getElementsByTagName('article');
for(var i = 0; i < authorBox.length; i++){
    var element = authorBox[i];

    element.style.border = '1px solid tomato';
    element.style.borderRadius = '20px';
    element.style.margin = '5px';
    element.style.padding = '5px';
}
var authorContainer = document.getElementsByTagName('section');
for(var i = 0; i < authorContainer.length; i++){
    element2 = authorContainer[i];

    element2.style.display = 'flex';
    // element2.style.flexWrap = 'nowrap';
}


