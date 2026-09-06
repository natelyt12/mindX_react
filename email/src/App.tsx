import { useState } from "react";

interface Account {
  name: string;
  email: string;
}

function UserInfoForm({ onSubmit }: { onSubmit: (data: Account) => void }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const submitForm = (e) => {
    e.preventDefault()
    onSubmit({ name, email })
  }
  return (
    <form onSubmit={(e) => { submitForm(e) }}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const [submitted, setSubmitted] = useState<Account | null>(null)
  const handleUserSubmit = (data: Account) => {
    setSubmitted(data);
  };
  return (
    <>
      <UserInfoForm onSubmit={handleUserSubmit} />
      {submitted && <p>Name: {submitted.name}, Email: {submitted.email}</p>}
    </>
  )
}

export default App