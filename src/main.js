/*
Show Pict of Day
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY1. Using this url, fetch data related to NASA’s picture of the day.
2. Display the returned object in the console.
3. Write a template function that will return a DOM component with the image, date, explanation, title, and copyright. Remember to use semantic HTML.
4. Write a function that will display the component on the DOM.
*/

//
const createDOMComponent = ( data, element ) => {
    return `
        <section class="${element.section}">
            <h1 class="${element.h1}">NASA Picture of the Day</h1>
            <img class="${element.img}" src="${data.url}" width="50%">
            <div class="${element.date}"><div class="div"><span>Date: </span></div><div>${data.date}</div></div>
            <div class="${element.explanation}"><div class="div"><span>Explanation: </span></div><div>${data.explanation}</div></div>
            <div class="${element.title}"><div><span>Title: </span></div class="div"><div>${data.title}</div></div>
            <div class="${element.copyright}"><div class="div"><span>Copyright: </span></div><div>${data.copyright}</div></div>
       </section>
    `
}
//            <div class="${element.}">${data.}</div>

//
function element ( section, h1, img, date, explanation, title, copyright ) {
    this.section = section;
    this.h1 = h1;
    this.img = img;
    this.date = date;
    this.explanation = explanation;
    this.title = title;
    this.copyright = copyright;
}

//
const mainElement = document.querySelector( '#container' );

//
function addToDOM ( component ) {
    mainElement.innerHTML += component;
}

//
fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    //.then(pics => { return pics.json(); })
    .then ( data => data.json() )
    .then ( data => {
        //console.table( data.url )
        //const classElement = new element( "section", "h1", "img", "date", "explanation", "title", "copyright" );
        const classElement = new element( "section", "h1", "img", "div", "div", "div", "div" );
        addToDOM( createDOMComponent( data, classElement ) );
    })
