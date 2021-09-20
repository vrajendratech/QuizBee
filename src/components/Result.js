import React from 'react';

const Result = ({score, playAgain}) => {
    return(
<div >
    <div className='score'> You score {score} / 5 correct answers!</div>
    <button className='playBtn' onClick={playAgain}>
        Play again!
    </button>
</div>
    )
}

export default Result;