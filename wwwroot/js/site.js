function Play_audio() {
    var file_input = document.getElementById('file');
    console.log(file_input.files[0]);
    var audio = new Audio(file_input.files);
    audio.play();
}