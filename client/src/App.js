import {Routes, Route} from 'react-router-dom';

import Chat from './pages/Chat';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Chat />} />
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
}

export default App;
