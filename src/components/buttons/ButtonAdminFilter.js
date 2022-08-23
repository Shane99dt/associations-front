const ButtonAdminFilter = (props) => {
  const { btnText, btnOnClick, onClickText } = props
  return(
    <>
      <button className="capitalize border rounded-md px-2 py-1 hover:bg-gray-700 active:bg-gray-500 active:text-gray-900 focus:bg-gray-500 focus:text-gray-900"
      onClick={() => {btnOnClick(`${onClickText}`)}}
      >{btnText}</button>
    </>
  )
}

export default ButtonAdminFilter