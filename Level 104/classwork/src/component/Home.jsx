import './Home.css';

export function Home(props) {
  const Click = () => {
    props.setCount((count) => count + 1);
  };

  return (
    <div>
      <button onClick={Click}>{props.value}</button>
    </div>
  );
}
