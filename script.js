const sendcore = document.getElementById('send-core'); 
const text = document.getElementById('grab-cote')
const author = document.getElementById('author-name')

function submit (text, author) {
    console.log(text, author)
    
}

sendcore.addEventListener('click' , () => {
    
})

function addQuote(quote, author) {
    const div = document.createElement('div')
    div.className = 'quote'
    
    const newDiv = document.createElement('p')
    newDiv.className = 'text'
    
    const newContent = document.createElement('p')
    newContent.className = 'author'
    
    const quoteList = document.getElementById('quote-list')
    quoteList.appendChild(newDiv)


}
