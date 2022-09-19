import { useRouter } from 'next/router';
import { MdLocalShipping } from "react-icons/md";
import { Wrapper, Card, InfoWrapper, Address, OrderInfo } from '../styles/SuccessStyles';

const stripe = require("stripe")(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export async function getServerSideProps(params) {
    const order = await stripe.checkout.sessions.retrieve(
        params.query.session_id,
        {
            expand: ["line_items"],
        },
    );
    return {props: {order}}
}

export default function Success({ order }) {
    const route = useRouter();

    return (
        <Wrapper>
            <Card
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75 }}
            >
                <h1>Thank you for your order!</h1>
                <h2>A confirmation email will be sent to</h2>
                <h2>{order.customer_details.email}</h2>
                <InfoWrapper>                    
                    <Address>
                        <h2>Address</h2>
                        {Object.entries(order.customer_details.address).map(([key, val]) => (
                            <p key={key}>
                                {key} : {val}
                            </p>
                        ))}
                    </Address>
                    <OrderInfo>
                        <h2>Products</h2>
                        {order.line_items.data.map((item) => (
                            <div key={item.id}>
                                <p>Product: {item.description}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: KES {item.price.unit_amount/100}</p>
                            </div>
                        ))}
                    </OrderInfo>
                </InfoWrapper>
                <MdLocalShipping size='5em' />
                <button onClick={() => route.push('/')}>Continue Shopping</button>
            </Card>
        </Wrapper>
    )
}