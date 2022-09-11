import DOM from '../dom.mjs'

const $ = (id) => document.getElementById(id)

const topics = ['mongodb', 'clojure', 'scala', 'react', 'python']

const randomNumber =  (Math.floor(Math.random()*topics.length)+1) - 1


let limit = 0
let offset = 0
let books = []

let newBooks = []

async function GetData() {
    DOM.gallery_row.innerHTML = ""

    let res = await fetch(`https://api.itbook.store/1.0/search/${topics[randomNumber]}`)

    let json = await res.json()

    limit = getComputedStyle(DOM.gallery_row).gridTemplateColumns.split(' ').length

    for (const iterator of json.books) {
            DOM.gallery_row.innerHTML += `
            <div class="card">
                <img src=${iterator.image} alt="">
                <h3>Title</h3>
                <button>Buy</button>
            </div>`
    }

    books = json.books

    let resBooks = await fetch(`https://api.itbook.store/1.0/search/cpp`)

    let jsonBooks = await resBooks.json()

    newBooks = jsonBooks

    console.log(json.books)
} 

const btn_prev = $('btn-prev')
btn_prev.addEventListener('click', InsertCarousel)

async function InsertCarousel() {
    DOM.carousel_row.innerHTML = ""

    //console.log(newBooks)

    for (let index = 0; index < limit; index++) {
        DOM.carousel_row.innerHTML += `
        <div class="card">
            <img src=${newBooks.books[offset+index].image} alt="">
            <h3>Title</h3>
            <button>Buy</button>
        </div>`
    }
    if (offset < 0 || offset >= limit) {
        offset = 0
    }else {

        offset += limit
    }
}

const btn_next = $('btn-next')
btn_next.addEventListener('click', InsertCarouselMinus)

async function InsertCarouselMinus() {
    DOM.carousel_row.innerHTML = ""
    console.log(offset)

    if (offset < 0 || offset > limit) {
        offset = limit
    }

    for (let index = 0; index < limit; index++) {
        DOM.carousel_row.innerHTML += `
        <div class="card">
            <img src=${newBooks.books[offset+index].image} alt="">
            <h3>Title</h3>
            <button>Buy</button>
        </div>`
    }

    
    if (offset < 0 || offset > limit) {
        offset = 0
        return
    }
        offset -= limit
    
}

GetData().then(()=>
{
    InsertCarousel()
})