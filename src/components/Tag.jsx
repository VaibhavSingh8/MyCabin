
const Tag = ({status = 'blue' , children}) => {

    const colorClasses = {
        blue: 'text-blue-700 bg-blue-100',
        green: 'text-green-700 bg-green-100',
        gray: 'text-gray-700 bg-gray-100',
    };

  return (
    <span className={`inline-block uppercase font-semibold
     py-1 px-3 rounded-full ${colorClasses[status]}`}>{children}</span>
  )
}

export default Tag