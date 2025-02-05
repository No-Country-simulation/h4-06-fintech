interface AuxProps {
  text: string;
  value: string | number;
  isUp?: boolean;
}

export function StockEvolution({ value, text, isUp }: AuxProps) {
  const style =
    isUp !== undefined
      ? isUp
        ? 'bg-green-300 text-green-700'
        : 'bg-red-400 text-red-700'
      : 'bg-secondary';

  return (
    <div className='flex items-center rounded-md bg-primary/10 px-4 py-2'>
      <p className='w-full max-w-[350px] text-xl font-medium'>{text}</p>
      <p
        className={`w-full max-w-[200px] rounded-md py-1 text-center ${style}`}
      >
        {value}
      </p>
    </div>
  );
}
