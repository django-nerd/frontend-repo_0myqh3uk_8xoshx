import StudentModule from './StudentModule'
import DriverModule from './DriverModule'
import AdminModule from './AdminModule'

export default function RoleModules({ role }) {
  if (role === 'driver') return <DriverModule />
  if (role === 'admin') return <AdminModule />
  return <StudentModule />
}
