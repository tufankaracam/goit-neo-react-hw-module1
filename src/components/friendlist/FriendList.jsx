import styles from "./friendlist.module.css";
import FriendListItem from "../friendlistitem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.items}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
