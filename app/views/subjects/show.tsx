import React from 'react'
import { Layout } from '@javascript/components'
import { useContent } from '@thoughtbot/superglue'

type ContentProps = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  subjectsPath: string
  editSubjectPath: string
}

export default function SubjectsShow() {
  const {
    title,
    editSubjectPath,
    subjectsPath,
  } = useContent<ContentProps>()

  return (
    <Layout>
      <p>
        <strong>Title:</strong>
        {title}
      </p>
      <a href={ editSubjectPath } data-sg-visit>Edit</a>
      <a href={ subjectsPath } data-sg-visit>Back</a>
    </Layout>
  )
}
