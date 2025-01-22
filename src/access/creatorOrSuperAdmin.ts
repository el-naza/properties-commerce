import type { Access } from 'payload'

export const creatorOrSuperAdmin: Access = ({ req: { user }, data }) => {
  console.log('creatorOrSuperAdmin', user?.id, typeof user?.id, data.creator, typeof data.creator)
  return user?.id === data.creator!.toString() || user?.role === 'Super Admin'
}
