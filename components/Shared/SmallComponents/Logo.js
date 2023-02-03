import React from 'react';
import Icon from './Icon';

function Logo({ id = '#logo' }) {
	return <Icon id={id} classes='sidebar_logo' />;
}

export default Logo;
