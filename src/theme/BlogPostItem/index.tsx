import React, {type ReactNode} from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type {WrapperProps} from '@docusaurus/types';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BrowserOnly from '@docusaurus/BrowserOnly';

type Props = WrapperProps<typeof BlogPostItemType>;

function Comments(): ReactNode {
  const {colorMode} = useColorMode();
  return (
    <div style={{maxWidth: 760, margin: '3rem auto 1rem'}}>
      <Giscus
        id="comments"
        repo="fblettner/fblettner.github.io"
        repoId="R_kgDOG89fCQ"
        category="Comments"
        categoryId="DIC_kwDOG89fCc4CkhAQ"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

export default function BlogPostItemWrapper(props: Props): ReactNode {
  const {isBlogPostPage} = useBlogPost();
  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <BrowserOnly>{() => <Comments />}</BrowserOnly>}
    </>
  );
}
