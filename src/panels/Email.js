import React from 'react'; 
import connect from '@vkontakte/vkui-connect';
import PropTypes from 'prop-types';
import {Panel, Group, Button, Div, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();
var email = null;
const Email = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			emilo
		</PanelHeader>
        <Group>
            <Div>
                <Div>Email here</Div>
                <Button level="commerce" onClick={getUserEmail}>Get Email</Button>
            </Div>
        </Group>
	</Panel>
);



function getUserEmail() {
    connect.send('VKWebAppGetEmail', {});
    connect.subscribe((e) => {
        switch (e.detail.type) {
            case 'VKWebAppGetEmailResult':
                email = e.detail.data;
                console.log(e.detail.data);
                break;
            default:
                console.log(e.detail.type);
        }
    });
    console.log(email);
};

Email.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Email;
