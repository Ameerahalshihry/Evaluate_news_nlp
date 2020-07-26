function handleSubmit(event) {
    event.preventDefault()
    console.log("hi")
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForUrl(formText)

    console.log("::: Form Submitted :::")
    fetch("http://localhost:8081/test", {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({ text: formText})
        })
        .then(res => res.json())
        .then(text => {
            console.log(text);
            document.getElementById('polarity').innerHTML =`polarity is ${text.polarity}` 
            document.getElementById('subjectivity').innerHTML = `subjectivity is ${text.subjectivity}`
            document.getElementById('polarity_confidence').innerHTML = `polarity confidence is ${text.polarity_confidence}`
            document.getElementById('subjectivity_confidence').innerHTML = `subjectivity confidence is ${text.subjectivity_confidence}`
            document.getElementById('text').innerHTML = `text is ${text.text}`
    })
    .catch(err =>{
        console.log(err);
    })
}

export { handleSubmit }
