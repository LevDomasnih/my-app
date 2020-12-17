const ADD_POST = 'ADD-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 105},
                {id: 2, message: "It's my first post", likesCount: 10},
                {id: 3, message: "Lol", likesCount: 5000},
                {id: 4, message: "Kek", likesCount: 9400},
            ],
            newPostText: '',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: "I'm fine"},
            ],
            newMessageText: '',
            dialogs: [
                {
                    id: 1,
                    name: "Andrey",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyddo-97z_upyrInLR38dIrT__x3Ov1lijg&usqp=CAU"
                },
                {
                    id: 2,
                    name: "Valera",
                    avatar: "https://pm1.narvii.com/6805/09a1ecaf3a8662e0fb7d482e13d9b865088486f2v2_hq.jpg"
                },
                {
                    id: 3,
                    name: "Svetha",
                    avatar: "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg"
                },
                {id: 4, name: "Leva", avatar: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg"},
                {
                    id: 5,
                    name: "Kris",
                    avatar: "https://avatars.mds.yandex.net/get-zen_doc/3420563/pub_5f0081e091f42b3b785b61a4_5f0082848694a157aa179dd0/scale_1200"
                },
                {
                    id: 6,
                    name: "Sasha",
                    avatar: "https://static10.tgstat.ru/channels/_0/de/deeb9f0e7b43dc6d67f4628356c274d7.jpg"
                },
            ],
        },


        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Andrey",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyddo-97z_upyrInLR38dIrT__x3Ov1lijg&usqp=CAU"
                },
                {
                    id: 2,
                    name: "Valera",
                    avatar: "https://pm1.narvii.com/6805/09a1ecaf3a8662e0fb7d482e13d9b865088486f2v2_hq.jpg"
                },
                {
                    id: 3,
                    name: "Svetha",
                    avatar: "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg"
                },
            ]
        }
    },
    _callSubscriber() {
        return null;
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            if (this._state.profilePage.newPostText === '') return;
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

        if (action.type === SEND_MESSAGE) {
            if (this._state.dialogsPage.newMessageText === '') return;
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            };
            debugger;
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: SEND_MESSAGE}); // rename
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text}); // rename


window.store = store;

export default store;