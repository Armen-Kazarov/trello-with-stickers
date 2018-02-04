import React from 'react';
import '../../css/stickers.css'

class Stickers extends React.Component {
    constructor() {
        super();
        this.state = {
            stickers: [
                require('../../img/stickers/brown-om-nom.png'),
                require('../../img/stickers/candy.png'),
                require('../../img/stickers/chopper.png'),
                require('../../img/stickers/cut-the-rope.png'),
                require('../../img/stickers/om-nom.png'),
                require('../../img/stickers/om-nom-friend.png'),
                require('../../img/stickers/om-nom-happy.png'),
                require('../../img/stickers/om-nom-in-headphones.png'),
                require('../../img/stickers/om-nom-smile.png'),
                require('../../img/stickers/on-nom-faro.png')
            ],
        };
    }

    render () {
        return (
            <div className="stickers-img">
                { this.state.stickers.map((sticker, index) => {
                    return (
                        <div key={index} className="stickers-block">
                            <img src={sticker} alt="img" className="img-sticker"/>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default Stickers;