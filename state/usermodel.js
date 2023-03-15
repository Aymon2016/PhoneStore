
import { action, thunk } from 'easy-peasy'
import getPlaylist from '../api'


const User = {

    data: {},
    isLoading: false,

    addPlaylist: action((state, payload) => {
        state.data[payload.playlistId] = payload
    }),

}


export default User