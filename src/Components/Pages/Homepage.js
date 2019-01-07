import React, {Component} from 'react';
import './Homepage.scss';
import * as api from '../../api';

class Homepage extends Component {
    state = {
        Gamertag: "",
        Gamerscore: "",
        GameDisplayPicRaw: "",
    };

    componentDidMount = async () => {
        try {
            const { Gamertag, Gamerscore, GameDisplayPicRaw } = await api.fetchGamerTag();
            this.setState({Gamertag, Gamerscore, GameDisplayPicRaw});
        } catch (err) {
            // if (err.response.status === 404) this.props.history.push("404");
        }
    }

    // componentDidUpdate = async prevProps => {
    //     if (prevProps !== this.props) {
    //       const {Gamertag} = await this.fetchGamertag();
    //       this.setState({Gamertag});
    //     }
    //   };

    render() {
        return (
            <div className="columns homepage--container">
                <div className="column gamercard-container">
                    <ul className="xbox-gamercard">
                        <li><img className="gamerpic" src={this.state.GameDisplayPicRaw} alt="gamerpic"></img></li>
                        <li className="gamertag">{this.state.Gamertag}</li>
                        <li className="gamerscore">{this.state.Gamerscore}</li>
                    </ul>
                </div>
                <div className="column gamercard-container">
                    {/* <ul className="xbox-gamercard">
                        <li><img className="gamerpic" src={this.state.GameDisplayPicRaw} alt="gamerpic"></img></li>
                        <li className="gamertag">{this.state.Gamertag}</li>
                        <li className="gamerscore">{this.state.Gamerscore}</li>
                    </ul> */}
                </div>
                <div className="column gamercard-container">
                    {/* <ul className="xbox-gamercard">
                        <li><img className="gamerpic" src={this.state.GameDisplayPicRaw} alt="gamerpic"></img></li>
                        <li className="gamertag">{this.state.Gamertag}</li>
                        <li className="gamerscore">{this.state.Gamerscore}</li>
                    </ul> */}
                </div>
            </div>
        )
    }
}

export default Homepage;