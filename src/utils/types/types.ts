export interface Post {
  is_answered: boolean,
  owner: {
    reputation: number,
    profile_image: string,
    link: string,
    display_name: string
  },
  creation_date: number,
  title: string,
  link: string,
  question_id: number
}
