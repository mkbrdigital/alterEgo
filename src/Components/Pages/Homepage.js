import React, {Component} from 'react';
import './Homepage.scss';
import * as api from '../../api';

class Homepage extends Component {
    state = {
        gamertag: "",
        gamerscore: "",
    };

    componentDidMount = async () => {
        try {
            const { gamertag, gamerscore } = await api.fetchGamerTag();
            this.setState({gamertag, gamerscore});
        } catch (err) {
            // if (err.response.status === 404) this.props.history.push("404");
        }
    }

    // componentDidUpdate = async prevProps => {
    //     if (prevProps !== this.props) {
    //       const {gamertag} = await this.fetchGamerTag();
    //       this.setState({gamertag});
    //     }
    //   };

    render() {
        console.log(this.state);
        return (
            <div className="homepage--container">
                <p className="homepage--title">HOMEPAGE</p>
            </div>
        )
    }
}

export default Homepage;