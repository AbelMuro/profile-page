import React, {useState, ChangeEvent} from 'react';
import * as styles from './styles.module.css';

type Props = {
    initialState: string
}

function TextArea({initialState} : Props) {
    const [text, setText] = useState<string>(initialState);

    const handleText = (e : ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    return (
        <textarea 
            className={styles.textarea}
            value={text}
            onChange={handleText}
            >

        </textarea>
    )
}

export default TextArea;