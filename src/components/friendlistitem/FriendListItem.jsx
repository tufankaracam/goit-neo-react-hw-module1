import styles from "./friendlistitem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      {isOnline ? (
        <p className={styles.online}>Online</p>
      ) : (
        <p className={styles.offline}>Offline</p>
      )}
    </div>
  );
}
