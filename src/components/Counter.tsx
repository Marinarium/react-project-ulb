import React, {useState} from 'react';
import './Counter.scss';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleCounterChange = (incrementValue: number): void => {
        setCount(count + incrementValue);
    };

    return (
        <div className="counter">
            <p className="count">{count}</p>
            <div className="wrap">
                <button className="btn" onClick={() => handleCounterChange(1)}>plus</button>
                <button className="btn" onClick={() => handleCounterChange(-1)}>minus</button>
            </div>
        </div>
    );
};

export default Counter;
