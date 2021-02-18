let formElement = document.querySelector('[data-submit-form]')
let textMessage = document.querySelector('[data-text]')
let messagesList = document.querySelector('.messages-ul')
let inputFileElement = document.querySelector('.file-input')
let paperclipButton = document.querySelector('.paperclip-icon')
let submitButton = document.querySelector('[data-submit]')


let messages = []

/* TEXT TO MESSAGE */
textMessage.addEventListener('keyup', event => {
    if(event.keyCode === 13){
        submitButton.click()
    }
})

submitButton.addEventListener('click', event => {
    event.preventDefault()

    textToMessage(textMessage.value)
})

function textToMessage(value) {
    messages.push(value)
    renderMessages(messages)
    formElement.reset()
    textMessage.focus()
}

function renderMessages(array) {
    messagesList.textContent = ""

    array.forEach((message, index) => {
        let newMessage = document.createElement('li')
        newMessage.classList.add('messages-li')
        newMessage.setAttribute('id', `message${index}`)
        let newText = document.createElement('p')
        newText.classList.add('sent-text')
        newText.textContent = message
        newMessage.appendChild(newText)
        messagesList.appendChild(newMessage);
        window.scroll({
            top: 2500,
            left: 0,
            behavior: 'smooth'
        })
    });

    location.href = '#message' + (array.length - 1)
}

renderMessages(messages)


/* FILE INPUT */
paperclipButton.addEventListener('click', () => {
    inputFileElement.click()
})


