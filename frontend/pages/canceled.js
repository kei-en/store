import { useRouter } from "next/router";
import { Card, Wrapper } from "../styles/SuccessStyles";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export default function Canceled() {
  const route = useRouter();

  return (
    <div>
      <Wrapper>
        <Card
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}>
          <h1>Your order has been cancelled!</h1>
          <MdOutlineRemoveShoppingCart size="5em" />
          <button onClick={() => route.push("/")}>Continue Shopping</button>
        </Card>
      </Wrapper>
    </div>
  );
}
