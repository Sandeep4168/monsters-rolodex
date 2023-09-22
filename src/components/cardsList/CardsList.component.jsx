import { Component } from "react";
import "./card-list.styles.css"


 class CardsList extends Component{

    render(){
        const{heros} = this.props;


        return(
            <div className="card-list">
            {
                heros.map((hero) => {
                    return <div
                    className="card-container" 
                    key={hero.id}>
                    <img src={`https://robohash.org/${hero.id}?set=set1&size=180x180`} alt={hero.name} />
                    <h2>{hero.name}</h2>
                    <p>{hero.email}</p>
                    
                    </div>
                })
            }
            </div>
        )
    }


}

export default CardsList;