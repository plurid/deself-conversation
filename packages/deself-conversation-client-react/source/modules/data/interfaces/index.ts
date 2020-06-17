/**
 * A Conversation happens between an agent (a Converser) and a space.
 *
 * The space can be dwelled by one or more Conversers.
 */

export interface Conversation {
    from: string; // Converser ID
    to: string; // space ID
    data: string;
}


export interface Converser {
    id: string;
}
