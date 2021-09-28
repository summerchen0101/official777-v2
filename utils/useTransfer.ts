import numeral from 'numeral'

const useTransfer = () => {
  const toCurrency = (num: number, decimal: number = 2) =>
    numeral(num).format(
      decimal ? `0,0.${Array(decimal).fill('0').join('')}` : '0,0',
    )

  // const toOptionName = function <T extends string | number>(
  //   options: OptionType<T>[],
  //   code: number | string,
  // ): string {
  //   return options.find((t) => t.value === code)?.label
  // }

  return {
    toCurrency,
    // toOptionName,
  }
}

export default useTransfer
