console.log('%c HI', 'color: firebrick')
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// document.addEventListener('DOMContentLoaded',(e)=>{
//     e.preventDefault()
// const container = document.getElementById('dog-image-container')
//  fetch(imgUrl)
//  .then(function(resp){
//     return resp.json()
//  })
//   .then(function(data){
//     // console.log(data.message) 
//     data.message.forEach((element)=> {
//         console.log(element)
//        const image = document.createElement('img')
//        image.src = element
//        container.append(image)
//     })
//   })

// })


let breedsArray = []

document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault()
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const container = document.getElementById('dog-image-container')
fetch(imgUrl)
    .then((response)=>response.json())
    .then(function(data){
        // console.log(data)
        data.message.forEach(element=>{
            const image = document.createElement('img')
            image.src = element
            container.append(image)
        })
    })
})

document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const ul = document.getElementById('dog-breeds')
    fetch(breedUrl)
    .then((response)=>response.json())
    .then((data)=>{
        breedsArray = Object.keys(data.message)
        console.log(breedsArray)
        for(element in data.message){
            let list = document.createElement('li')
            list.textContent = element
            ul.append(list)
            list.addEventListener('click',function onClick(event){
                event.target.style.color = 'purple'
            })
            // const select = document.getElementById('breed-dropdown')
            // select.addEventListener('change',(e)=>{
            //     e.target.value
            //     // breedsArray.filter((breed)=>breed.startsWith(e.target.value))
            // })
        }
    })
    const select = document.getElementById('breed-dropdown')
            select.addEventListener('change',(e)=>{
                let ul = document.getElementById('dog-breeds')
                // ul.removeAllChildNodes('li')
                let newLi = document.createElement('li')
                // console.log(e.target.value)
                // breedsArray.filter((breed)=>breed.startsWith(e.target.value))
                function removeAllChildNodes(parent) {
                    while (parent.firstChild) {
                        parent.removeChild(parent.firstChild);
                    }
                }
                removeAllChildNodes(ul)
                const newArray=breedsArray.filter((breed)=>breed.startsWith(e.target.value))
                newArray.forEach((element)=>renderElement(element))

                function renderElement(element){
                    newLi.innerText = element
                    ul.appendChild(newLi)

                }
                renderElement(newArray)
                 
               
               
            })
  
})


