import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    render(){
        const robots = this.props.robots;
        let cardList = robots.map(robot => {
        return(
        <Card 
        key={robot.id} 
        robot={robot} 
        />
        )
    });
        
        return (
            <div className="flex flex-wrap pl5 pr5 justify-around">
                {cardList}
            </div>
        )
    }
}

export default CardList;