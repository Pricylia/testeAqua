type Props = {
  titulo: string;
  descricao: string;
  onClick: () => void;
};

export function CardRevista({ titulo, descricao, onClick }: Props) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <button onClick={onClick}>Ler Revista</button>
    </div>
  );
}