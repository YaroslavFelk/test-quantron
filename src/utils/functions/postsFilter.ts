import {Post} from "../types/types";
import {OWNER_REPUTATION} from "../constants/constants";

export function postsFilter(item: Post) {
  return item.is_answered && item.owner.reputation > OWNER_REPUTATION
}
