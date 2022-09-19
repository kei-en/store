import { ProductStyle } from "../styles/ProductStyle";
import Link from 'next/link';

export default function Product({ product }) {
    // Extract info from props 
    const {Title, Price, Image, Slug} = product.attributes;
    
    return (
        <ProductStyle>
            <Link href={`product/${Slug}`}>
                <div>
                    <img src={Image.data.attributes.formats.thumbnail.url} alt={Title} />
                </div>
            </Link>
            <div>
                <h2>{Title}</h2>
                <p>KES {Price}</p>
            </div>
        </ProductStyle>
    )
}