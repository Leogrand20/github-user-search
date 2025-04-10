import { useState } from 'react'

import { Error, UserGitHub, UserLocal } from './types/User'

import { Container } from './components/Container/Container'
import { Header } from './layouts/Header/Header'
import { Search } from './components/Search/Search'
import { UserCard } from './components/UserCard/UserCard'

import { defaultUser } from './mock/index'
import { extractLocalUser } from './utils/exract-local-user'
import { isUserGitHub } from './utils/typeGuards'
import { BASE_URL } from './api/config'

import './App.css'

export const App = () => {
  const [user, setUser] = useState<UserLocal | null>(defaultUser)

  const fetchUser = async (userName: string) => {
    const url: string = BASE_URL + userName

    const res = await fetch(url)
    const user = (await res.json()) as UserGitHub | Error

    if (isUserGitHub(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />

      {user && <UserCard {...user} />}
    </Container>
  )
}
