
const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}>
      Натисни мене
    </button>
  );
};

export default Button;  