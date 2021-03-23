import React from "react";
import PostsList from "./components/PostsList/PostsList";
import styled from "styled-components";
import {postsFilter} from "./utils/functions/postsFilter";
import {fetchApi} from "./utils/functions/fetchApi";
import {filter} from 'lodash';
import {POSTS_URL} from "./utils/constants/constants";
import {postsSort} from "./utils/functions/postsSort";
import ToggleRadioButton from "./components/ToggleRadioButton/ToggleRadioButton";

function App() {
  const [loading, setLoading] = React.useState(true)
  const [postsList, setPostList]: Array<any> = React.useState([])
  const [sortType, setSortType]: [any, any] = React.useState('asc')

  React.useEffect(() => {
    fetchApi(POSTS_URL).then(response => {
      setPostList(postsSort(filter(response.items, postsFilter), sortType))
      setLoading(false)
    })
  }, [])

  return (
    <Container>
      {!loading
        ? <>
          <ToggleRadioButton
            onClick={(active: any) => {
              const type = !active ? 'desc' : 'asc'

              setSortType(type)
              setPostList(postsSort(postsList, type))
            }}
            active={sortType === 'desc'}
            name={'Сортировать по убыванию'}
          />

          <PostsList postsList={postsList}/>
        </>
        : <Loading>Loading...</Loading>
      }
    </Container>
  );
}

const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #333;
`

const Container = styled.div`
  max-width: 840px;
  padding: 20px;
  margin: 40px auto;
`

export default App;
