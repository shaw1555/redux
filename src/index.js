import store from './store';
import {bugAdd, bugRemove, bugResolve } from "./actions";

const unsubscribe = store.subscribe(()=>{
  console.log('store changed! '+ store.getState())
})


store.dispatch(bugAdd("Bug 1"));
console.log(store.getState());

unsubscribe();

store.dispatch(bugResolve(1));
console.log(store.getState());

store.dispatch(bugRemove(1));
console.log(store.getState());