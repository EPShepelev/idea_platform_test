type ButtonProps = {
  name: string;
  mode: string;
};

export const Button = ({ name, mode }: ButtonProps) => {
  return <button className={`button ${mode}`}>{name}</button>;
};
