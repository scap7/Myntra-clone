import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/itemsSlice.js";
import { MdDeleteOutline } from "react-icons/md";
import PropTypes from "prop-types";


const HomeItem = ({ item }) => {
    const dispatch = useDispatch();
    const { bag } = useSelector(store => store.bagItems);
  
   const flag=bag.find(e=>e.id==item.id)

//     let quantity=bag.filter((e) => e.id == item.id).length;
//   const handleQuantity=(e)=>{
//        quantity+=e;
//        console.log(quantity)
//    }
   
   

    return (
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
        
           {!flag? <button className="btn-add-bag" onClick={() => { dispatch(bagAction.addItemsToBag(item)) }}>Add to Bag</button>
            :<button className="btn-add-bag btn-dlt" 
            onClick={() => { dispatch(bagAction.removeItemsFromBag(item.id)) }}><MdDeleteOutline style={{position: "relative",top: "3px"}}/>Remove</button>
                 
            }
           
        </div>
    )
}
export default HomeItem;
HomeItem.propTypes={
    item:PropTypes.object.isRequired
}
