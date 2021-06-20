let selectCount = document.getElementById('GET-count');


selectCount.onclick = function () {
    if (selectCount.value == 'russia'){
        console.log('ok-test!')
        selectCount.style.backgroundImage = 'url(./assets/images/flag.png)'
    } else{
        selectCount.style.backgroundImage = 'none'
    }

    console.log(selectCount.value);  

}

