import React from 'react'
import {
  Button,
  Form,
  FormProps,
  Layout,
  TextField,
  TextFieldProps,
  SubmitButton,
  SubmitButtonProps
} from '@javascript/components'
import { useContent } from '@thoughtbot/superglue'
import { useAppSelector } from '@javascript/store'

type ContentProps = {
  subjectPath: string
  subjectsPath: string,
  subjectForm: FormProps<{
    title: TextFieldProps
    submit: SubmitButtonProps
  }>
}

export default function SubjectsEdit() {
  const {
    subjectForm,
    subjectPath,
    subjectsPath,
  } = useContent<ContentProps>()

  const {
    inputs,
    form,
    extras
  } = subjectForm
  const validationErrors = useAppSelector((state) => state.flash["subjectFormErrors"])

  return (
    <Layout>
      <Form {...form} extras={extras} validationErrors={validationErrors} data-sg-visit>
        <TextField {...inputs.title} label="Title" errorKey="title" />
        <Button asChild>
          <SubmitButton {...inputs.submit} type="submit"> {inputs.submit.text} </SubmitButton>
        </Button>
      </Form>

      <Button asChild variant="outline">
        <a href={subjectPath} data-sg-visit>Show</a>
      </Button>
      <Button asChild variant="secondary">
        <a href={subjectsPath} data-sg-visit>Back</a>
      </Button>
    </Layout>
  )
}
