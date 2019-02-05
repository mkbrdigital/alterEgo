import React, {Component} from 'react';
import './XboxUserGames.scss';
import * as api from '../../api';
// import Loading from '../Misc/Loading';

class XboxUserGames extends Component {
    state = {
        genre: ""
    };

    componentDidMount = async () => {
        try {
            const { genre } = await api.fetchXB1Games();
            this.setState({});
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
            <div className="xbox-games-container">
               <ul>
                   <li>Zaladin's played xbox games should display here</li>
               </ul>
            </div>
        )
    }
}

export default XboxUserGames;