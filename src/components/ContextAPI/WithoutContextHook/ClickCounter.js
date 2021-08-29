export default function ClickCounter({ count, incrementFun }) {
    return (
        <button type="button" onClick={incrementFun}>
            Clicked {count} times
        </button>
    );
}
// ok
