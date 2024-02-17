import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const isSignedIn = atom({
    key: '0', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });