import React from 'react';
import { useHistory } from "react-router-dom";
import './backbutton.scss';

const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button onClick={() => history.goBack()}
                  className='back'><span>&#8592;</span> Back</button>
        </>
    );
};

export default BackButton;