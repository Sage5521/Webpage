let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Research-Scene-Vector.svg') {
      myImage.setAttribute('src','images/Laptop-Typing-Scene-Vector.png');
    } else {
      myImage.setAttribute('src','images/Research-Scene-Vector.svg');
    }
}

let figcaption = document.querySelector('figcaption');
