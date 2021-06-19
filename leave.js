$(document).ready(function() {
    M.updateTextFields();
  });

$('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = data.get('email');
    console.log({ value });
    }
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);