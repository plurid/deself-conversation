import React from 'react';

import {
    Conversation,
    Converser,
    CustomConversationComponent,
} from '../modules/data/interfaces';



export interface IContext {
    conversations: Map<string, Conversation>;
    conversers: Map<string, Converser>;
    ConversationComponent?: React.FC<CustomConversationComponent>;
}

const Context = React.createContext<IContext | null>(null);


export default Context;
