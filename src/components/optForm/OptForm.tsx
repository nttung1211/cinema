import React, { FC } from 'react';
import {
  OptFormBreak,
  OptFormButton,
  OptFormFrame,
  OptFormInput,
  OptFormText,
} from './OptForm.styled';

interface Props {}

const OptForm: FC<Props> = () => {
  return (
    <OptFormFrame>
      <OptFormInput placeholder="Email address" />
      <OptFormButton>Get started <img src="/images/icons/chevron-right.png" alt="Try Now" /></OptFormButton>
      <OptFormBreak />
      <OptFormText>
        Ready to watch? Enter your email to create or restart your membership.
      </OptFormText>
    </OptFormFrame>
  );
};

export default OptForm;
