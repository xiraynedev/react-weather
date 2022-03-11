import {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {Content} from './pages/Content/Content';

export const App: FC = () => {
  return (
    <div className='w-screen h-screen border bg-gradient-to-br from-primary flex justify-center items-center'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/content' element={<Content />} />
        </Routes>
      </Router>
    </div>
  )
}
