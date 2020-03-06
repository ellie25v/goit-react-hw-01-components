import React from 'react';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics.js';
import FriendsList from './components/friendList/FriendList';
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import user from '../src/user.json';
import data from '../src/statistical-data.json';
import friends from '../src/friends.json';
import transactions from '../src/transactions.json';

const App = () => <>
<Profile {...user} />
<Statistics title="Upload stats" data={data} />
<FriendsList friends={friends}/>
<TransactionHistory transactions={transactions}/>
</>

export default App;
