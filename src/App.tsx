import { useState } from 'react';
import './App.css';
import Login from './features/auth/Login';
import { Workouts } from './features/workouts/Workouts';

function App() {
    const [showWorkouts, setShowWorkouts] = useState(false);
    const handleGetWorkouts = () => setShowWorkouts(!showWorkouts);

    if (showWorkouts) {
        return (
            <Workouts/>
        )
    }

    return (
        <>
            <Login></Login>
            <button 
                className='button'
                onClick={handleGetWorkouts}
            >
                Toggle Workouts
            </button>
        </>
    );
}

export default App;
