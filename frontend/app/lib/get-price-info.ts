interface Props {
  current: number;
  previousClose: number;
}

export function getPriceInfo({ current, previousClose }: Props) {
  const changeAmount = (current - previousClose).toFixed(2);

  const changePercent = ((Number(changeAmount) / previousClose) * 100).toFixed(
    2,
  );

  const isUp = current > previousClose;

  return {
    changeAmount,
    changePercent,
    isUp,
  };
}
