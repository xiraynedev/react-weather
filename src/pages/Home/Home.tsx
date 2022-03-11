import {FC, useEffect, useState} from 'react';
import {Title} from '../../components/Title/Title';
import {SearchBar} from '../../components/Search/SearchBar/SearchBar';

export const Home: FC = () => {
  const localUsername = localStorage.getItem('username');
  const [username, setUsername] = useState<string>(localUsername as string);
  const usernameKey = process.env.USERNAME_KEY;

  useEffect(() => {
    localStorage.setItem(usernameKey as string, username);
  }, [username]);

  return (
    <div className="flex flex-col items-center w-4/12 mx-auto justify-center h-screen">
      <Title
        username={username}
        setUsername={setUsername}
      />
      <SearchBar/>
    </div>
  );
};
