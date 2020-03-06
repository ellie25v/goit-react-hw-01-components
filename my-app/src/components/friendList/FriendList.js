import React from 'react';
import FriendListItem from './friendListItem/FriendListItem';
import styles from './friendList.module.css'


const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map(friends => <FriendListItem friends={friends} key={friends.id} />)}
    </ul>
);

export default FriendList;