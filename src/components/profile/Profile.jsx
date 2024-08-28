import styles from "./profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stat}>
          <span className={styles.statname}>Followers</span>
          <span className={styles.statvalue}>{stats.followers}</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.statname}>Views</span>
          <span className={styles.statvalue}>{stats.views}</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.statname}>Likes</span>
          <span className={styles.statvalue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
