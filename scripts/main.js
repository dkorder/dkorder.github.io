let myImage = document.querySelector('img');

myImage.ondblclick()=functuin (){
    let mySrc = myImage.getAttribute('src');
    myImage.setAttribute('src','images/firefox2.png');
} else {
    myImage.setAttribute('src','images/firefox-icon.png');
}