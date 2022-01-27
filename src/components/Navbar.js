import { FaMusic } from 'react-icons/fa';

export default function Navbar({ libraryStatus, setLibraryStatus }) {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FaMusic size={25} />
      </button>
    </nav>
  );
}
