// // // // import {configureStore, combineReducers} from '@reduxjs/toolkit'
// // // // import { persistStore, persistReducer } from 'redux-persist'
// // // // import storage from 'redux-persist/lib/storage'
// // // // import userReducer from  '../features/users/userSlice'
// // // // // Persist configuration
// // // // const persistConfig = {
// // // //   key: "root",
// // // //   storage,
// // // // };
// // // // const persistedUserReducer = persistReducer(
// // // //   persistConfig,
// // // //   userReducer
// // // // );

// // // // const store = configureStore({
// // // //   reducer: {
// // // //     user: persistedUserReducer,
// // // //   },
// // // // });
// // // // export const persistor = persistStore(store);

// // // // export default store;

// // // //2
// // // // import {configureStore, combineReducers} from '@reduxjs/toolkit'
// // // // import { persistStore, persistReducer } from 'redux-persist'
// // // // import storage from 'redux-persist/lib/storage'
// // // // import userReducer from  '../features/users/userSlice'



// // // // const persistConfig = {
// // // //   key: 'root',
// // // //   storage,
// // // // }

// // // // const persistedReducer = persistReducer(persistConfig, rootReducer)


// // // // const store = configureStore({
// // // //   reducer: {
// // // //     user: userReducer
// // // //   }
// // // // })

// // // // export default store

// // // //3
// // // import { configureStore } from "@reduxjs/toolkit";
// // // import {
// // //   persistStore,
// // //   persistReducer,
// // // } from "redux-persist";
// // // import storage from "redux-persist/lib/storage";

// // // import userReducer from "../features/users/userSlice";

// // // const persistConfig = {
// // //   key: "root",
// // //   storage,
// // // };

// // // const persistedUserReducer = persistReducer(
// // //   persistConfig,
// // //   userReducer
// // // );

// // // // const store = configureStore({
// // // //   reducer: {
// // // //     user: persistedUserReducer,
// // // //   },
// // // // });
// // // const store = configureStore({
// // //   reducer: {
// // //     user: persistedUserReducer,
// // //   },

// // //   middleware: (getDefaultMiddleware) =>
// // //     getDefaultMiddleware({
// // //       serializableCheck: {
// // //         ignoredActions: [
// // //           "persist/PERSIST",
// // //           "persist/REHYDRATE",
// // //         ],
// // //       },
// // //     }),
// // // });

// // // export const persistor = persistStore(store);

// // // export default store;


// // import { configureStore } from "@reduxjs/toolkit";

// // import {
// //   persistStore,
// //   persistReducer,
// // } from "redux-persist";

// // //import storage from "redux-persist/lib/storage";
// // import storageModule from "redux-persist/lib/storage";

// // const storage = storageModule.default || storageModule;
// // import userReducer from "../features/users/userSlice";

// // const persistConfig = {
// //   key: "root",
// //   storage: storage,
// // };
// // console.log("STORAGE:", storage);
// // console.log("getItem:", storage.getItem);
// // console.log("setItem:", storage.setItem);
// // const persistedUserReducer = persistReducer(
// //   persistConfig,
// //   userReducer
// // );

// // const store = configureStore({
// //   reducer: {
// //     user: persistedUserReducer,
// //   },

// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [
// //           "persist/PERSIST",
// //           "persist/REHYDRATE",
// //         ],
// //       },
// //     }),
// // });

// // export const persistor = persistStore(store);

// // export default store;

// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import userReducer from "../features/users/userSlice";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const rootReducer = combineReducers({
//   user: userReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };
// console.log("STORAGE:", storage);
// console.log("getItem:", storage.getItem);
// console.log("setItem:", storage.setItem);
// const persistedReducer = persistReducer(
//   persistConfig,
//   rootReducer
// );

// const store = configureStore({
//   reducer: persistedReducer,

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),

//   devTools: process.env.NODE_ENV === "development",
// });

// export const persistor = persistStore(store);

// export default store;


// import { createRoot } from 'react-dom/client'
// import { configureStore } from '@reduxjs/toolkit'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react'

// import App from './App'
// import rootReducer from './reducers'

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// let persistor = persistStore(store)

// const container = document.getElementById('root')

// if (container) {
//   const root = createRoot(container)

//   root.render(
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>,
//   )
// } else {
//   throw new Error(
//     "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
//   )
// }

// import { configureStore } from "@reduxjs/toolkit";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// import storageModule from "redux-persist/lib/storage";

// import userReducer from "../features/users/userSlice";

// const storage = storageModule.default || storageModule;

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedUserReducer = persistReducer(
//   persistConfig,
//   userReducer
// );

// const store = configureStore({
//   reducer: {
//     user: persistedUserReducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [
//           FLUSH,
//           REHYDRATE,
//           PAUSE,
//           PERSIST,
//           PURGE,
//           REGISTER,
//         ],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";

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

import storageModule from "redux-persist/lib/storage";

import userReducer from "../features/users/userSlice";

const storage = storageModule.default || storageModule;

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Persist the root reducer
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

// {
//   _persist: {
//     version: 1,
//     rehydrated: true
//   }
// }