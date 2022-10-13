function generate(){
    var quotes = {
        "- Jim Rohn": '“Either you run the day or the day runs you.”',
        "- Henry Ford": '“Whether you think you can, or you think you can’t – you’re right.”',
        "- Jim Rohn": '“Don’t wish it were easier. Wish you were better.”',
        "- Mahatma Gandhi": '“The future depends on what you do today.”',
        "- Eva Young": '“To think too long about doing a thing often becomes its undoing.”',
        "- Martin Luther King, Jr.": '“You don’t have to see the whole staircase, just take the first step.”'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;



    console.log(authors);
}