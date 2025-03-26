import React from 'react'
import { Form, FormProps, Layout, Button } from '@javascript/components'
import { useContent } from '@thoughtbot/superglue'


type ContentProps = {
  newSubjectPath: string
  subjects: {
    id: number,
    title: string
    createdAt: string,
    updatedAt: string,
    editSubjectPath: string,
    subjectPath: string,
    deleteForm: FormProps
  }[]
}

export default function SubjectsIndex() {
  const {
    newSubjectPath,
    subjects = [],
  } = useContent<ContentProps>()

  const subjectItems = subjects.map((subject) => {
    const {
      id,
      title,
      editSubjectPath,
      subjectPath,
      deleteForm
    } = subject

    const { form, extras } = deleteForm;

    return (
      <tr key={id}>
        <td>{title}</td>
        <td><a href={subjectPath} data-sg-visit>Show</a></td>
        <td><a href={editSubjectPath} data-sg-visit>Edit</a></td>
        <td>
          <Form {...form} extras={extras} data-sg-visit>
            <button type="submit">Delete</button>
          </Form>
        </td>
      </tr>
    )
  })

  return (
    <Layout>
      <h1>Subjects</h1>

      <table>
        <thead>
          <tr><th>Title</th></tr>
          <tr>
            <th colSpan={3}></th>
          </tr>
        </thead>

        <tbody>
          {subjectItems}
        </tbody>
      </table>
      <br />
      <Button asChild>
        <a href={newSubjectPath} data-sg-visit>New Subject</a>
      </Button>
    </Layout>
  )
}
