import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/userPhoto.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const contacts = Object.entries(props.profile.contacts)
    let isEveryNull = Object.values(props.profile.contacts)
    isEveryNull = isEveryNull.some(elem => elem != null)

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img
                    src='https://strana.ua/img/article/2625/70_main.jpeg'/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={style.mainPhoto} />
                { props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> }
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} /> {/*status*/}

                <div>
                    Name: {props.profile.fullName}
                </div>
                <hr/>
                <div>
                    Description: {props.profile.aboutMe}
                </div>
                <hr/>
                <div>
                    Contacts:
                    {isEveryNull &&<ul>
                        {contacts.map(([key, value]) => {
                            return value != null ? <li>{key}: {value}</li> : null;
                        })}
                    </ul>}
                </div>
                <hr/>
                <div>
                    <br/>lookingForAJob: {props.profile.lookingForAJob ? "YES" : "NO"}
                    <br/>lookingForAJobDescription: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "NOPE"}
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;