document.getElementById('nq').addEventListener('click',generateQuote);
 
var speed = 50; /* The speed/duration of the effect in milliseconds */
var quotesJson = [
                {'quote' : "Where there is a will there is a way!",
                "by": "- Swami Vivekananda"},
                {'quote' : "Arise, Awake and stop not until the goal is reached!",
                "by": "- Swami Vivekananda"},
                {'quote' : "Talk to yourself once in a day, otherwise you may miss meeting an excellent person in this world.",
                "by": "- Swami Vivekananda"},
                {'quote' : "All the power is within you, you can do anything and everything. belive in that; don't belive that you are week, stand up and express the divinity within you.",
                "by": "- Swami Vivekananda"},
                {'quote' : "In a conflict between the heart and the brain, follow your heart.",
                "by": "- Swami Vivekananda"},
                {'quote' : "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
                "by": "- John Keats"},
                {'quote' : "When you reach the end of your rope, tie a knot in it and hang on.",
                "by": "- Franklin D. Roosevelt"},
                {'quote' : "But man is not made for defeat. A man can be destroyed but not defeated.",
                "by": "- Ernest Hemingway"},
                {'quote' : "There is nothing permanent except change.",
                "by": "- Heraclitus"},
                {'quote' : "It is far better to be alone, than to be in bad company.",
                "by": "- George Washington"},
    ];
var randomNumBtwn0and99;
var quote 
var quotedBy 
var i = 0;
var j = 0;

function generateQuote () {
    randomNumBtwn0and99 = Math.floor(Math.random() * 10);
    quote = quotesJson[randomNumBtwn0and99].quote;
    quotedBy = quotesJson[randomNumBtwn0and99].by;
    i = 0;
    j = 0;

    document.getElementById("h1").innerHTML = '';
    document.getElementById("h3").innerHTML = '';
    
    typeQuote();
    typeQuotedBy();
}

function typeQuote() {
  if (i < quote.length) {
    document.getElementById("h1").innerHTML += quote.charAt(i);
    i++;
    setTimeout(typeQuote, speed);
  }
}

function typeQuotedBy() {
  if (j < quotedBy.length) {
    document.getElementById('h3').innerHTML += quotedBy.charAt(j);
    j++;
    setTimeout(typeQuotedBy, speed);
  }
}

function tweetQuote() {
    window.location = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + quotedBy);
}
