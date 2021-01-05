let state = {
    profilePage: {
        posts: [
            {message:' Hi, how are you?', likes:'5'},
            {message:' This is my first time', likes:'10'},
            {message:' What are you doing here?', likes:'0'}
        ]
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
            {id: 3, message: 'I want pizza?'},
            {id: 4, message: 'Apple tree shadow'},
            {id: 5, message: 'Give me a hug'}
        ]
    },
    sidebar: {
        friends: [
            {name: 'Andrew'},
            {name: 'Brandon'},
            {name: 'Cortney'}
        ]
    }
}

export default state;