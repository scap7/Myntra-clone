import BagSummary from "./BagSummary"
import BagItem from "./BagItem"
import {  useSelector } from "react-redux";

const Bag = () => {
    const { bag } = useSelector(store => store.bagItems);

    

    return (
        <>

            <main>
                <div className="bag-page">
                    {
                        bag.map((bagItem,index) => {
                            return (
                                <div key={index} className="bag-items-container">
                                    <BagItem item={bagItem} />
                                </div>
                            )
                        })
                    }

                    <BagSummary />


                </div>
            </main>

        </>
    )
}
export default Bag;