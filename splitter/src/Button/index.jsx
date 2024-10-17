function Button() {
  const handleClick = (event) => {
    count++;
    console.log(count);
  }
  return <button onClick={handleClick}>Click me!</button>;
}

export default Button;
