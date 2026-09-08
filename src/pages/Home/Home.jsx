import { useCategoryStore } from "../../store/store";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";

const Home = () => {
    const categories = useCategoryStore(s => s.categories);
    return (
        <main>
            {
                categories.map(item =>{
                    return <CategoryComponent key={item} category={item} limit={4} />
                })
            }
            
        </main>
    );
}

export default Home;
