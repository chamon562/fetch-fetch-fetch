console.log('This Works');
const container = document.querySelector('.container')
console.log(container)
//fetch calls
//this fetch is like a function passing url in function
fetch('https://api.spacexdata.com/v3/capsules')
//when return say .then()
.then(response =>{ 
    //return srespone .json
    console.log(response)
    return response.json()

})
.then(data => {
    // console.log(data)
    // const firstElement = data[0]
    // console.log(firstElement)
    // let capsuleID = firstElement.capsule_id;
    // console.log(capsuleID)
    // let details = firstElement.details
    // console.log(details)
    // let landings = firstElement.landings
    // console.log(landings)
    //iterate through array with for loop 
    for (let i = 0; i < data.length; i++){
        let eachCapsule = data[i]
        console.log(eachCapsule)
        //create an object
        const obj = {
            //can put in key value pairs
            //made a key: then grabed eachCapsule variable we made 
            //. whatever data we want,  details, landings capsule
            capsuleId: eachCapsule.capsule_id,//dragon1
            details: eachCapsule.details,//some sentence
            landings: eachCapsule.landings// 1

        }
        console.log(obj)

        //create element for ID capsule details and landings
        const capsuleElement = document.createElement('p')
        //it iterates to obj and goes through the content
        capsuleElement.textContent = obj.capsuleId
        //when append it shows all elements
        // we have for loop thats why it shows all that data 
        //each instance grabbing the id 
        //then appending to container
        // want to grab capsule id and details 
        container.appendChild(capsuleElement)
    }

})

