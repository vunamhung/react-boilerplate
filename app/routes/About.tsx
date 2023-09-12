import { useSnapshot } from 'valtio';
import { actions, store } from '~/utilities';

export default function About() {
  const { keyword } = useSnapshot(store);
  return (
    <div className="container">
      {keyword} <br />
      <button onClick={() => actions.setKeyword(Math.random().toString())}>set</button>
      <h1>About Us</h1>
    </div>
  );
}
