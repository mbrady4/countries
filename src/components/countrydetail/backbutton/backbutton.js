import React from 'react';
import { useHistory } from "react-router-dom";
import './backbutton.scss';

// Renders a back button which takes the user back to their most recently viewed page
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