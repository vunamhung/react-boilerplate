import { Link } from 'react-router-dom';

export function TheHeader() {
  return (
    <header>
      <div className="container">
        <nav>
          <ul className="flex flex-wrap space-x-3">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
