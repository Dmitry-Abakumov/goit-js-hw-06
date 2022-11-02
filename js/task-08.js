const loginFormRef = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements.email.value === '' || formElements.password.value === '') {
        alert('Внимание! Все поля должны быть заполнены!');

        return;
    }

    const formObject = {
        email: formElements.email.value,
        password: formElements.password.value,
    };

    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     formObject[name] = value;
    // });

    console.log(formObject);
    event.currentTarget.reset();
};

loginFormRef.addEventListener('submit', onFormSubmit);
