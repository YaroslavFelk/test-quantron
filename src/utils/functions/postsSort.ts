import {orderBy} from "lodash";

export function postsSort(arr: Array<any>, sortType: 'asc' | 'desc') {
  return orderBy(arr, ['creation_date'], [sortType])
}
