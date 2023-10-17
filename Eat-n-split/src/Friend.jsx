/* eslint-disable react/prop-types */
export default function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="red">
          {friend.name} owes you{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          You and {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
    </li>
  );
}
