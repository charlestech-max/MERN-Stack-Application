const express = require('express');
const router = express.Router();

let blogPosts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' }
];

router.get('/', (req, res) => {
  res.json(blogPosts);
});

router.get('/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found.');
  res.json(post);
});

router.post('/', (req, res) => {
  const newPost = {
    id: blogPosts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

router.put('/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found.');
  post.title = req.body.title;
  post.content = req.body.content;
  res.json(post);
});

router.delete('/:id', (req, res) => {
  const postIndex = blogPosts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send('Post not found.');
  blogPosts.splice(postIndex, 1);
  res.status(204).send();
});

module.exports = router;
