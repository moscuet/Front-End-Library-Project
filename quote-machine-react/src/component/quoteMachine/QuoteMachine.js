import React from 'react';
import quotes from '../../data/quotes'
import './quoteMachine.scss'
class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote :'quote',
            author: ['author']
        }

        this.handleClick = this.handleClick.bind(this);
      }
      componentDidMount() {
          this.handleClick()
    }

      handleClick() {
        let index = Math.floor(Math.random()*quotes.length)
        this.setState({
            quote: quotes[index].quote,
            author: quotes[index].author
        })
      }
    render(){
        //console.log(this.state)
        const {quote,author} = this.state
        return (
            <div className = 'quoteWrapper'>
                <div id = 'quote-box'>
                    <div id= 'text'>
                        <p id ='text'> {quote} </p>
                        <p id ='author'>- {author} </p>
                    </div>
                    <div id ='button-box'>
                       <a href="https://twitter.com/intent/tweet"  id ='tweet-quote'> Tweet</a>
                        <div id ='new-quote'>
                            <button  onClick={this.handleClick}> New Quote</button>  
                        </div>                 
                    </div>
                </div>
            </div>
        )
    }
}
export default QuoteMachine