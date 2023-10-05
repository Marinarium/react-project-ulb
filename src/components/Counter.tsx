import React, {useState} from 'react';
import cl from './Counter.module.scss';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleCounterChange = (incrementValue: number): void => {
        setCount(count + incrementValue);
    };

    return (
        <div className={cl.counter}>
            <p className={cl.count}>{count}</p>
            <div className={cl.wrap}>
                <button className={cl.btn} onClick={() => handleCounterChange(-1)}>minus</button>
                <button className={cl.btn} onClick={() => handleCounterChange(1)}>plus</button>
            </div>
        </div>
    );
};

export default Counter;
