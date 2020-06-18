import React from 'react';

import {
    DeselfConversation,
} from '@plurid/deself-conversation-client-react';

import CustomConversation from './components/CustomConversation';

import {
    conversations,
    conversers,
} from './data/mocks';



const App = () => {
    return (
        <DeselfConversation
            conversations={conversations}
            conversers={conversers}
            ConversationComponent={CustomConversation}
            configuration={{
                elements: {
                    plane: {
                        width: 0.3,
                        controls: {
                            show: false,
                        },
                    },
                },
            }}
        />
    );
}


export default App;
