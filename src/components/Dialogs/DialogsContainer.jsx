import React from 'react';
import {sendMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, {
        sendMessage
    }),
    withAuthRedirect,
)(Dialogs);