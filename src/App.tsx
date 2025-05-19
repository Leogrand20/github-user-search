import axios from 'axios'
import { useState } from 'react'

import { BASE_URL } from './api/config'
import { Container } from './components/Container/Container'
import { Header } from './components/Header/Header'
import { Search } from './components/Search/Search'
import { UserCard } from './components/UserCard/UserCard'
import { defaultUser } from './mock/index'
import { LocalUser } from './types/User'
import { extractLocalUser } from './utils/exract-local-user'

import './App.css'

export const App = () => {
  const [user, setUser] = useState<LocalUser | null>(defaultUser)

  const fetchUser = async (userName: string) => {
    try {
      const { data } = await axios(BASE_URL + userName)

      setUser(extractLocalUser(data))
    } catch (error) {
      console.log(error)
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
