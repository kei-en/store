import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from 'next/router'
import { DetailsStyle, ProductInfo, Quantity, Buy } from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useStateContext } from "../../lib/context";

export default function ProductDetails() {
    // Use state 
    const { qty, increaseQty, decreaseQty, onAdd, cartItems } = useStateContext();

    // Fetch slug
    const {query} = useRouter()
    // Fetch graphql data 
    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: { slug: query.slug },
    })
    const {data, fetching, error} = results;
    // Check for the data coming in 
    if(fetching) return <p>Loading...</p>
    if(error) return <p>Oh no... {error.message}</p>
    // Extract data 
    const {Title, Description, Image, Price} = data.products.data[0].attributes;
    
    return (
        <DetailsStyle>
            <img src={Image.data.attributes.formats.thumbnail.url} alt={Title} />
            <ProductInfo>
                <h2>{Title}</h2>
                <p>{Description}</p>
                <h3>KES {Price}</h3>
                <Quantity>
                    <span>Quantity</span>
                    <button>
                        <AiFillMinusCircle onClick={decreaseQty} />
                    </button>
                    <p>{qty}</p>
                    <button>
                        <AiFillPlusCircle onClick={increaseQty} />
                    </button>
                </Quantity>
                <Buy onClick={() => onAdd(data.products.data[0].attributes, qty)}>Add to cart</Buy>
            </ProductInfo>
        </DetailsStyle>
    )
}