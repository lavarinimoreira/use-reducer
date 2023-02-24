import React from "react";

const ReducerComponent = () => {
  /*----------------------------------------------------------------------------------+
   *useReducer returns an array with the first element being the state and the second #
   * element being a dispatch function which when called, will invoke the reducer.    #
   *                                                                                  #
   * const [state, dispatch] = useReducer(reducer, initialState);                     #
   *                                                                                  #
   * ---------------------------------------------------------------------------------*/
  const reducer = (state: number, action: string) => {
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else if (action === "reset") {
      return 0;
    } else {
      throw new Error("This action type ins't supported");
    }
  };

  const [count, dispatch] = React.useReducer(reducer, 0);

  /*----------------------------------------------------------------------------------+
   *Whenever the + button is clicked, dispatch will be invoked.                       #
   * That will call reducer passing it two arguments, state, which will come          #
   * implicitly from React, and action, which will be whatever was passed to dispatch. #
   * What we return from reducer will become our new count.                           #
   * Finally, because count changed, React will re-render the component,              #
   * updating the UI.                                                                 #
   *                                                                                  #
   * ---------------------------------------------------------------------------------*/
  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </React.Fragment>
  );
};

export default ReducerComponent;
