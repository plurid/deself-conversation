import React from 'react';

import {
    indexing,
} from '@plurid/plurid-functions';

import {
    PluridApplication,
    PluridPlane,
    PluridPartialConfiguration,
} from '@plurid/plurid-react';

import {
    Conversation,
    Converser,
} from '../modules/data/interfaces';

import ConversationComponent from '../modules/components/Conversation';

import Context, {
    IContext,
} from './context';



export interface DeselfConversationProperties {
    conversations: Conversation[];
    conversers: Converser[];
    configuration?: PluridPartialConfiguration;
}

const DeselfConversation = (
    properties: DeselfConversationProperties,
) => {
    /** properties */
    const {
        conversations,
        conversers,
        configuration,
    } = properties;

    const planes: PluridPlane[] = [
        {
            route: '/conversation/:id',
            component: {
                kind: 'react',
                element: ConversationComponent,
            },
        },
    ];


    /** context */
    const context: IContext = {
        conversations: indexing.create(conversations, 'map', 'id'),
        conversers: indexing.create(conversers, 'map', 'id'),
    };


    /** render */
    return (
        <Context.Provider
            value={context}
        >
            <PluridApplication
                planes={planes}
                configuration={configuration}
            />
        </Context.Provider>
    );
}


export default DeselfConversation;
