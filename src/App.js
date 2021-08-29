import React from 'react';
import ThemeContext from './components/ContextAPI/lib/ThemeContext';
// comment out below three import file to get output by using useContext() function
import ClickCounter from './components/ContextAPI/WithContextHook/ClickCounter';
import Counter from './components/ContextAPI/WithContextHook/Counter';
import Section from './components/ContextAPI/WithContextHook/Section';

// comment out below three import file to get output without using useContext() function

// import ClickCounter from './components/ContextAPI/WithoutContextHook/ClickCounter';
// import Counter from './components/ContextAPI/WithoutContextHook/Counter';
// import Section from './components/ContextAPI/WithoutContextHook/Section';

export default class App extends React.Component {
    state = {
        theme: 'dark',

        switchTheme: () => {
            console.log('switch');
            this.setState(({ theme }) => {
                console.log(theme);
                if (theme === 'light')
                    return {
                        theme: 'dark',
                    };

                return {
                    theme: 'light',
                };
            });
        },
    };

    render() {
        const { theme, switchTheme } = this.state;
        console.log(this.state);

        return (
            <div className="app">
                <Counter>
                    {(count, incrementFun) => (
                        <ClickCounter count={count} incrementFun={incrementFun} />
                    )}
                </Counter>

                <ThemeContext.Provider value={{ theme, switchTheme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
