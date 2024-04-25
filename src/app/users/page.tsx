import { User } from '@/types/User';

export default async function UsersPage() {
  const response = await fetch('/api/users');

  if (!response.ok) {
    return <div>Failed to load users</div>;
  }

  const users = (await response.json()) as User[];

  return (
    <main>
      <h1>Users</h1>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </main>
  );
}
