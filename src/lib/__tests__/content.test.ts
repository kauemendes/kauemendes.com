import fs from 'fs'
import {describe, expect, test, it} from '@jest/globals';
import { getPosts } from "../content";

describe('getPosts', () => {
  it('should return an array of slugs', async () => {
    const expectedSlugs = ['post1', 'post2', 'post3'];
    const readdirMock = jest.spyOn(fs.promises, 'readdir');
    readdirMock.mockResolvedValue(['post1.md', 'post2.md', 'post3.md']);

    const result = await getPosts();

    expect(result).toEqual(expectedSlugs);
    expect(readdirMock).toHaveBeenCalledWith('./src/content/blog/post');
  });
});
