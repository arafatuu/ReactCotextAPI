import React from 'react';

export default class Check extends React.Component {
    state = {
        a: 5,
    };

    render() {
        const { a: m } = { a: 10 };
        console.log(a);
    }
}
