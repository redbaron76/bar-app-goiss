import React from "react";
import tw, { styled, css } from "twin.macro";

const StButton = styled.button((props) => [
  css`
    & + button {
      ${tw`mt-4`}
    }
  `,
  tw`
    py-4
    px-6
    bg-white
    text-black
    font-semibold
    shadow
  `,
  props.mono && tw`font-mono`,
  props.small && tw`py-2 px-4`,
  props.full && tw`w-full`,
  props.rounded && tw`rounded`,
  props.primary && tw`bg-blue-400 text-white`,
  props.secondary && tw`bg-gray-300 text-gray-500`
]);

const Button = (props) => <StButton {...props}>{props.children}</StButton>;

export default Button;
