import { writeFileSync } from 'fs';
import qs from 'qs';

const url = 'http://localhost:1337/api/posts'
+ '?' + qs.stringify({
  filters: { post: { $eq: 'devops-and-digital-transformation-paradime-2023-1'}},
  fields: ['id', 'title', 'post', 'body', 'publishedAt'],
  populate: { banner: { fields: ['url'] } },
  pagination: { pageSize: 1, withCount: false },
}, { encodeValuesOnly: true });

const response = await fetch(url);
const body = await response.json();
const file = 'scripts/posts.json';
const formatted = JSON.stringify(body, null, 2);

writeFileSync(file, formatted, 'utf-8');
