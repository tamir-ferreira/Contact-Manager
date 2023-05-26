import styled from "styled-components";

export const StyledInput = styled.fieldset`
  position: relative;
  display: flex;
  flex-direction: column;
  border: none;

  > input {
    margin: 15px 0 3px 0;
    font-size: var(--font-size-2);
    padding-left: 16px;
    height: 48px;
    outline: none;
    color: var(--color-gray-0);
    background-color: var(--color-gray-2);
    border: 1px solid var(--color-gray-2);
    border-radius: var(--border-radius-1);

    ::placeholder {
      color: var(--color-gray-1);
    }

    :focus {
      border-color: var(--color-gray-0);
    }

    :disabled {
      color: var(--color-gray-1);
    }
  }

  > svg {
    position: absolute;
    right: 16px;
    top: 46px;
    :hover {
      cursor: pointer;
    }
  }

  > p {
    color: var(--color-negative);
  }
`;
