import { useNavigate, useParams } from "react-router-dom";
import styles from "./GuestBook.module.css";
import GuestbookService from "../../services/GuestbookService";
import { useEffect, useState } from "react";
import GuestbookEntry from "../../models/GuestbookEntry.model";
import ImageService from "../../../bootle/services/ImageService";


export const GuestBook = () => {
    const navigate = useNavigate();
    const [guestbookEntry, setGuestbookEntry] = useState<GuestbookEntry[]>([]);
    const { guestbookId } = useParams();
    
console.log("loading!!!!!!")
    useEffect(() => {
        console.log("guestbookId"+guestbookId)
        
            GuestbookService.getAll()
                .then((res) => {
                    setGuestbookEntry(res.data);
                    console.log("sfbaghsfdhadscvbhdsgfhjkgadshjkfgdjksafgagfkj"+res.data)
                })
                .catch((error) => {
                    console.error("Error fetching guestbook details:", error);
                });
        
    }, [guestbookId]);
   

    
    return (
        <div>
        <div className={styles['div-container']}>
        <h2 className={styles.title}>Immortalise your Name inside this Guestbook!</h2>
        <a href="#" className={styles.link}>
            <svg
                viewBox="0 0 200 200"
                width="200"
                height="200"
                onClick={() => navigate("/guestbook/add")}
                xmlns="http://www.w3.org/2000/svg"
                className={styles.link__svg}
                aria-labelledby="link1-title link1-desc"
            >
                <title id="link1-title">JUST CLICK IT !</title>
                <desc id="link1-desc">
                    A rotating link with text placed around a circle with an arrow inside
                </desc>
                <path
                    id="link-circle"
                    className={styles.link__path}
                    d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                    stroke="none"
                    fill="none"
                />
                <path
                    className={styles.link__arrow}
                    d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"
                    fill="none"
                />
                <text className={styles.link__text}>
                    <textPath href="#link-circle" stroke="none">
                        ADD YOUR REVIEW TODAY ! 🥃🍹
                    </textPath>
                </text>
            </svg>
        </a>
        </div>
        <ul className={styles.ul}>
  {guestbookEntry.map((entry, index) => (
    <li key={index} className={styles.li}>
      <div className={styles.h3}>
        <a className="text-white text-decoration-none" href="javascript://">
          {entry.name}
          <br />
          {entry.description}
        </a>
      </div>
      <div className={styles['text-light']}>January 14 2023</div>
      
      {entry.picture_id && (
        <img
          src={ImageService.imageUrl(entry.picture_id)}
          className={styles.img}
          alt="product image"
          loading="lazy"
        />
      )}
    </li>
  ))}
</ul>

    </div>
    
    );
};

export default GuestBook;
