import React, {
    useContext,
} from 'react';

import {
    PluridComponentProperty,
} from '@plurid/plurid-data';

import {
    Conversation,
} from '../../data/interfaces';

import Context from '../../../Application/context';



export interface ConversationProperties {
    plurid: PluridComponentProperty,
}

const Conversation = (
    properties: ConversationProperties,
) => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        conversations,
        conversers,
        ConversationComponent,
    } = context;


    /** properties */
    const {
        plurid,
    } = properties;

    const {
        route,
    } = plurid;

    const {
        plane,
    } = route;

    const {
        parameters,
    } = plane;

    const id = parameters.id;

    if (!id) {
        return (<></>);
    }

    const conversation = conversations.get(id);

    if (!conversation) {
        return (<></>);
    }

    const {
        data,
        from,
        timestamp,
        children,
        html,
    } = conversation;

    const fromConverser = conversers.get(from);

    if (!fromConverser) {
        return (<></>);
    }


    /** render */
    if (ConversationComponent) {
        return (
            <ConversationComponent
                conversation={conversation}
                fromConverser={fromConverser}
            />
        );
    }

    return (
        <div>
            <div>
                {timestamp}
            </div>

            <div>
                {fromConverser.identonym}
            </div>

            <div>
                {data}
            </div>
        </div>
    );
}


export default Conversation;
