import React from 'react';
import { FirstName, LastName } from './App';

function Comp3() {
  return (
    <div>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <LastName.Consumer>
              {(lName) => {
                return (
                  <>
                    <h3> Comp3 Data with FirstName : {fName} and Last name : {lName}</h3>
                  </>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
}

export default Comp3;
