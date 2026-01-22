import React from "react";
import { LogOut, UserRoundPen } from 'lucide-react';

const Profile: React.FC = () => {
    return(
        <section id="profile-wrapper">
            <div id="profile-description-wrapper">
                <div id="profile-picture-wrapper">
                    <UserRoundPen size={32} strokeWidth={1.2}/>
                </div>
                <div id="profile-data-wrapper">
                    <p id="name">user</p>
                    <p id="email">user@mail.com</p>
                </div>
            </div>
            <div id="LogoutBtn">
                <LogOut size={23} strokeWidth={1.2}/>
            </div>
        </section>
    );
}

export default Profile;