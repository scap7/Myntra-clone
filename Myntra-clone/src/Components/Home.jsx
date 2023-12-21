
import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";


const Home = () => {
    const { items } = useSelector(store => store.items);
    const  loading  = useSelector(store => store.loadingStates);
      console.log("items>>",items,"loading>>",loading);

   

    return (
        <>
            <main>
            <div className="items-container">
                {
                loading.isLoading?<h1>Loading...</h1>:(loading.error?<h1>{loading.error}</h1>: items.map(item => <HomeItem key={item.id} item={item} />))
                }
            </div>
            </main>
        </>
    )
}
export default Home;