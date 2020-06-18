import {
    uuid,
} from '@plurid/plurid-functions';

import {
    Conversation,
    Converser,
} from '@plurid/deself-conversation-client-react';



export const conversations: Conversation[] = [
    {
        id: uuid.generate(),
        timestamp: Date.now(),
        from: 'one',
        data: 'message one',
    },
    {
        id: uuid.generate(),
        timestamp: Date.now(),
        from: 'two',
        data: 'message two',
    },
    {
        id: uuid.generate(),
        timestamp: Date.now(),
        from: 'two',
        data: 'message three',
    },
];


export const conversers: Converser[] = [
    {
        id: 'one',
        identonym: 'one',
    },
    {
        id: 'two',
        identonym: 'two',
    },
];
