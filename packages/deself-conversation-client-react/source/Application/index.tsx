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
    CustomConversationComponent,
} from '../modules/data/interfaces';

import ConversationComponent from '../modules/components/Conversation';

import Context, {
    IContext,
} from './context';



const defaultSpaceConfiguration: PluridPartialConfiguration = {
    elements: {
        plane: {
            width: 0.3,
            controls: {
                show: false,
            },
        },
    },
}


export interface DeselfConversationProperties {
    conversations: Conversation[];
    conversers: Converser[];
    configuration?: PluridPartialConfiguration;
    ConversationComponent?: React.FC<CustomConversationComponent>;
}

const DeselfConversation = (
    properties: DeselfConversationProperties,
) => {
    /** properties */
    const {
        conversations,
        conversers,
        configuration,
        ConversationComponent: ConversationComponentProperty,
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

    const view = conversations.map(conversation => '/conversation/' + conversation.id);


    /** context */
    const context: IContext = {
        conversations: indexing.create(conversations, 'map', 'id'),
        conversers: indexing.create(conversers, 'map', 'id'),
        ConversationComponent: ConversationComponentProperty,
    };


    /** render */
    return (
        <Context.Provider
            value={context}
        >
            <PluridApplication
                planes={planes}
                configuration={configuration || defaultSpaceConfiguration}
                view={view}
            />
        </Context.Provider>
    );
}


export default DeselfConversation;
