import React from 'react'; 
import connect from '@vkontakte/vkui-connect';
import PropTypes from 'prop-types';
import {Panel, Group, Button, Div, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Email = ({ id, go, userMail }) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			emilo
		</PanelHeader>
        {userMail &&
        <Group>
            <Div>
                <Div>Email here {userMail.email} heare</Div>
            </Div>
        </Group>}
        <Group>
            <Div>
                <Button level="commerce" onClick={console.log(id)}>Console Log Id</Button>
            </Div>
            <Div>
                <Button level="commerce" onClick={console.log(go)}>Console Log Go</Button>
            </Div>
            <Div>
                <Button level="commerce" onClick={console.log(userMail)}>Console Log Mail</Button>
            </Div>
        </Group>
	</Panel>
);

Email.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    userMail: PropTypes.shape({
        email: PropTypes.string,
    }),
};

export default Email;
