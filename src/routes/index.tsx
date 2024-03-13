import { createFileRoute } from '@tanstack/react-router';

function HomeRoute() {
  return (
    <div className="container">
      <h3 className="text-blue-500">Welcome Home!</h3>
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: HomeRoute,
});
