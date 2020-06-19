import {
    uuid,
} from '@plurid/plurid-functions';

import {
    Conversation,
    Converser,
} from '@plurid/deself-conversation-client-react';



export const conversations: Conversation[] = [
    {
        id: 'one',
        timestamp: Date.now(),
        from: 'one',
        data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed odio ac ipsum pharetra hendrerit. Vestibulum quis nunc vel metus condimentum maximus. Nullam gravida odio a enim convallis laoreet. Vivamus ac lacus mollis, mollis elit malesuada, lobortis enim. Sed at libero nisl. Donec in nisi ullamcorper, tempus justo et, blandit felis. Quisque dignissim urna nulla, vel malesuada diam porta vitae. Vivamus vulputate molestie leo quis varius. Fusce risus mi, auctor a erat nec, pellentesque sollicitudin turpis. Mauris eleifend sem quis lacus dapibus pellentesque. Morbi varius feugiat elementum. Donec vehicula purus sed dignissim cursus. Ut varius purus sapien, nec mattis ante consequat cursus. Suspendisse eu sollicitudin purus, ut rhoncus ex. Curabitur sed ante massa. Aenean eget ante et mauris iaculis gravida.',
    },
    {
        id: uuid.generate(),
        timestamp: Date.now(),
        from: 'two',
        data: 'message two',
    },
    {
        id: uuid.generate(),
        timestamp: Date.now(),
        from: 'two',
        data: 'message three',
    },
];


export const conversers: Converser[] = [
    {
        id: 'one',
        identonym: 'One',
    },
    {
        id: 'two',
        identonym: 'Two',
    },
];
