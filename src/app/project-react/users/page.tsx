type User = {
  id: number;
  name: string;
};

export default async function UsersPage() {
  const response = await fetch('/api/users');

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
