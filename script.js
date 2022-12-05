
alert('ATTACHED SUCCESSFULLY');


var quoteSource = [{
    quote: "If names are not correct, language will not be in accordance with the truth of things.",
    name:"Confucius"
},
{
   qoute: "How vain, without the merit, is the name.",

   name:"Homer"
},
{
    qoute:"Action without a name, a who attached to it, is meaningless.",
    name: "abhijeet"
},
{
    qoute: "The glory of my name increases my shame. Less known by mortals, I could better escape their eyes.",

     name: "Jean Racine"
}];

const quotebutton = document.getElementById("quotebutton");
function  myfunction(){
    var sourceLength = quoteSource.Length;
    var randomNumber = Math.floor(Math.random() * sourceLength);

    var newQuoteText = quoteSource[randomNumber].quote;
    var newQuotegenius = quoteSource[randomNumber].name;
    var quotecontainer = document.getElementById("quotecontainer");
    quotecontainer.innerHTML = `<p>${newQuoteText}</P><p
    id="quotegenius">-${newQuotegenius}<p>`;
 


};







