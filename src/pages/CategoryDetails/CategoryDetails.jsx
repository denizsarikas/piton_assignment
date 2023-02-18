import { useParams, useLocation, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Books from "../../components/Books";
import Header from '../../components/Header'


const CategoryDetails = () => {
    const { id } = useParams();
    const name = new URLSearchParams(useLocation().search).get("name");

    const { data: category, isPending, error } = useFetch(`https://assign-api.piton.com.tr/api/rest/products/${id}`);

    // console.log('id şudur:' , id)
    //console.log('name şudur:' , name)
    //console.log('datalar şunlar:', category)

    return (
        <div>
            <Header />
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {category && (
                <div className='mt-20'>
                    <Link to={-1}>
                    <b className="text-2xl ml-5">&lt;{name}</b>
                    </Link>
                    <Books categoryID={id} />
                </div>
            )}
        </div>
    );
};

export default CategoryDetails;
