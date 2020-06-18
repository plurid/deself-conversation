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
     * Space ID.
     */
    to: string;

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
