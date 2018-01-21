// src/models/UserStore.js
import { observable, action, computed, useStrict } from 'mobx';
import axios from 'axios';

useStrict(true);

class UserStore {
    // Values marked as 'observable' can be watched by 'observers'
    @observable users = [];
    @observable selectedUser = {};
    @computed get selectedId() { return this.selectedUser.id; }
    // In strict mode, only actions can modify mobx state
    @action setUsers = (users) => { this.users = [...users]; }
    @action selectUser = (user) => { this.selectedUser = user; }
    // Managing how we clear our observable state
    @action clearSelectedUser = () => { this.selectedUser = {}; }
    // An example that's a little more complex
    @action getUsers() {
        //Managing Async tasks like ajax calls with Mobx actions
        axios.get('http://jsonplaceholder.typicode.com/users').then( response => {
            this.setUsers(response.data);
        });
    }
}

const store = new UserStore();

export default store;
export { UserStore };