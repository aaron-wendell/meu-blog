import React, { useEffect, useState } from 'react';
import './style.css'

function PostList() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);

  // função para buscar a lista de posts da API
  const fetchPosts = async () => {
    // recebendo lista de posts da API Restful
    const response = await fetch("https://jsonplaceholder.typicode.com/posts").catch(error => {
      console.error(error); // exibindo log em caso de erro
    });
    const data = await response.json();
    setPosts(data);
  };

  // função para buscar os comentários associados a um post selecionado
  const fetchComments = async (postId) => {
    // recebendo lista de comentários da API Restful
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).catch(error => {
      console.error(error); // exibindo log em caso de erro
    });
    const data = await response.json();
    setComments(data);
  };

  // função para selecionar um post e buscar seus comentários
  const handlePostSelect = (postId) => {
    // entrando nos comentários do post através de seu ID
    setSelectedPost(posts.find((post) => post.id === postId));
    fetchComments(postId);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // retorna a lista de posts
  if (!selectedPost) {
    return (
      <div className='post-list'>
        <ul>
          {posts.map(post => (
            <li key={post.id} className='post'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => handlePostSelect(post.id)}>Ver comentários</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // retorna o post selecionado
  if (selectedPost) {
    return (
      <div className="selected-post">
        <button onClick={() => setSelectedPost(null)}>Voltar para lista de posts</button>
        <h2>{selectedPost.title}</h2>
        <p>{selectedPost.body}</p>
        <h3>Comentários</h3>
        <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <p>Por {comment.email}</p>
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

export default PostList;