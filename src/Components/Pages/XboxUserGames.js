import React, {Component} from 'react';
import './XboxUserGames.scss';
import * as api from '../../api';
import Loading from '../Misc/Loading';

class XboxUserGames extends Component {
    state = {
        titles: []
    };

    componentDidMount = async () => {
        try {
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
        const xboxOneGames = this.state.titles;
        if (!this.state.titles.length) return <Loading/>;
        return (
            <div className="xbox-games--container">
            <p></p>
                {xboxOneGames.map(xboxOneGame => {
                    return (
                        <div className="game--container" key={xboxOneGame.titleId}>
                           <div className="name--container"><p className="game--name">{xboxOneGame.name}</p></div>
                            <div className="percent--container"><p className="game--percent">{Math.floor((xboxOneGame.currentGamerscore / xboxOneGame.maxGamerscore) * 100)}%</p></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default XboxUserGames;