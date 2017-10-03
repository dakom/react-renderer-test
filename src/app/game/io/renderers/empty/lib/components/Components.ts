import * as React from 'react';

const c = name => props => React.createElement(name, props);

export const Empty = c('');
export class NullComponent extends React.PureComponent {
    render() {
        return null;
    }
}