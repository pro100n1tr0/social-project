import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let newMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map( m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement} className={s.newMsgArea}></textarea>
                    <button onClick={newMessage} className={s.messageBtn}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;