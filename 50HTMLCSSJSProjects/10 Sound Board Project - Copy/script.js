const joke = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')


btn.addEventListener('click', generateJoke)


generateJoke()

// function generateJoke(){
//     const config = {
//         headers:{
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     // .then((data) => console.log(data))
//     .then((data) =>{
//         joke.innerHTML = data.joke
//     })
// }




async function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }


    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()
    joke.innerHTML = data.joke

}




console.log(btn)
console.log(joke)