

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps
}

export interface CarProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  city_mpg: number;
}

export interface OptionProps {
  title: string,
  value: string
}

export interface CustomFilterProps {
  title: string,
  options : OptionProps[]
}

export interface ShowMoreProps {
  pageNumber: number,
  isNext : boolean,
}