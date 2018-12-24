import React from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vkui-connect';
import {Panel, Group, Button, Div, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Email = ({ id, go, userEmail }) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Persik
		</PanelHeader>
        {userEmail &&
        <Group>
            <Div>
                {`${userEmail.email}`}
            </Div>
        </Group>}
	</Panel>
);

Email.propTypes = {
    id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
    userEmail: PropTypes.shape({
        email: PropTypes.string,
    }),
};

export default Email;
