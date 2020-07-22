const body = document.querySelector('body')
// console.log(body)

fetch('https://pokeapi.co/api/v2/pokemon/steelix')

.then(response => {
    // console.log(response)
    return response.json()
})

.then(data => {
    // console.log(data)
    // in console when open html if have curly object {its an object}
    let sprites = data.sprites
    // console.log(sprites) // to get data back
    let profilePic = sprites.front_shiny
    // console.log(profilePic)
    // get his name 
    let pokeName = data.name
    console.log(pokeName)
    //get hieght
    let pokeHeight = data.height
    //get weight
    let pokeWeight = data.weight
    // console.log(pokeHeight)
    // console.log(pokeWeight)
    //moves list
    let pokeMoves = data.moves
    // console.log(pokeMoves)
    let brutalSwing = data.moves[79].move.name
    // console.log(brutalSwing)
    let type = data.types[0].type.name
    // console.log(type)
    
    //creating and adding things wwe need then append
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.width = '18rem'
    // console.log(card)

    const image = document.createElement('img')
    image.src = profilePic
    image.classList.add('card-img-top')
    //alt is usefull for grabbing
    image.alt = pokeName
    console.log(image)
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body')
    console.log(cardBody)
    let firstLetter = pokeName.charAt(0).toUpperCase()
    let otherLetters = pokeName.slice(1)
    let finalName = firstLetter + otherLetters
    
    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    //pokenmae is a string toUpperCase is a method
    cardTitle.textContent = finalName
    console.log(cardTitle)
    
    const cardWeight = document.createElement('p')
    const cardHeight = document.createElement('p')
    const cardMove = document.createElement('p')
    const cardType = document.createElement('p')
    //now class type
    cardWeight.classList.add('card-text')
    cardHeight.classList.add('card-text')
    cardMove.classList.add('card-text')
    cardType.classList.add('card-text')

    cardWeight.textContent = 'Weight: ' + pokeWeight
    cardHeight.textContent = 'Height: ' + pokeHeight
    cardMove.textContent = 'Move: ' + brutalSwing
    cardType.textContent = 'Type:' + type
    // console.log(cardWeight)
    // console.log(cardHeight)
    // console.log(cardMove)
    // console.log(cardType)

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardWeight)
    cardBody.appendChild(cardHeight)
    cardBody.appendChild(cardMove)
    cardBody.appendChild(cardType)
    console.log(cardBody)
    // console.log(finalName)
    // console.log(otherLetters)
    // console.log(firstLetter)

    card.appendChild(image)
    card.appendChild(cardBody)
    console.log(card)

    body.appendChild(card)


})

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */