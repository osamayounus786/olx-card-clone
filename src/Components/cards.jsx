// import { cardsData } from "./CardsData";
import { FaRegHeart } from "react-icons/fa";
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
                <div className="icon-parent">
          <p className="card-des">{props.Data.model}</p>
          <FaRegHeart className="hearticon" size='1.5rem' />
                </div>
          <h5 className="card-title">{props.Data.price}</h5>
          <p className="card-text">{props.Data.location}</p>
        </div>
         </div>
     </>
)
}