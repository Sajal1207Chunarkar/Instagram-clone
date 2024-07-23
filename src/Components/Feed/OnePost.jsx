import React from "react";
import styles from "../../styles/OnePost.module.css";
import { MdVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { TbSend } from "react-icons/tb";
import { Link } from "react-router-dom";
// import { MdVerified } from "react-icons/md";

function OnePost(props) {
    const { postImage, userhandleid, postTimestamp, postLocation, userAvatar, likescount, postCaption, commentCount } = props
    return (
        <div className={styles.OnePost}>
            {/* top */}
            <div className={styles.top}>
                {/* Avatar */}
                <Link to={`/friend ${userhandleid}`}target='_blank'>
                <img
                    src={userAvatar}
                    alt={userAvatar}
                />
                </Link>
                <div className={styles.info}>
                    {/* userhandleid && verified icon && time*/}
                    <h3>
                        <Link to={`/friend/${userhandleid}`}target='_blank'>
                        {userhandleid}
                        </Link>
                        <MdVerified
                            style={{
                                marginLeft: "5px",
                                color: "blue",
                            }}
                        />
                        <span style={{ margin: "0 5px", fontSize: "25px" }}>&middot;</span>
                        <span style={{ color: "gray" }}>{postTimestamp}</span>
                    </h3>
                    {/* Address and location */}
                    <p>{postLocation}</p>
                </div>
                {/* three dots icons */}
                <BsThreeDots
                    style={{ fontSize: "20px", backgroundColor: "gray", paddingL: "8px" }}
                />
            </div>

            {/* mid */}
            <div className={styles.mid}>
                <img
                    src={postImage}
                    alt={postImage} />
                <div className={styles.icons}>
                    <div className={styles.iconLeft}>
                        <FaRegHeart style={{ fontSize: "25px", marginLeft: "10px" }} />
                        <FiMessageCircle style={{ fontSize: "25px", marginLeft: "10px" }} />
                        <TbSend style={{ fontSize: "25px", marginLeft: "10px" }} />
                    </div>
                    <FaRegBookmark style={{ fontSize: "25px" }} />
                </div>
                {
                    likescount > 0 ? (
                        <p>{likescount}</p>
                    ) : (
                        <p>no likes yet</p>
                    )
                }
                <p>{likescount}likes</p>
            </div>

            {/* bottom */}
            <div className={styles.bottom}>
                {
                    postCaption && (

                        <h3>
                            <Link to={'/friend'}>
                            <span style={{ fontWeight: 'bold', marginRight: '5px' }}>{userhandleid}</span>
                            </Link>
                        <span>{postCaption}
                        </span></h3>)}
                {
                    commentCount > 0 ? (

                        <h2>View all {commentCount} Comments</h2>) : (<h2>No comments yet</h2>)
                }
                <input type="text" placeholder="Add a comment..." />
            </div>
        </div>
    );
}

export default OnePost;