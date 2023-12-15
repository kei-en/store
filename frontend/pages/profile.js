import styled from "styled-components";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  return (
    user && (
      <>
        <div className="py-20">
          <div className="px-4 lg:px-20">
            <h2 className="text-lg">Hello {user.nickname},</h2>
            <p>
              heres your{" "}
              <span className="font-semibold italic">order history:</span>
            </p>
          </div>
          <div className="relative shadow-md sm:rounded-lg p-3 hidden md:block lg:mx-20">
            <table className="w-full text-sm text-left text-zinc-900 px-6">
              <thead className="text-xs uppercase sticky top-0 bg-[#e5e4e256]">
                <tr>
                  <th scope="col" className="px-3 py-4">
                    Order Number
                  </th>
                  <th scope="col" className="px-3 py-4">
                    Amount
                  </th>
                  <th scope="col" className="px-3 py-4">
                    Receipt Email
                  </th>
                </tr>
              </thead>
              <tbody className="rounded-lg">
                {orders.map((order) => (
                  <tr key={order.id} className="bg-[#d9d9d97f] border-b">
                    <td className="px-4 py-4">{order.id}</td>
                    <td className="px-4 py-4">{order.amount / 100}</td>
                    <td className="px-4 py-4">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {orders.map((order) => (
            <div key={order.id} className="grid grid-cols-1 md:hidden m-3">
              <div className="bg-[#d9d9d97f] p-4 rounded-lg shadow relative">
                <div className="flex flex-col items-center px-2 py-1 uppercase text-sm">
                  Order Number:{" "}
                  <span className="lowercase font-bold">{order.id}</span>
                </div>
                <div className="flex flex-col items-center px-2 py-1 uppercase text-sm">
                  Amount: &nbsp;
                  <span className="font-bold">KES {order.amount / 100}</span>
                </div>
                <div className="flex flex-col items-center px-2 py-1 uppercase text-sm">
                  Receipt Email:{" "}
                  <span className="lowercase font-bold">{user.email}</span>
                </div>
              </div>
            </div>
          ))}
          <button
            className="bg-[#2d2d2d] w-1/2 py-4 px-8 text-white m-4 mx-[25%] cursor-pointer"
            onClick={() => route.push("/api/auth/logout")}>
            Logout
          </button>
        </div>
      </>
    )
  );
}

const ProfileStyle = styled.div`
  margin-top: 5rem;
  padding: 1rem;
  width: 100%;
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    color: white;
    margin: 2rem;
    cursor: pointer;
  }
`;

const Order = styled.div`
  background: white;
  margin: 2rem 0rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
