// Libs
import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Card from './Card';

// Story
storiesOf('General', module)
    .add('Card', () => <Card>I am some content</Card>);
