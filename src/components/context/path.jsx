import React from 'react';
import updateTitle from './updateTextOnly';

export const Path = ({ folder, data, id }) => {
  const { error } = updateTitle(folder, data, id);

  console.log(error);
  return <></>;
};
