let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, text: "Da - pizda", likesCount: 23 },
        { id: 1, text: "Raz - pidoraz", likesCount: 6 },
        { id: 2, text: "Dva - pizda", likesCount: 45 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Maks" },
        { id: 2, name: "Pete" },
        { id: 3, name: "John" },
        { id: 4, name: "Jordan" },
      ],
      messages: {
        messagesList: [
          { id: 1, message: "Hi", my: false },
          { id: 2, message: "How are you?", my: false },
          { id: 3, message: "Fuck yourself", my: true },
        ],
        newMessageText: "",
      },
    },
  },
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 5,
      text: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscribe(this._state);
  },
  updateNewPostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscribe(this._state);
  },
  updateNewMessageText(text) {
    this._state.dialogsPage.messages.newMessageText = text;
    this._callSubscribe(this._state);
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },
};

export default store;
window.store = store;
