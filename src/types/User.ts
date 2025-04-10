import { ReactNode, MouseEventHandler } from 'react'

export type ID = string | number

export type UserLocal = {
  login: string
  id: ID
  avatar: string
  url: string
  name: string
  company: string | null
  blog: string
  location: string | null
  bio: string
  twitter: string | null
  repos: number
  followers: number
  following: number
  created: string
}

export type UserStatProps = Pick<UserLocal, 'repos' | 'followers' | 'following'>

export type UserTitleProps = Pick<UserLocal, 'name' | 'login' | 'created'>

export type UserCardProps = UserLocal

export type UserGitHub = {
  login: string
  id: ID
  avatar_url: string
  html_url: string
  name: string
  company: string | null
  blog: string
  location: string | null
  bio: string
  twitter_username: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export type ContainerProps = {
  children: ReactNode
}

export type ButtonProps = {
  children: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type SearchProps = {
  hasError: boolean
  onSubmit: (text: string) => void
}

export type FormFields = {
  username: HTMLInputElement
}

export type InfoItemProps = {
  icon: ReactNode
  text?: string | null
  isLink?: boolean
}
