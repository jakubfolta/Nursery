import styled, { css } from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem 0;
`

const subheading = css`
  text-align: center;
  font-weight: bold;
  font-size: var(--big-font-size);
`

export const PaymentSubheading = styled.span`
  ${subheading}
`

export const PaymentTitle = styled.p`
  ${subheading}
`