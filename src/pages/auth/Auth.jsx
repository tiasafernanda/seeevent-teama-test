import Login from './components/Login';
import Register from './components/Register';
import { useParams } from 'react-router-dom';

export default function Auth() {
  const { type } = useParams();
  return (
    <div>
      <h1>Welcome to my website</h1>
      {type === 'login' ? (
        <Login />
      ) : type === 'register' ? (
        <Register />
      ) : (
        'Halaman Tidak Ditemukan'
      )}
    </div>
  );
}
