import React from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vkui-connect';
import {Panel, Group, Button, Div, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Email = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Persik
		</PanelHeader>
        <Group>
            <Div>
                <Div>{props.email}</Div>   
                <Button size="xl" level="commerce" onClick={props.email = connect.send("VKWebAppGetEmail", {})}>Commerce</Button>
            </Div>
        </Group>
	</Panel>
);

Email.propTypes = {
    id: PropTypes.string.isRequired,
    email: PropTypes.string,
	go: PropTypes.func.isRequired,
};

export default Email;
