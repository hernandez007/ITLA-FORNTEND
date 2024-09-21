const name = document.querySelector('#name'),
    subject = document.querySelector('#subject'),
    email = document.querySelector('#email'),
    phone = document.querySelector('#phone'),
    message = document.querySelector('#message'),
    nameRegex = /^[a-zA-Z\s]{1,90}$/,
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phoneRegex = /^\d{10}$/,
    alphaNumeric = /^[A-Za-z0-9]/,
    subjectError = document.getElementById('subjectError'),
    nameError = document.getElementById('nameError'),
    emailError = document.getElementById('emailError'),
    phoneError = document.getElementById('phoneError'),
    messageError = document.getElementById('messageError'),
    contactForm = document.getElementById('contactForm'),
    messageValidateLimet = "Superaste el numero de caracteres de",
    messageValidateFieldBlank = "Campo en blanco ",
    messageValidateFormat = "Formato invalido ",
    btnSend = document.querySelector('#btnSend');
let isValid,
    urlPost = "https://us-central1-formsmetaitla.cloudfunctions.net/registrarContacto",
    urlGet = "https://us-central1-formsmetaitla.cloudfunctions.net/obtenerContactos";

btnSend.addEventListener('click',async (e)=>{
    e.preventDefault();
    isValid = true;
    // await petitionFormGET(urlGet,'GET');

    await validationForm(name,90,nameError,messageValidateFieldBlank,messageValidateLimet,messageValidateFormat,nameRegex);
    await validationForm(subject,100,subjectError,messageValidateFieldBlank,messageValidateLimet,messageValidateFormat,alphaNumeric);
    await validationForm(email,100,emailError,messageValidateFieldBlank,messageValidateLimet,messageValidateFormat,emailRegex);
    await validationForm(phone,11,phoneError,messageValidateFieldBlank,messageValidateLimet,messageValidateFormat,phoneRegex);
    await validationForm(message,300,messageError,messageValidateFieldBlank,messageValidateLimet,messageValidateFormat,alphaNumeric);

    if (isValid) {
        const objInfoForm = {
            nombre:name.value,
            asunto:subject.value,
            email:email.value,
            telefono:phone.value,
            mensaje:message.value,
        }

        const response = await petitionForm(urlPost,objInfoForm,'POST');

        alert(response.status,response.mensaje);
        contactForm.reset();
        // Aquí puedes agregar el código para enviar el formulario
    }

})
async function messageValidation(isValide, field, classCss, fieldError,messageError) {

    if (!isValide) {
        field.classList.add(classCss);
        fieldError.textContent = messageError;
        isValid = false;
        return
    }
    field.classList.remove(classCss);
    fieldError.textContent = '';
    return 
}

async function validationForm(field,limet,fieldError,messageValidateFieldBlank,messageValidateLimet,messageValidateFormat,regexValidate) {
   
   
    if (field.value.trim() === "" || field.value === null) {
        await messageValidation(0,field, 'error', fieldError,messageValidateFieldBlank);
        return;
    }
    if (field.value.length > limet) {
        let messageComplete = `${messageValidateLimet} ${limet}` 
        await messageValidation(0,field, 'error', fieldError,messageComplete );
        return;
    }
    if (!regexValidate.test(field.value)) {
        await messageValidation(0,field, 'error', fieldError,messageValidateFormat);
        return;
    }
    await messageValidation(1,field,'error',fieldError,'')
    return;

}

async function petitionForm(url,objInfo,method) {
    const options = {
        method: method, // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(objInfo) 
    }

    try {
        const res = await fetch(url,options)
        const resJSON = await res.json()
        console.log(resJSON)
        return resJSON

    } catch (error) {
        console.error(error)
    }


}
async function petitionFormGET(url,method) {
    const options = {
        method: method, // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }

    try {
        const res = await fetch(url,options)
        const resJSON = await res.json()
        console.log(resJSON)
        return resJSON

    } catch (error) {
        console.error(error)
    }


}

