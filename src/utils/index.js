import React from 'react';

export function childrenWithFatherProps(props) {
  React.Children.map(props.children, (child) => {
    React.cloneElement(child, {
      ...props, ...props.children.props,
    });
  });
}
