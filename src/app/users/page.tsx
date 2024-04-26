import { User } from '@/types/User';

import UsersList from './UsersList/UsersList';

export default async function UsersPage() {
  const response = await fetch('/api/users');

  if (!response.ok) {
    return <div>Failed to load users</div>;
  }

  const users = (await response.json()) as User[];

  return (
    <main>
      <h1>Users</h1>
      <UsersList users={users} />
    </main>
  );
}
