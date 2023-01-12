import React from 'react';
import {components} from 'react-select';

const {ValueContainer, Placeholder} = components;

const CustomSelectValueContainer = ({children, ...props}: any) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, child =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

export default CustomSelectValueContainer;