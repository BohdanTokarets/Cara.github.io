/*Show Image*/
const MainImg = document.getElementById('MainImg');
const smallImage = document.getElementsByClassName('small-img');;

smallImage[0].onclick = function(){
    MainImg.src = smallImage[0].src;
}

smallImage[1].onclick = function(){
    MainImg.src = smallImage[1].src;
}

smallImage[2].onclick = function(){
    MainImg.src = smallImage[2].src;
}

smallImage[3].onclick = function(){
    MainImg.src = smallImage[3].src;
}