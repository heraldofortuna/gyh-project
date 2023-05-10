import { ChangeEventHandler, Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface PasswordProps {
  setIsCorrectPassword: Dispatch<SetStateAction<boolean>>
}

export interface ButtonProps {
  text: string
  handleClick: MouseEventHandler<HTMLButtonElement>
}

export interface CardProps {
  image: string
  title: string
}

export interface InputProps {
  label: string
  handleInput: ChangeEventHandler<HTMLInputElement>
}