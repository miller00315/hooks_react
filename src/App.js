import P from 'prop-types';
import { useEffect, useMemo, useState, useRef } from 'react';
import './App.css';

const Post = ({ post, onClick }) =>  (
    <div key={post.id} className="post">
      <h1 style={{fontSize: '14'}} onClick={() => onClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  onClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  const inputRef = useRef(null);
  const counter = useRef(0);

  useEffect(() => 
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r)), []);

  useEffect(()=> {
    counter.current++;
  });

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  }

  return (
    <div className="App">
      <h6>Rendered: {counter.current}</h6>
      <p>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} onClick={handleClick} />))
      , [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;