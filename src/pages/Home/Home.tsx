import {FC, useEffect, useState} from 'react';
import {Title} from '../../components/Title/Title';

export const Home: FC = () => {
  const localUsername = localStorage.getItem('username');
  const [username, setUsername] = useState<string>(localUsername as string);
  const usernameKey = process.env.USERNAME_KEY;

  useEffect(() => {
    localStorage.setItem(usernameKey as string, username);
  }, [username]);

  return (
    <div>
      <Title
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
};
