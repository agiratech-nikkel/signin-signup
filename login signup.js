window.onload = function onLoadingFirst() {
    changeTab('SignIn')
}

function changeTab(selected) {
    var x = document.getElementById("signinde");
    var y = document.getElementById("signupde");
    console.log(x)
    if (selected == 'SignIn') {
        x.style.display = "block";
        y.style.display = "none";
    } else if (selected == 'SignUp') {
        x.style.display = "none";
        y.style.display = "block";
    }
}