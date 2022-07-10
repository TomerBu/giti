function targil2() {
    const arr = [];
    for (let i = 1; i <= 100; i += 2) {
        //add elements to the array: (ul -> li*100)
        arr.push('<li>' + i + '</li>');
    }

    document.getElementById('numbers').innerHTML = arr.join('');
}



function targil3() {
    document.body.innerHTML += '<h1 class="btn text-bg-danger">Welcome Back!</h1>'

    const arr = ["HTML", "CSS", "JS", "Java", "Android", "Spring", "Python"];

    let ol = document.getElementById('topics');

    for (let i = 0; i < arr.length; i++) {
        //0 to 6
        ol.innerHTML += '<li class="list-group-item">' + arr[i] + '</li>';
    }
}

function targil4() {
    const images = [
        'images/img_lights.jpg',
        'images/img_mountains.jpg',
        'images/img_nature.jpg',
        'images/img_snow.jpg'
    ];

    const gallery = document.getElementById('gallery');

    for (let i = 0; i < images.length; i++) {
        gallery.innerHTML += `
            <img src="${images[i]}">
        `
    }

    gallery.innerHTML += `
           <div class="highlighted">
            <img src="` + images[i] + ` ">
            <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
    `
}
//targil4();



// const myAudioTag = document.getElementById('trex-audio-tag');
// function playMusic() {
//     myAudioTag.play();
// }

// function pauseMusic() {
//     myAudioTag.pause();
// }



const images = [
    'images/img_lights.jpg',
    'images/img_mountains.jpg',
    'images/img_nature.jpg',
    'images/img_snow.jpg'
];

let index = 0;
const imageTag = document.getElementById('image-gallery__image');

function next() {
    index++;
    ////0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3
    index = index % images.length;
    imageTag.src = images[index];
}

function back() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    imageTag.src = images[index];
}

