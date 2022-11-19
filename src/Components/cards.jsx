// import { cardsData } from "./CardsData";

export function Card(props){
return(
     <>
     <div className="cards card" style={{ width: "18rem" }}>
            <img src={props.Data.img}  alt="..." />
            
            
         {props.Data.featured && (
            <button type="button" className="my-btn">
                FEATURED
            </button>
            )}

             <div className="card-body">
          <p className="card-des">{props.Data.model}</p>
          <h5 className="card-title">{props.Data.price}</h5>
          <p className="card-text">{props.Data.location}</p>
        </div>
         </div>
     </>
)
}