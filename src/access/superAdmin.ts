export const superAdmin = ({ req: { user } }) => {
  return user?.role === 'Super Admin'
}
