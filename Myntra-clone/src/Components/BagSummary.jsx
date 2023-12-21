import { useSelector } from "react-redux";

const BagSummary=()=>{
    const {bag}=useSelector(store=>store.bagItems);
    console.log(bag)
  
     const totalItem= bag.length
     const totalMRP=bag.reduce((accumulator,curr)=>accumulator + Number(curr.original_price),0) 
     const currPrice= bag.reduce((accumulator,curr)=> accumulator + Number(curr.current_price),0) 
     const totalDiscount=totalMRP-currPrice;

    return (
    <div className="bag-summary">
                    
     <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{currPrice+99}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  )
}
export default BagSummary;