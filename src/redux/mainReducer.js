import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2171591Reducer from '../features/SignIn2171591/redux/reducers'
import SignIn2171577Reducer from '../features/SignIn2171577/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2171591: SignIn2171591Reducer,
SignIn2171577: SignIn2171577Reducer,

});