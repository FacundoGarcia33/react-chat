const children = () => {
  return (
    <Children>
      <h1>Veni Facu</h1>
      <p>Daleee Bocaaaa</p>
    </Children>
  );
};

function Children({ children }) {
  return <div>{children}</div>;
}
