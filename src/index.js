import Post from './Post';
import './styles/style.css';

import reverse from './reverse';

console.log(reverse('Etiology'));
console.log(reverse(252));

const post = new Post('Webpack post titile');

console.log(post.toString());
