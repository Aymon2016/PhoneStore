import { createStore, persist } from 'easy-peasy';
import User from './usermodel'

const store = createStore(persist({

    User: User
},
    {
        storage: localStorage,
    }
)
);

export default store