interface CtaButtonProps {
    disabled : boolean,
    onClick : () => void,

    children : React.ReactNode
}
function CtaButton({disabled , onClick , children} : CtaButtonProps) {
  return (
    <button className="border px-8 py-2 rounded-md"  onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
export default CtaButton