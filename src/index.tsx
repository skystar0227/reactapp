import React from 'react';
import { render } from 'react-dom';

const root = document.createElement('div');
render(<p>Hello world!</p>, root);
const body = document.body;
body.insertBefore(root, body.firstChild);
