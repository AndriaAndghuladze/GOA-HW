import React from 'react';

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Product({ price, inStock }) {
  return (
    <div>
      <p>ფასი: {price}₾</p>
      <p>{inStock ? "ხელმისაწვდომია" : "არ არის ხელმისაწვდომი"}</p>
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function Card({ children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', margin: '10px 0' }}>
      {children}
    </div>
  );
}

export default function App() {
  const todos = ['დავალება 1', 'დავალება 2', 'დავალება 3'];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header title="მოგესალმები ჩემს აპში!" />
      <h2>პროდუქტები:</h2>
      <Product price={25} inStock={true} />
      <Product price={50} inStock={false} />
      <h2>დავალებების სია:</h2>
      <TodoList todos={todos} />
      <h2>ღილაკი:</h2>
      <Button onClick={() => alert("ღილაკი დაჭერილია!")}>Click Me</Button>
      <h2>ბარათი:</h2>
      <Card>
        <h2>სათაური ბარათისთვის</h2>
        <p>აღწერა ბარათისთვის. აქ შეგიძლია რაც გინდა ჩასვა.</p>
      </Card>
    </div>
  );
}
