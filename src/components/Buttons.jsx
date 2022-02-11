import React from 'react';
import { Button } from 'reactstrap';

function Buttons({ clickHandler, btnText, className }) {
    return (
        <div>
            <Button 
                color="primary"
                onClick={clickHandler}
                className={className}
                >{btnText}
            </Button>
        </div>
    );
}

export default Buttons;