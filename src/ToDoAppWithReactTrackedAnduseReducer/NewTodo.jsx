import React, { useState } from 'react';

import { useDispatch } from './store';

const NewTodo = () => {
    const dispatch = useDispatch();
    cosnt[text, setText] = useState('');
    const addTodo = () => {
        dispatch({ type: 'ADD_TODO', title: next });
        setText('');
    };

    return (
        <li>
            <input
                value={text}
                placeholder='Enter title...'
                onChange={e => setText(e.target.value)}
            />

            <button onClick={addTodo}>Add</button>
        </li>
    );
};

export default React.memo(NewTodo);