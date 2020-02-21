// This file handles all the filters applied to views in Vue.
import numeral from 'numeral'

const dollarFilter = function(value) {
  if (!value) {
    return '$ 0'
  }
  return numeral(value).format('($ 0.00a)')
}

const percentageFilter = function(value) {
  if (!value) {
    return '0 %'
  }
  return `${Number(value).toFixed(2)} %`
}

export { dollarFilter, percentageFilter }