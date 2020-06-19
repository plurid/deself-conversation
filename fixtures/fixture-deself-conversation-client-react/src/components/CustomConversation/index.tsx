import React, {
    useState,
    useEffect,
} from 'react';

import {
    Editor,
    EditorState,
    ContentState,
    RichUtils,
    CompositeDecorator,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

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

import PluridLinkPlugin from '../../services/plugins/PluridLink';



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


    const compositeDecorator = new CompositeDecorator([
        PluridLinkPlugin.decorators,
    ]);


    /** state */
    const [readOnly, setReadOnly] = useState(false);
    const [textState, setTextState] = useState(() => EditorState.createWithContent(
        ContentState.createFromText(conversation.data),
        compositeDecorator,
    ));



    const onAddLink = () => {
        const editorState = textState;
        const selection = editorState.getSelection();

        const link = window.prompt('Paste the link -');

        // if (!link) {
        //     this.onChange(RichUtils.toggleLink(editorState, selection, null));
        //     return 'handled';
        // }

        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity(
            'PLURID_LINK',
            'MUTABLE',
            {
                route: link,
            }
        );
        const newEditorState = (EditorState as any).push(
            editorState,
            contentWithEntity,
            'create-entity'
        );

        const entityKey = contentWithEntity.getLastCreatedEntityKey();

        setTextState(RichUtils.toggleLink(newEditorState, selection, entityKey));

        return 'handled';
    };


    /** render */
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
                <div
                    onClick={onAddLink}
                >
                    add link
                </div>
                <div
                    onClick={() => setReadOnly(read => !read)}
                >
                    read only
                </div>

                <Editor
                    editorState={textState}
                    onChange={setTextState}
                    readOnly={readOnly}
                />
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
