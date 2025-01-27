import { Access } from 'payload'

export const notFromAdminPanel: Access = ({ req: { user, ...req } }) => {
  console.log('not from admin req host', req.host)
  return !Boolean(user)
}

// saveTourSchedule
// saveReview
// saveContact
