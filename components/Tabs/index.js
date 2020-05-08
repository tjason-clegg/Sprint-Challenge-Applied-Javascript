// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


const entryPoint = document.querySelector('.topics')


axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        const theTopic = response.data.topics

        topicMaker(theTopic)
    })
    .catch(error => {
        console.log(error)
    })



const topicMaker = (tab)  => {
    
    
    for (let i = 0; i < tab.length; i++) {

        const newTopic = document.createElement('div')
        newTopic.textContent = `${tab[i]}`
        entryPoint.appendChild(newTopic)
        
        newTopic.classList.add('tab')
        
        //console.log(tab)
        
    }
    
}

