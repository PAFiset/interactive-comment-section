import styles from '../../styles/modules/Comment.module.scss'
import {useState} from 'react';





const Comment = (props) => {

  const [likes,setLikes] = useState(0);

  const clickHandlerLike = () => {
    setLikes(likes + 1)
  }

  const clickHandlerDislike = () => {
    setLikes(likes - 1);
  }

  return ( 
    <div className={styles.comment} >
      <div className={styles.likes} >
        <button className={styles.btn_rate + " " + styles.like} onClick={clickHandlerLike} >+</button>
        <div className={styles.rating} >{likes}</div>
        <button className={styles.btn_rate + " " + styles.dislike} onClick={clickHandlerDislike} >-</button>
      </div>
      <div className={styles.comment_content} >
        <div className={styles.user_data} >
          <div className={styles.user_img_flex_item} >
            <img className={styles.user_img} src="/avatars/image-amyrobson.png" ></img>
          </div>
          <div className={styles.username_flex_item} >
            amyrobson
          </div>
          <div className={styles.created_at_flex_item} >
            1 month ago
          </div>
          <div className={styles.reply_btn_flex_item} >
            <button className={styles.reply_btn} >Reply</button>
          </div>
        </div>
        <div>
          <textarea className={styles.comment_text} disabled >
            impressive! though it seems that the drag feature could be improved. but overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well
          </textarea>
        </div>
      </div>
    </div>
   );
}
 
export default Comment;