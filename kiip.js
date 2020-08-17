window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function refreshPage(){
    window.location.reload();
} 

// for popup 
function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') {
        document.getElementById('ac-wrapper').style.display = "none";
    }
    else  if(localStorage.getItem("popupWasShown") == null) {
        localStorage.setItem("popupWasShown",1);
        document.getElementById('ac-wrapper').removeAttribute('style');
    }
}
window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 0);
}


function hideNow(e) {
    if (e.target.id == 'ac-wrapper') document.getElementById('ac-wrapper').style.display = 'none';
}