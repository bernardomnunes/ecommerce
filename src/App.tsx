import Header from './components/header/header.component'

interface AppProps {
  message?: string
}

function App({ message }: AppProps) {
  return (
    <>
      <Header />
    </>
  )
}

export default App
