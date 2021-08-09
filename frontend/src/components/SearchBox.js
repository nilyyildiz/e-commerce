import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Ürün ara...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' class="btn btn-success" className='p-2'>
        

        Ara
      </Button>
    </Form>
  )
}

export default SearchBox