import { Spinner, Button as TamaButton } from 'tamagui'

type ButtonProps = React.ComponentProps<typeof TamaButton> & {
  children: string
  loading?: boolean
}

export default function CustomButton({ children, loading, ...props }: ButtonProps) {
  return (
    <TamaButton {...props} bg="$primary" color="white" disabled={loading} opacity={loading ? 0.5 : 1}>
      {loading ? <Spinner color="$white" mr="$1" /> : null}
      {children}
    </TamaButton>
  )
}