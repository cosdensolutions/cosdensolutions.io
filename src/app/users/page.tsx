import UsersList from './UsersList';

export type User = {
  id: number;
  name: string;
};

export default async function UsersPage() {
  const response = await fetch('/api/users');

  const users = (await response.json()) as User[];

  return (
    <main>
      <h1>Users</h1>
      <UsersList users={users} />
    </main>
  );
}
