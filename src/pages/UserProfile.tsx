import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Card, Loader } from "../components";
import { fetchUserProfile } from "../utils/api";
import { decodedTokenInterface } from "../utils/types";

const UserProfile = () => {
  const [showUserPosts, setShowUserPosts] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    picture: "",
    email: "",
    created_at: "",
  });

  const navigate = useNavigate();

  const handleLogout = () => {
  
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    fetchUserProfile().then((res) => {
      setUserInfo(res.data[0]);
    }).catch((error) => {
      toast.error("Session Expired")
      handleLogout();
    });
  }, []);

  const posts = showUserPosts
    ? "border-b-2 border-black dark:text-white"
    : "text-gray-400 dark:text-gray-400";
  const likes = !showUserPosts
    ? "border-b-2 border-black dark:text-white"
    : "text-gray-400 dark:text-gray-400";

  if (!userInfo) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-extrabold text-[#222328] text-[32px]">Profile</h1>
      <div className="flex items-center gap-6">
        {!userInfo.picture ? (
          <div className="flex justify-center items-center w-16 h-16 rounded-full bg-green-800">
            <span className="text-[32px] font-bold text-white">
              {userInfo?.username[0]}
            </span>
          </div>
        ) : (
          <img
            src={userInfo.picture}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <p className="text-xl font-semibold">{userInfo?.username}</p>
      </div>

      <nav className="w-full">
        <ul className="flex gap-10 border-b-2 border-gray-300 w-full">
          <li
            className={`text-xl font-semibold cursor-pointer mt-2 ${posts}`}
            onClick={() => setShowUserPosts(true)}
          >
            Creations
          </li>
          <li
            className={`text-xl font-semibold cursor-pointer mt-2 ${likes}`}
            onClick={() => setShowUserPosts(false)}
          >
            Likes
          </li>
        </ul>
      </nav>

      <section>{/* <Card /> */}</section>
    </div>
  );
};

export default UserProfile;
function jwt_decode(token: string): decodedTokenInterface {
  throw new Error("Function not implemented.");
}

