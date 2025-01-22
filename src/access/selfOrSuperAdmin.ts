import type { Access } from 'payload'

export const selfOrSuperAdmin: Access = ({ req: { user }, id }) => {
  return user?.id === id || user?.role === 'Super Admin'
}
