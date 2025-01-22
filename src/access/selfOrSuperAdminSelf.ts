import type { Access } from 'payload'

export const selfOrSuperAdminSelf: Access = ({ req: { user }, id, data }) => {
  return (
    user?.id === id ||
    (data?.role !== 'Super Admin' && user?.role === 'Super Admin') ||
    (data?.role === 'Super Admin' && user?.id === id)
  )
}
