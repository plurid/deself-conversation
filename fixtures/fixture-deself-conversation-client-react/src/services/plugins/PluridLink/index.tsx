import React from 'react';

// import {
// 	RichUtils,
// 	EditorState,
// } from 'draft-js';

import {
    PluridLink
} from '@plurid/plurid-react';



export const pluridLinkStrategy = (
    contentBlock: any,
    callback: any,
    contentState: any,
) => {
	contentBlock.findEntityRanges((character: any) => {
		const entityKey = character.getEntity();
		return (
			entityKey !== null &&
			contentState.getEntity(entityKey).getType() === 'PLURID_LINK'
		);
	}, callback);
};


export const PluridLinkWrapper = (
    properties: any,
) => {
	const {
        contentState,
        entityKey,
        children,
    } = properties;

	const {
        route,
    } = contentState.getEntity(entityKey).getData();

	return (
        <PluridLink
            route={route}
        >
            {children}
        </PluridLink>
	);
};


const addLinkPlugin = {
	// keyBindingFn(event) {
	// 	const editorState = getEditorState();
	// 	const selection = editorState.getSelection();
	// 	if (selection.isCollapsed()) {
	// 		return;
	// 	}
	// 	if (KeyBindingUtil.hasCommandModifier(event) && event.which === 75) {
	// 		return 'add-link';
	// 	}
	// },

	// handleKeyCommand(command, editorState, { getEditorState, setEditorState }) {
	// 	if (command !== 'add-link') {
	// 		return 'not-handled';
	// 	}
	// 	let link = window.prompt('Paste the link -');
	// 	const selection = editorState.getSelection();
	// 	if (!link) {
	// 		setEditorState(RichUtils.toggleLink(editorState, selection, null));
	// 		return 'handled';
	// 	}
	// 	const content = editorState.getCurrentContent();
	// 	const contentWithEntity = content.createEntity('LINK', 'MUTABLE', {
	// 		url: link
	// 	});
	// 	const newEditorState = (EditorState as any).push(
	// 		editorState,
	// 		contentWithEntity,
	// 		'create-entity'
	// 	);
	// 	const entityKey = contentWithEntity.getLastCreatedEntityKey();
	// 	setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey));
	// 	return 'handled';
	// },

	decorators: {
        strategy: pluridLinkStrategy,
        component: PluridLinkWrapper,
    },
};


export default addLinkPlugin;
