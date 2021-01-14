
let rerenderEntireTree = () => {
    console.log('hi');
}

let state = {
    profilePage: {
        posts: [
            {message: ' Hi, how are you?', likes: '5'},
            {message: ' This is my first time', likes: '10'},
            {message: ' What are you doing here?', likes: '0'}
        ],
        newPostText: 'pro100n1tr0'
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: ' Andrew'},
            {id: 2, name: ' Brandon'},
            {id: 3, name: ' Cortney'},
            {id: 4, name: ' Drew'},
            {id: 5, name: ' Ethan'}
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How you doing?'},
            {id: 3, message: 'I want pizza'},
            {id: 4, message: 'Apple tree shadow'},
            {id: 5, message: 'Give me a hug'}
        ]
    },
    sidebar: {
        friends: [
            {name: 'Andrew', ava: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'},
            {name: 'Brandon', ava: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'},
            {name: 'Cortney', ava: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'}
        ]
    }
}
export const addPost = () => {
    let newPost = {
        message: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree= observer;
}

export default state;