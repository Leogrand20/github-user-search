import { ReactNode, MouseEventHandler } from 'react'

export type ID = string | number

export interface GitHubUser {
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

export interface LocalUser {
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

export type UserStatProps = Pick<LocalUser, 'repos' | 'followers' | 'following'>

export type UserTitleProps = Pick<LocalUser, 'name' | 'login' | 'created'>

export type UserCardProps = LocalUser

export type UserInfoProps = Pick<
  LocalUser,
  'blog' | 'company' | 'location' | 'twitter'
>

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
