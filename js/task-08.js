const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
event.preventDefault()

const email = event.currentTarget.elements.email.value
const password = event.currentTarget.elements.password.value

if (!email || !password) {
alert('Будь-ласка заповніть форму')
return
}

const formData = {
email: email,
password: password
}

console.log(formData)

event.currentTarget.reset()
}






