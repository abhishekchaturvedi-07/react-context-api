// From useContext

import React, {useContext} from 'react'
import Comp3 from './Comp3';
import { FirstName, LastName } from './App';
function Comp2() {
    const fName = useContext(FirstName)
    const lName = useContext(LastName)
    return (
        <div>
            Comp 2 Data - useContext() - My Name is {fName} {lName}
            <Comp3 />
        </div>
    )
}

export default Comp2
