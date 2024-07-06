import React from "react";

import styles from "../../styles/LeftSidebar.module.css";

import { FaThreads } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { allOptions } from "../../Constants/allposts";

function Leftsidebar() {
  
  return (
    <div className={styles.leftSidebar}>
      <div className={styles.leftSidebarTop}>
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
            <div>
              <img
                src="https://images.unsplash.com/photo-1719386217659-6bde4641915c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "60%",
                }}
              />
            </div>
            <h1>Profile</h1>
          </div>
        </div>
      </div>

      <div className={styles.leftSidebarBottom}>
        <div className={styles.oneOption}>
          <FaThreads
            style={{
              fontSize: "22px",
            }}
          />
          <h1>Threads</h1>
        </div>
        <div className={styles.oneOption}>
          <IoIosMenu
            style={{
              fontSize: "22px",
            }}
          />
          <h1>More</h1>
        </div>
      </div>
    </div>
  );
}
export default Leftsidebar;
