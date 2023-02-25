import styled from "styled-components";

export const FormControl = styled.div`
  margin: 1rem 0;
`;

export const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.2rem;
  border-radius: 12px;
  border: 1px solid #ccc;

  & :focus {
    outline: none;
    border-color: #230052;
  }
`;

export const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.2rem;
  border-radius: 12px;
  border: 1px solid #ccc;

  & :focus {
    outline: none;
    border-color: #230052;
  }
`;
