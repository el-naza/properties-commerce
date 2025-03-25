import type { Access } from 'payload'

export const selfOrNotSuperAdminSelf: Access = ({ req: { user }, id, data }) => {
  // console.log('data role', data?.role, 'user role', user?.role, data)

  const access =
    (user?.id === id && data?.role !== 'Super Admin') ||
    (data?.role !== 'Super Admin' && user?.role === 'Super Admin')

  // console.log('bool res', access)

  return access
}
