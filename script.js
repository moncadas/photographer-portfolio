function filterPhotos(type) {    
    let photos = document.getElementsByClassName('pic')

    for (i=0; i<photos.length; i++) {
        if (photos[i].className.includes("hidden")) {
            photos[i].className = photos[i].className.replace("hidden", "")
        }
    }

    if (type !== '') {
        for (i=0; i<photos.length; i++) {
            if (!photos[i].className.includes(type)) {
                photos[i].className += " hidden"
            }
        }
    }    
}

function sendMail() {
    let questionForm = document.getElementById('question')
    let nameArea = document.getElementById('name')
    let surnameArea = document.getElementById('surname')

    if (questionForm.value !== "" && nameArea.value !== "" && surnameArea.value !=="") {
        alert(`Thanks for reaching me, I'll get in touch as soon as possible!`)
        questionForm.innerHTML = nameArea.innerHTML = surnameArea.innerHTML = ""
    } else {
        alert('Fill every information before clicking Submit')
    }    
}