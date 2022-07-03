import { Col } from 'react-bootstrap';
import { ChatList, Message } from "./ChatList";
import profilePic from 'assets/images/users/avatar-1.jpg';
import profilePic2 from 'assets/images/users/avatar-5.jpg';

const Chat = () => {
    const chatMessages: Message[] = [
                {
                    id: 1,
                    userPic: profilePic2,
                    userName: 'Geneva',
                    text: 'Hello!',
                    postedOn: '10:00',
                },
                {
                    id: 2,
                    userPic: profilePic,
                    userName: 'Dominic',
                    text: 'Hi, How are you? What about our next meeting?',
                    postedOn: '10:01',
                },
                {
                    id: 3,
                    userPic: profilePic2,
                    userName: 'Geneva',
                    text: 'Yeah everything is fine',
                    postedOn: '10:02',
                },
                {
                    id: 4,
                    userPic: profilePic,
                    userName: 'Dominic',
                    text: "Wow that's great!",
                    postedOn: '10:03',
                },
                {
                    id: 5,
                    userPic: profilePic2,
                    userName: 'Dominic',
                    text: 'Cool!',
                    postedOn: '10:03',
                },
            ];
    return (
        <Col xl={12}>
            <ChatList chatMessages={chatMessages}></ChatList>
        </Col>
    )
}

export default Chat;
