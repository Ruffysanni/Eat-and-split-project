import friends from "./InititialFriends";
import Friend from "./Friend";
export default function FriendLists() {
  return (
    <>
      <div>
        <ul>
          {friends.map((friend) => (
            <Friend friend={friend} key={friend.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
