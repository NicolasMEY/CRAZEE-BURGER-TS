import styled, { css } from "styled-components"
import { theme } from "../../theme"
import React, { ChangeEventHandler, ForwardedRef } from "react";

type TextInputPropsType = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  Icon:  React.ElementType;
  className: string;
  version : "normal" | "minimalist" ;
}

const TextInput = React.forwardRef(
  ({ onChange, Icon, className, version = "normal", ...extraProps } : TextInputPropsType, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <TextInputStyled className={className} version={version}>
        {/* Vérification que Icon est bien une fonction avant de l'utiliser */}
          {typeof Icon === 'function' &&
        <div className="icon"><Icon /></div>}
        {/* {Icon && Icon} */}
        <input ref={ref} onChange={onChange} type="text" {...extraProps} />
      </TextInputStyled>
    )
  }
)

export default TextInput
const TextInputStyled = styled.div<{ version: "normal" | "minimalist" }>`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  /* ${(props) => {
    if (props.version === "normal") return extraStyleNormal
    if (props.version === "minimalist") return extraStyleMinimalist
  }} */

  ${({ version }) => extraStyle[version]}
`

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
}

