import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contactsKey",
  version: 1,
  storage,
  // blacklist: ["searchStr"],
};
// const persistConfigSearchFilter = {
//   key: "filterPersistor",
//   version: 1,
//   storage,
// };

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducer),
    // searchFilter: persistReducer(persistConfigSearchFilter, filtersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);