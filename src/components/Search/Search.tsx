import { FC, FormEvent } from 'react'

import { ReactComponent as SearchIcon } from '@icons/icon-search.svg'
import { SearchProps, FormFields } from '../../types/User'
import { Button } from '../Button/Button'

import styles from './Search.module.scss'

export const Search: FC<SearchProps> = ({ hasError, onSubmit }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault()

    const text = event.currentTarget.username.value

    if (text.trim()) {
      onSubmit(text)
      event.currentTarget.reset()
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
