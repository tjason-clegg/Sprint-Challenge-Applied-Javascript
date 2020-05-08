// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const newEntryPoint = document.querySelector('.cards-container')


articleMaker = (attrs) => {
    const {authorName, authorPhoto, headline} = attrs

    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const author = document.createElement('div')
    const cardImgContainer = document.createElement('div')
    const img = document.createElement('img')
    const cardName = document.createElement('span')

    card.appendChild(cardHeadline)
    card.appendChild(author)
    author.appendChild(cardImgContainer)
    cardImgContainer.appendChild(img)
    author.appendChild(cardName)

    card.classList.add('card')
    cardHeadline.classList.add('headline')
    author.classList.add('author')
    cardImgContainer.classList.add('img-container')

    cardHeadline.textContent = headline
    img.src = authorPhoto
    cardName.textContent = authorName

    return card
}

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {

    let cardInfo = Object.values(response.data.articles)
    cardInfo.forEach(newData => {

        newData.forEach(cardData => {

            const topicCard = articleMaker(cardData)
            
            newEntryPoint.appendChild(topicCard)
        })

    })

})