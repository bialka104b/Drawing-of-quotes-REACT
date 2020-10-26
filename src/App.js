import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    random: 0,
    quotes: [
        {
        "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
        },
        {
        "quote": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
        },
        {
        "quote": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
        },
        {
        "quote": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
        },
        {
        "quote": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
        },
        {
        "quote": "Be the chief but never the lord.",
        "author": "Lao Tzu"
      }
    ],
    myQuote: '',//do przechowywania cytatu wpisywanego w input
    myAuthor: '',//do przechowywania authora wpisywanego w input
    autor: '',//do przechowywania losowanego nazwy autora
    cytat: '',//do przechowywania losowanego cytatu
  }

  randomQuote = () => {
    let losuj = parseInt(Math.random()* this.state.quotes.length);
    console.log(losuj);
    this.setState({
      random: losuj,
      cytat: this.state.quotes[losuj].quote,
      autor: this.state.quotes[losuj].author
    })
  }

  // AKTUALIZOWANIE STATE DODAWANEGO CYTATU I AUTORA W INPUTACH
  handleQuotes = (e) => {
    this.setState({myQuote: e.target.value})
  }
  handleAuthor = (e) => {
    this.setState({myAuthor: e.target.value})
  }

  // DODAWANIE CYTATU I AUTORA DO TABLICY
  handleAddQuote = () => {
    const cytat = this.state.myQuote;
    const autor = this.state.myAuthor;
    const addedItem = {//obiekt który będzie dodawany do tablicy Qutes
      quote: cytat,
      author: autor
    }
    this.setState({//aktualna tablica plus nasz nowy obiekt
      quotes: [...this.state.quotes, addedItem]
    })
  }

  render()
  {
    // 1. zbuduj strukture w html ktora bedzie zawierala boxa w ktorym umiescisz cytat oraz autora a ponizej przycisk 
    // 2. stworz metode ktora podepniesz pod zdarzenie onClick na przycisk
    // 3. metoda ta ma losować losowy cytat z tablicy quotes i go wyświetlać
    return (
      <div className="cite">
        {/* Div do wyświetlania wylosowanego cytatu z tablicy cytatów */}
        <div className="draw-quote__box">
          <p className="draw-quote__quote">{this.state.cytat}</p>
          <p>{this.state.autor}</p>
          <button onClick={()=> this.randomQuote()}>Losuj cytat</button>
          <div>
            <label>Cytat: </label>
            <input type="text" onChange={this.handleQuotes} value={this.state.myQuote}/><br/>
            <label>Autor: </label>
            <input type="text" onChange={this.handleAuthor} value={this.state.myAuthor}/><br/>
            <button onClick={this.handleAddQuote}>Dodaj cytat</button>
          </div>
        </div>
        <div className="all-quotes">
          <ul>
            {this.state.quotes.map((cite, index)=>{
              return(
                // cite to obiekt z naszym cytatem i autorem, index to numer obiektu w tablicy quote
              <li className="all__one-quote" key={index}>{index + 1}. {cite.quote}<br/>
                  <span className="all__author"> Author: {cite.author}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
