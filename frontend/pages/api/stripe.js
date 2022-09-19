import { getSession } from "@auth0/nextjs-auth0";
import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
    const session = getSession(req, res);
    const user = session?.user;
    if(user) {        
        const stripeId = user["https:localhost:3000/stripe_customer_id"];
        
        if(req.method === "POST") {
            try {
                // Create checkout session 
                const session = await stripe.checkout.sessions.create({
                    submit_type: 'pay',
                    mode: 'payment',
                    customer: stripeId,
                    payment_method_types: ['card'],
                    shipping_address_collection: {
                        allowed_countries: ['US', 'CA', 'KE']
                    },
                    shipping_options: [{ shipping_rate: "shr_1LXo6vHyk27VByqGqNWdDLUJ" }],
                    line_items: req.body.map(item => {
                        return {
                            price_data: {
                                currency: "kes",
                                product_data: {
                                    name: item.Title,
                                    images: [item.Image.data.attributes.formats.thumbnail.url]
                                },
                                unit_amount: item.Price * 100,
                            },
                            adjustable_quantity: {
                                enabled: true,
                                minimum: 1
                            },
                            quantity: item.quantity
                        };
                    }),
                    // Redirect to success or failed  page 
                    success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${req.headers.origin}/canceled`
                });
                res.status(200).json(session);
            } catch (error) {
                res.status(error.statusCode || 500).json(error.message)
            }
        }
    } else {
        if(req.method === "POST") {
            try {
                // Create checkout session 
                const session = await stripe.checkout.sessions.create({
                    submit_type: 'pay',
                    mode: 'payment',
                    payment_method_types: ['card'],
                    shipping_address_collection: {
                        allowed_countries: ['US', 'CA', 'KE']
                    },
                    shipping_options: [{ shipping_rate: "shr_1LXo6vHyk27VByqGqNWdDLUJ" }],
                    line_items: req.body.map(item => {
                        return {
                            price_data: {
                                currency: "kes",
                                product_data: {
                                    name: item.Title,
                                    images: [item.Image.data.attributes.formats.thumbnail.url]
                                },
                                unit_amount: item.Price * 100,
                            },
                            adjustable_quantity: {
                                enabled: true,
                                minimum: 1
                            },
                            quantity: item.quantity
                        };
                    }),
                    // Redirect to success or failed  page 
                    success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${req.headers.origin}/canceled`
                });
                res.status(200).json(session);
            } catch (error) {
                res.status(error.statusCode || 500).json(error.message)
            }
        }
    }
}