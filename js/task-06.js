const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', event => {
    const elRef = event.currentTarget;

    if (elRef.value.length === Number(elRef.dataset.length)) {
        elRef.classList.add('valid');
        elRef.classList.remove('invalid');

        return;
    };

    elRef.classList.add('invalid');
})