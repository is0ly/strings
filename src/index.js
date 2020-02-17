import Post from './Post';
import './styles/style.css';

import sum from './sum';

console.log(sum(2, 3));

const post = new Post('Webpack post titile');

console.log(post.toString());
