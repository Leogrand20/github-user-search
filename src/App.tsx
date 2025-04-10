import { useState } from 'react'
import axios from 'axios'

import { UserLocal } from './types/User'

import { Container } from './components/Container/Container'
import { Header } from './components/Header/Header'
import { Search } from './components/Search/Search'
import { UserCard } from './components/UserCard/UserCard'

import { defaultUser } from './mock/index'
import { extractLocalUser } from './utils/exract-local-user'
import { BASE_URL } from './api/config'

import './App.css'

export const App = () => {
  const [user, setUser] = useState<UserLocal | null>(defaultUser)

  const fetchUser = async (userName: string) => {
    try {
      const { data } = await axios(BASE_URL + userName)

      setUser(extractLocalUser(data))
    } catch (error) {
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
