import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import styles from "../../styles/SignUp.module.css";
import postStyles from "../../styles/PostsPage.module.css";

import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

import { useCurrentUser } from "../../contexts/CurrentUserContext";

import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { Badge } from "react-bootstrap";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `/posts/?${filter}search=${query}${
            category !== null ? `&category=${category}` : ""
          }`
        );
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, category, currentUser]);

  return (
    <Row className="h-auto m-1">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Badge
          variant="dark"
          pill
          className={`${postStyles.Badge}`}
          onClick={() => setCategory(null)}
        >
          All
        </Badge>
        <Badge
          variant="dark"
          pill
          className={`${postStyles.Badge}`}
          onClick={() => setCategory("HTML")}
        >
          HTML
        </Badge>
        <Badge
          variant="dark"
          pill
          className={`${postStyles.Badge}`}
          onClick={() => setCategory("CSS")}
        >
          CSS
        </Badge>
        <Badge
          variant="dark"
          pill
          className={`${postStyles.Badge}`}
          onClick={() => setCategory("JavaScript")}
        >
          JavaScript
        </Badge>
        <Badge
          variant="dark"
          pill
          className={`${postStyles.Badge}`}
          onClick={() => setCategory("React")}
        >
          React
        </Badge>
        <Form
          className={postStyles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <i className={`fas fa-search ${postStyles.SearchIcon}`} />

          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>

        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                style={{ overflow: "inherit" }}
                children={posts.results.map((post) => (
                  <Post ket={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={styles.Container}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <div className="d-flex justify-content-around">
            <Asset spinner />
          </div>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;
