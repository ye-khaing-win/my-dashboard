import { TColor } from '../types/color.type';

type TStockKEY = 'IN' | 'OUT_OF' | 'LIMITED' | 'CRITICAL';
type TStockText =
  | 'In Stock'
  | 'Out of Stock'
  | 'Limited Stock'
  | 'Critical Stock';

export type TStock = {
  text: TStockText;
  color: TColor;
};

type TStocks = {
  [key in TStockKEY]: TStock;
};

const STOCK: TStocks = {
  IN: {
    text: 'In Stock',
    // color: 'emerald',
    color: 'blue',
  },
  OUT_OF: {
    text: 'Out of Stock',
    // color: 'red',
    color: 'zinc',
  },
  LIMITED: {
    text: 'Limited Stock',
    color: 'amber',
  },
  CRITICAL: {
    text: 'Critical Stock',
    // color: 'violet',
    color: 'amber',
  },
};

export default STOCK;
