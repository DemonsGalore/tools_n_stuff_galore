import { useState } from 'react';

export const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    );
};

export default App;
