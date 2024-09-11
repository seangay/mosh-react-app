import styles from "./Button.module.css";

interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={["btn", "btn-" + color].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
