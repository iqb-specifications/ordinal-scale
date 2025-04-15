export interface TextWithLanguage {
  "lang": string,
  "value": string
}

export interface Category {
  minimalValue?: number;
  lowerThanValue?: number;
  label: TextWithLanguage[];
  description?: TextWithLanguage[];
}

export interface OrdinalScale {
  id: string;
  description?: TextWithLanguage[];
  sourceScaleType: string;
  sourceScaleTypeAsText?: string;
  categories: Category[];
}
