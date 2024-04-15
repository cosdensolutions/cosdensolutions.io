import { User } from './page';

type UsersListProps = {
  users: User[];
};

export default function UsersList({ users }: UsersListProps) {
  return (
    <>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </>
  );
}
