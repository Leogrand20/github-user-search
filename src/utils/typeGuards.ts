import { UserGitHub } from '../types/User'

export const isUserGitHub = (user: any): user is UserGitHub => 'id' in user
