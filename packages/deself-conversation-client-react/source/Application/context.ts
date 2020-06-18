import React from 'react';

import {
    Conversation,
    Converser,
} from '../modules/data/interfaces';



export interface IContext {
    conversations: Map<string, Conversation>;
    conversers: Map<string, Converser>;
}

const Context = React.createContext<IContext | null>(null);


export default Context;
