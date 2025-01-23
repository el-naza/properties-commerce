import type { Access } from 'payload'

export const uploadedByOrSuperAdmin: Access = ({ req: { user }, data }) => {
  console.log(
    'uploadedByOrSuperAdmin',
    user?.id,
    typeof user?.id,
    data?.uploadedBy,
    typeof data?.uploadedBy,
  )
  return user?.id === data?.uploadedBy || user?.role === 'Super Admin'
}
