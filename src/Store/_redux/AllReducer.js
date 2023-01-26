import { persistReducer,persistStore } from "redux-persist";
import { createStore} from 'redux';
import * as cardReducer from "../_redux/CardStore/cardSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const  carddReducer = persistReducer({ storage:AsyncStorage, key: "state-card",blacklist:[]},cardReducer.Slice.reducer)

const  cardReducerstore= createStore(carddReducer);

persistStore(cardReducerstore);

