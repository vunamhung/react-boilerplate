import { Link } from '@tanstack/react-router';

export function TheHeader() {
  return (
    <header>
      <div className="container">
        <nav>
          <ul className="flex flex-wrap space-x-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
