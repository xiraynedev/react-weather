import {ChangeEvent, FC} from 'react';

interface TitleProps {
  username: string;
  setUsername: (username: string) => void
}

export const Title: FC<TitleProps> = ({username, setUsername}) => {

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  return (
    <div className='flex gap-5 w-full'>
      <h1 className='text-5xl text-white'>Hello</h1>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        className='bg-transparent border-0 border-b-2 py-2 px-4 focus:outline-none'
      />
    </div>
  )
}