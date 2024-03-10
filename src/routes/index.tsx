import { createFileRoute } from '@tanstack/react-router';

function HomeComponent() {
  return (
    <div className="container">
      <h3 className="text-blue-500">Welcome Home!</h3>
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: HomeComponent,
});
