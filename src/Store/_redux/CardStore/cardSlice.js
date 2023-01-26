import {createSlice} from "@reduxjs/toolkit";

const initialCustomerState = {
  items:[],
  totalPrice:0
};
export const callTypes = {
  list: "list",
  action: "action"
};
export const Slice = createSlice({
  name: "customer",
  initialState: initialCustomerState,
  reducers: {
    catchError: (state, action) => {
         
      state.error = `${action.type}: ${action.payload.error}`;    
     
      if (action.payload.callType === callTypes.list) {       
        state.listLoading = false;         
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;         
      } else {
        state.actionsLoading = true;
      }
    },
    updateAll: (state,action) =>{
        state.error = null;
        state.items = action.payload;
    },
    add: (state,action) =>{
        state.error = null;
        let item = action.payload;
        let newItems = state.items;
        let indexToBeAdded = state.items.map((object) => object.id).indexOf(item.id);
        if(indexToBeAdded == -1){
            const newItem ={
                ...item,
                count:1
            }
            newItems.push(newItem);
        }
        else{
            newItems[indexToBeAdded].count = newItems[indexToBeAdded].count + 1;
        }
        state.items = newItems;
        setTotalPrice(state,null);
    },
    delete:(state,action) =>{
        state.error = null;
        let item = action.payload;
        let newItems = state.items;
        let indexToBeDeleted = state.items.map((object) => object.id).indexOf(item.id);
        if(indexToBeDeleted != -1){ 
            newItems.splice(indexToBeDeleted,1);
            state.items = newItems;
        }
        setTotalPrice(state,null);
    },
    setTotalPrice :(state,action) =>{
        state.error = null;
        let total = 0;
        let items = state.items;
        items.forEach(element => {
            total += element.prize * element.count; 
        });
        state.totalPrice = total;
    }
  }
});