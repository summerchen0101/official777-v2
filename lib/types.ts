export type OptionType<T extends string | number> = {
  label: string
  value: T
}

export type OptionsType<T extends string | number> = OptionType<T>[]
