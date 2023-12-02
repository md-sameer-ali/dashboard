ClassicEditor
    .create(document.querySelector('#editor2'))
    .then(editor => {
        console.log(editor);
    })
    .catch(error => {
        console.error(error);
    });