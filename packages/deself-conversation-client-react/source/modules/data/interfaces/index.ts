/**
 * A Conversation happens between an agent (a Converser) and a space.
 *
 * The space can be dwelled by one or more Conversers.
 */
export interface Conversation {
    id: string;

    /**
     * UNIX timestamp
     */
    timestamp: number;

    /**
     * Converser ID.
     */
    from: string;

    /**
     * Conversation message.
     */
    data: string;

    /**
     * Parses the `data` as HTML.
     */
    html?: boolean;

    children?: Conversation[];
}


export interface Converser {
    id: string;
    identonym: string;
}



export interface CustomConversationComponent {
    conversation: Conversation;
    fromConverser: Converser;
}



export interface ConversationData {
    text: string;
    links: ConversationLink[];
}


export interface ConversationLink {
    start: number;
    length: number;
    router: string;
}
