import { useEffect, useState } from 'react';
import './App.css';
import userInfo from './config/.user-config.json';

const SERVER_URL = 'http://localhost:3001';

function App() {
    const [userId, setUserId] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`${SERVER_URL}/auth`, {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(userInfo)})      
        .then((response) => {
            if (response.ok) {
                return response.json();
            } 
            throw response;
        })
        .then((result) => {
                console.log(result)
                setUserId(result.user_id);
                setSessionId(result.session_id);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
            }
        ).catch((error) =>
            setError(error)
        ).finally(() => 
            setLoading(false)
        )
    }, []);

    function getWorkouts() {
        fetch(`${SERVER_URL}/user/${userId}/workouts/${sessionId}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then((workouts) => {
            console.log(workouts);
        })
        .catch((error) => {
            setError(error);
        })
    }

    if (error) {
        return <p>{error}</p>;
    }
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <>
            <h1>Logged in!</h1>
            <div>
                <strong>User Id:</strong>
                <p>{userId}</p>
            </div>
            <div>
                <strong>Session Id:</strong>
                <p>{sessionId}</p>
            </div>
            <button
                onClick={getWorkouts}
            >Get Workouts</button>

        </>

    );
}

export default App;
