import React, {
    useContext,
} from 'react';

import {
    PluridComponentProperty,
} from '@plurid/plurid-data';

import {
    StyledConversation,
    StyledMetadata,
    StyledMetadataFrom,
    StyledMetadataDate,
} from './styled';

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

    const fromConverser = conversers.get(conversation.from);

    if (!fromConverser) {
        return (<></>);
    }


    /** computing */
    const {
        data,
        timestamp,
        children,
        html,
    } = conversation;

    const timestampDate = new Date(timestamp);
    const timestampString = timestampDate.toLocaleTimeString()
        + ', '
        + timestampDate.toLocaleDateString();


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
        <StyledConversation>
            <StyledMetadata>
                <StyledMetadataFrom>
                    {fromConverser.identonym}
                </StyledMetadataFrom>

                <StyledMetadataDate>
                    at {timestampString}
                </StyledMetadataDate>
            </StyledMetadata>

            <div>
                {data}
            </div>
        </StyledConversation>
    );
}


export default Conversation;
