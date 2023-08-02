import Styles from '../styles/TextoAnimado.module.css'
function TextoAnimado({ text, children }) {
  const lenght = text.length;
  const deg = 360 / lenght;

  return (
    <div className={Styles.spinningWrapper}>
      <div className={Styles.spinningText}>
        <p>
          {text.split("").map((letra, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${deg * i}deg)`,
              }}
            >
              {letra}
            </span>
          ))}
        </p>
      </div>
      {children}
    </div>
  );
}

export default TextoAnimado;