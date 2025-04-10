import { FC, FormEvent } from 'react'

import { ReactComponent as SearchIcon } from '@icons/icon-search.svg'
import { SearchProps, FormFields } from '../../types/User'
import { Button } from '../Button/Button'

import styles from './Search.module.scss'

export const Search: FC<SearchProps> = ({ hasError, onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault()

    const text = e.currentTarget.username.value

    if (text.trim()) {
      onSubmit(text)
      e.currentTarget.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles['search']}>
        <label htmlFor="search" className={styles['label']}>
          <SearchIcon />
        </label>

        <input
          type="text"
          className={styles['textField']}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />

        {hasError && <div className={styles['error']}>No result</div>}

        <Button>Search</Button>
      </div>
    </form>
  )
}
