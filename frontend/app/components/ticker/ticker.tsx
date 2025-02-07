import { TickerContent } from './ticker-content';
import { TickerEvolution } from './ticker-evolution';
import { TickerImage } from './ticker-image';
import { TickerPrice } from './ticker-price';
import { Root } from './ticker-root';

export const Ticker = {
  Root,
  Image: TickerImage,
  Price: TickerPrice,
  Evolution: TickerEvolution,
  Content: TickerContent,
};
