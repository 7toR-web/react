type Props =  {
  value: string
}

function FirstTSComponent(props: Props) {
  const {value} = props
  
  return (
    <>
      <h1>{value}</h1>
    </>
  )
}

export default FirstTSComponent