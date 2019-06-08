import React from 'react';
import './Card.css';

class Card extends React.Component{
    render(){
        const {name, username, email} = this.props.robot;
        return (
            <div className="dib bg-looking-nice br4 pa2 ma3 grow bw2 shadow-5">
               <img src={`https://robohash.org/${name}`} alt="Something cool like a robot"/>
                
                <div className="tc">
                    <h2 >{username}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
} 

export default Card;