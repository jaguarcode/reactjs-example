import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterWithCountState } from '../05/WithState';

storiesOf('WithState', module).addWithJSX('CounterWithCountState', () => <CounterWithCountState />);
