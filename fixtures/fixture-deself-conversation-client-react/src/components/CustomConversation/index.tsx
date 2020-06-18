import React from 'react';

import {
    CustomConversationComponent,
} from '@plurid/deself-conversation-client-react';

import {
    StyledCustomConversation,
    StyledMetadata,
    StyledMetadataFrom,
    StyledMetadataDate,
    StyledMessage,
    StyledActions,
    StyledActionsReply,
    StyledActionsReplies,
    StyledActionsHighlights,
} from './styled';



const CustomConversation = (
    properties: CustomConversationComponent,
) => {
    /** properties */
    const {
        conversation,
        fromConverser,
    } = properties;

    const {
        timestamp,
    } = conversation;

    const timestampDate = new Date(timestamp);
    const timestampString = timestampDate.toLocaleTimeString()
        + ', '
        + timestampDate.toLocaleDateString();


    return (
        <StyledCustomConversation>
            <StyledMetadata>
                <StyledMetadataFrom>
                    {fromConverser.identonym}
                </StyledMetadataFrom>

                <StyledMetadataDate>
                    at {timestampString}
                </StyledMetadataDate>
            </StyledMetadata>

            <StyledMessage>
                {conversation.data}
            </StyledMessage>

            <StyledActions>
                <StyledActionsReply>
                    reply
                </StyledActionsReply>

                <StyledActionsReplies>
                    replies
                </StyledActionsReplies>

                <StyledActionsHighlights>
                    highlights
                </StyledActionsHighlights>
            </StyledActions>
        </StyledCustomConversation>
    );
}


export default CustomConversation;
