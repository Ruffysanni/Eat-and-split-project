/* eslint-disable react/prop-types */
// import friends from "./InititialFriends";
import Friend from "./Friend";
export default function FriendLists({ friends, onSelection, selectedFriend }) {
  return (
    <>
      <div>
        <ul>
          {friends.map((friend) => (
            <Friend
              friend={friend}
              selectedFriend={selectedFriend}
              key={friend.id}
              onSelection={onSelection}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
