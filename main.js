
//1

// let url = 'https://dog.ceo/api/breeds/image/random';



// function fetchFunc(url) { 
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
    
// }

// fetchFunc(url)


//2

// let secondUrl = 'https://dog.ceo/api/breeds/list/all';



// function fetchFunc(url) { 
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
    
// }

// fetchFunc(secondUrl)



//3

// let thirdUrl = 'https://streaming-availability.p.rapidapi.com/v2/services';



// function fetchFunc(url) { 
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
    
// }

// fetchFunc(thirdUrl)



//4



// let fourthUrl ='https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes'
// ;



// function fetchFunc(url) { 
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
    
// }

// fetchFunc(fourthUrl)




//5



// let fifthUrl ='https://football-prediction-api.p.rapidapi.com/api/v2/predictions'
// ;



// function fetchFunc(url) { 
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
    
// }

// fetchFunc(fifthUrl)



//6



// let sixthUrl ='https://ronreiter-meme-generator.p.rapidapi.com/meme' ;



// function fetchFunc(link) { 
//     fetch(link)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
    
// }

// fetchFunc(sixthUrl)


// //7

// let seventhUrl ='https://website-contacts-scraper.p.rapidapi.com/scrape-contacts' ;



// function fetchFunc(link) { 
//     fetch(link)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
    
// }

// fetchFunc(seventhUrl)



























let url = 'https://dog.ceo/api/breeds/list/all';



const select = document.getElementById('select')

function fetch1(url) {
    fetch(url)
    .then((res) => res.json() )
    .then((data) => { let object = data.message; 
    console.log(object);
let objectOfArray = Object.keys(object);
 objectOfArray.map((item) => {
    const option = document.createElement('option');

    option.value = item; 
    option.innerText= item ;
    select.appendChild(option);

    })
})
    
}

 fetch1(url)