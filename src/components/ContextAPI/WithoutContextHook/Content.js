import ThemeContext from '../lib/ThemeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    return (
        <div>
            <h2>
                Hello, This is Content and it renders <b>Hover Counter</b>
            </h2>
            <Counter>
                {(count, incrementFun) => (
                    <ThemeContext.Consumer>
                        {({ theme, switchTheme }) => (
                            <HoverCounter
                                count={count}
                                incrementFun={incrementFun}
                                theme={theme}
                                switchTheme={switchTheme}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
} // ok
