import { useContext } from 'react';
import ThemeContext from '../lib/ThemeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    const context = useContext(ThemeContext);
    console.log(context); // undefine
    const { theme, switchTheme } = context;
    return (
        <div>
            <h2>
                Hello, This is Content and it renders <b>Hover Counter</b>
            </h2>
            <Counter>
                {(count, incrementFun) => (
                    <HoverCounter
                        count={count}
                        incrementFun={incrementFun}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}
