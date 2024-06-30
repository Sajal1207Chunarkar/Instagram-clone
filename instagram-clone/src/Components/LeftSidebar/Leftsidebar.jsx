import React from "react";

import styles from "../../styles/LeftSidebar.module.css";
import { IoMdHome } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";

function Leftsidebar() {
  const allOptions = [
    { icons: IoMdHome, title: "Home" },
    { icons: IoSearchOutline, title: "Search" },
    { icons: FaRegCompass, title: "Explore" },
    { icons: IoMdHome, title: "Reels" },
    { icons: RiMessengerLine, title: "Messages" },
    { icons: FaHeart, title: "Notifications" },
    { icons: FaRegPlusSquare, title: "Create" },
  
  ];
  return (
    <div className={styles.leftSidebar}>
      <img src="Images/logo2.png.jpeg" alt="" />
      <div className={styles.allOptions}>
        {allOptions.map((option, i) => (
          <div key={i} className={styles.oneOption}>
            <option.icons
              style={{
                fontSize: "22px",
              }}
            />
            <h1>{option.title}</h1>
          </div>
          
        ))}

        <div className={styles.oneOption}>
          <img src="https://images.unsplash.com/photo-1719386217659-6bde4641915c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt style={{
            width:'25px',
            height:'25px',
            borderRadius:'60%'
          }} />
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  );
}
export default Leftsidebar;
