import { Country } from './country';
import { Language } from './language';

export interface FilterGood {
  country: Country;
  lang: Language;
  ids?: number[];
  showInSite?: number;
  searchWords?: string[];
}