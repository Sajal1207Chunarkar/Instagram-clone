import React from "react";
import styles from "../../styles/RightSidebar.module.css";

function Rightsidebar() {
  return (
    <div className={styles.rightSidebar}>
      <div className={styles.top}>
        {/* ?top */}
        <img
          src="https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt=""
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
    

      <div className={styles.username}>
        {/* mid */}
        <h2>_Sajal_Chunarkar</h2>
        <p>Sajalchunarkar</p>
      </div>

        {/* bottom */}
        <p>Switch</p>
      </div>
      <div className={styles.mid}>
        <div className={styles.mid_top}>
          <h5>Suggested for you</h5>
          <h5>Seeall</h5>
        </div>
      </div>
      </div>
  
  );
}

export default Rightsidebar;
