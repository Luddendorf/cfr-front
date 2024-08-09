import { HintCategory } from './hint-category';
import { HintInCategory } from './hint-in-category';
import { HintSimple } from './hint-simple';

export interface TypeaheadResponse {
  count: number;
  hintSimple: HintSimple[];
  hintCategory: HintCategory[];
  hintInCategory: HintInCategory[];
}