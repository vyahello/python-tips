import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import './App.css';

const axios = require('axios');
const PAGE_TITLE = 'Python Tips API';
const TWITTER_ICON = 'https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-13-128.png';
const TIPS_ENDPOINT = 'http://127.0.0.1:8000/api/';


function Tip(props) {
  return (
    <div className="tip">
      <p>
          {/* component */}
      <Highlighter
          highlightClassName="highlight"
          searchWords={[props.filterStr]}
          autoEscape={true}
          textToHighlight={props.tip || ''}
      />
        { props.link && <span>(<a href={props.link} target="_blank">source</a> )</span> } { /* if props.link then do */ }
      </p>
        <pre>
            {/* component */}
        <Highlighter
          highlightClassName="highlight"
          searchWords={[props.filterStr]}
          autoEscape={true}
          textToHighlight={props.code || ''}
        />
        </pre>
        { props.share_link &&
            <p> { /* if props.share_link then do */ }
                <a href={ props.share_link } target="_blank">
                    <img src={ TWITTER_ICON } alt="share"/>
                </a>
            </p>
        }
    </div>
  )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgTips: [],
            showTips: [],
            filterStr: '',
        };
        this.onFilterChange = this.onFilterChange.bind(this);
        this.filterTips = this.filterTips.bind(this);
    }

    componentDidMount() { // runs when component output is being rendered to the DOM
        // https://reactjs.org/docs/state-and-lifecycle.html
        // call api using axios
        axios.get(TIPS_ENDPOINT).then(response => {
            this.setState({
                orgTips: response.data,
                showTips: response.data,
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    onFilterChange(event) {
        // filter orgTips into showTips
        const filterStr = event.target.value? event.target.value.toLowerCase(): "";
        // if 'event.target.value' then 'event.target.value.toLowerCase()' else ""
        this.setState({
            filterStr: filterStr,
            showTips: this.filterTips(filterStr)
        });
        console.log('onFilterChange called');
    }

    filterTips = (filterStr) => {
        // helper for onFilterChange
        let tips  = [];
        for(const tip of this.state.orgTips) {
            if(tip.tip && tip.tip.toLowerCase().includes(filterStr) ||
                tip.code && tip.code.toLowerCase().includes(filterStr)) {
                tips.push(tip);
            }
        }
        return tips;
    };

    // use jsx to embed js expressions
    render() {
        return (
    <div className="App">
        <h2>{ PAGE_TITLE }</h2>

        <form id="searchTips">
            <input type="text" placeholder="filter tips" value={this.state.filterStr} onChange={this.onFilterChange}/>
        </form>

        <div id="tips">
            { this.state.showTips.map((tip, index) =>
                <Tip {...tip} key={index} filterStr={this.state.filterStr} /> )}
                {/* {...tip} like tuple unpacking */}
                {/* 'props' attributes referenced in the component function earlier */}
        </div>
    </div>
          );
    }
}

export default App;
