import { stat } from "fs";
import React from "react";
import Slider from "./Slider";

const ReducerComponent: React.FC = () => {
  /*----------------------------------------------------------------------------------+
   *useReducer returns an array with the first element being the state and the second #
   * element being a dispatch function which when called, will invoke the reducer.    #
   *                                                                                  #
   * const [state, dispatch] = useReducer(reducer, initialState);                     #
   *                                                                                  #
   * ---------------------------------------------------------------------------------*/
  const reducer = (
    state: { count: number; step: number },
    action: { type: string; step: number }
  ) => {
    if (action.type === "increment") {
      return {
        count: state.count + state.step,
        step: state.step,
      };
    } else if (action.type === "decrement") {
      return {
        count: state.count - state.step,
        step: state.step,
      };
    } else if (action.type === "reset") {
      return {
        count: 0,
        step: state.step,
      };
    } else if (action.type === "updateStep") {
      return {
        count: state.count,
        step: action.step,
      };
    } else {
      throw new Error("This action type ins't supported");
    }
  };

  const [state, dispatch] = React.useReducer(reducer, { count: 0, step: 1 });

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
      <Slider
        min={1}
        max={10}
        onChange={(value: number) =>
          dispatch({
            type: "updateStep",
            step: value,
          })
        }
      />
      <hr />
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", step: state.step })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", step: state.step })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "reset", step: state.step })}>
        Reset
      </button>
    </React.Fragment>
  );
};

export default ReducerComponent;
