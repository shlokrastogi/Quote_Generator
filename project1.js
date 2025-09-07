// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"If I cannot do great things, I can do small things in a great way."`,
        person:`Martin Luther King`
    },
    {
        quote: `"Act as if what you do makes a difference. It does."`,
        person:`William James`
    },
    {
        quote: `"Be the change that you wish to see in the world."`,
        person:`Mahatma Ghandi`
    },
    {
        quote: `"Don't sit down and wait for the opportunities to come. Get up and make them."`,
        person:`Madam C.J. Walker`
    },
    {
        quote: `"Opportunity is missed by most people because it is dressed in overalls and looks like work."`,
        person:`Thomas Edison`
    },
    {
        quote: `"The most difficult thing is the decision to act; the rest is merely tenacity."`,
        person:`Amelia Earhart`
    },
    {
        quote: `"The bad news is time flies. The good news is you're the pilot."`,
        person:`Michael Altshuler`
    },
    {
        quote: `"I can't change the direction of the wind, but I can adjust my sails to always reach my destination."`,
        person:`Jimmy Dean`
    },
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})