import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import React from 'react'
import { highlight } from 'sugar-high'
import { Counter } from './counter'
// import Code from './code'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Code({ children, ...props }: any) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
  Counter
}

/**
 *
 *
 * @param {(JSX.IntrinsicAttributes & MDXRemoteProps)} props
 * @return {*} 
 */
function MDXContent(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}

export default MDXContent
