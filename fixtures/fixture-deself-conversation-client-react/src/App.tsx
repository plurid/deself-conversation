import React from 'react';

import {
    DeselfConversation,
} from '@plurid/deself-conversation-client-react';

import {
    conversations,
    conversers,
} from './data/mocks';



const App = () => {
    return (
        <DeselfConversation
            conversations={conversations}
            conversers={conversers}
        />
    );
}


export default App;
