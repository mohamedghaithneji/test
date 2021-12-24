const btn =document.querySelector('button')
const inputs = document.querySelector('from')
btn.addEventListener('click', () => {
Email.send({
    Host:"smtp.mailtrap.io",
    Username:"a26db45682d74c",
    Password:"e4d3072d5c4215",
    To:"xyz@gm.com",
    From: inputs.elements["email"].value,
    Subject: "Contact Us Query By the Customer",
    Body:inputs.elements["message"].value + "<br>" +inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value
}).then(msg => alert("The email is successfully sent"))
})