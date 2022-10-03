import styled from '@emotion/styled'
import { ToastContainer as ToastifyToastContainer } from 'react-toastify'

export const ToastContainer = styled(ToastifyToastContainer)`
  @media (min-width: 480px) {
    min-width: 380px;
  }

  @media (min-width: 720px) {
    min-width: 640px;
  }
`
