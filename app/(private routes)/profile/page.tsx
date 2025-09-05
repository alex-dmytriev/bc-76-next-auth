import { getMe } from "@/lib/api/serverApi";
import Image from "next/image";

const Profile = async () => {
  const user = await getMe();
  console.log(user);

  return (
    <div>
      <ul>
        <li>
          <Image
            src={user.avatar}
            alt={user.username}
            width={100}
            height={100}
          />
        </li>
        <li>
          <p>{user.username}</p>
        </li>
        <li>
          <p>{user.email}</p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
