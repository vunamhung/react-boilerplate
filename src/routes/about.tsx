import { createFileRoute } from '@tanstack/react-router';

function AboutRoute() {
  return (
    <div className="container">
      <h3>About</h3>
    </div>
  );
}
export const Route = createFileRoute('/about')({
  component: AboutRoute,
});
