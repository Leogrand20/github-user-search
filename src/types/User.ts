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

export type Error = {
  message: string
  documentation_url: string
  status: string
}
