import { FormShell } from '../form-shell'
import { LoginForm } from '../login-form'

export default function Page() {
  return (
    <FormShell user="Staff">
      <LoginForm userType="staff" />
    </FormShell>
  )
}
