import React, {Component} from 'react';
import './XboxUserGames.scss';
import * as api from '../../api';
// import Loading from '../Misc/Loading';

class XboxUserGames extends Component {
    state = {
        titles: []
    };

    componentDidMount = async () => {
        try {
            // const {  } = await api.fetch360Games();
            const { titles } = await api.fetchXB1Games();
            this.setState({ titles });
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
        console.log(this.state.titles)
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