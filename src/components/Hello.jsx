const Hello = ({ name, age }) => {
  console.log(props);
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you are probably born in {bornYear()}</p>
    </div>
  );
};
export default Hello;
