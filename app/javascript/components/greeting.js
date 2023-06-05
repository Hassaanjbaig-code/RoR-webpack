import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from "../store/greetings/greeting";

const GreetingComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGreeting());
    }, []);
    
    const greetingData = useSelector((state) => state.greeting.data);
    
    return (
        <div>
            <h1>{greetingData.greeting}</h1>
        </div>
    );
}

export default GreetingComponent;
