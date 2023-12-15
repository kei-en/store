import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";

export default function User() {
  const route = useRouter();
  const { user } = useUser();

  if (!user)
    return (
      <div
        className={"flex justify-evenly"}
        onClick={() => route.push("/api/auth/login")}>
        <FaUserCircle />
        <h3 className={"px-2"}>Profile</h3>
      </div>
    );
  return (
    <Profile onClick={() => route.push("/profile")}>
      <img src={user.picture} alt={user.name} />
      <h3>{user.nickname}</h3>
    </Profile>
  );
}

const Profile = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    align-self: center;
    padding: 0.5rem;
  }
  h3 {
    font-size: 2rem;
    padding: 0.5rem;
  }
`;
