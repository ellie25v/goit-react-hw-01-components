import React from 'react'
import PropTypes from 'prop-types';
import styles from './friendListItem.module.css'

const FriendListItem = ({friends: {name, avatar, isOnline}}) => (
    <li className={styles.item}>
  {isOnline ? <span className={styles.statusIsOnline}></span> : <span className={styles.statusIsOffline}></span>}
  <img className={styles.avatar} src={avatar} alt={name} width="48" />
<p className={styles.name}>{name}</p>
</li>
);
FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;