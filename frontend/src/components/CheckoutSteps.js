import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Giriş</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Giriş</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Adres Bilgileri</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Adres Bilgileri</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Ödeme</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Ödeme</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Sipariş</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Onayla ve Bitir</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps