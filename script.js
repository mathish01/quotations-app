const form = document.getElementById('quote-form'); 
const text = document.getElementById('grab-cote')
const author = document.getElementById('author-name')



form.addEventListener('submit' , (e) => {
    e.preventDefault();
    console.log("ok")


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

    newDiv.document.getElementById("text").textContent = quote 
    newContent.document.getElementById("author").textContent = author 


}
