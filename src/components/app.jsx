import React, { Component } from 'react';
import SearchBar from './search.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "QoOrGw9UKZNx6vpZCl"
    }
    this.mainImage = this.mainImage.bind(this);
    this.search = this.search.bind(this);
  }

    search = (query) => {
      giphy('etSLdywayx1pnGN2Ea3vO1zb78mUPNPR').search({
        q: query,
        rating: 'g',
        limit: 10
      }, (error, result) => {
        this.setState({
          gifs: result.data
        });
      });
    }

    mainImage(imageId) {
      this.setState({
        selectedGifId: imageId
      });
    }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} mainImage={this.mainImage} />
        </div>
      </div>
    );
  }
}

export default App;
