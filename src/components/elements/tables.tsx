import { useState } from 'react'

const TableSection = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const data = [
    { id: 1, name: 'Item 1', description: 'Details about Item 1' },
    { id: 2, name: 'Item 2', description: 'Details about Item 2' },
    { id: 3, name: 'Item 3', description: 'Details about Item 3' },
    // Add more items as needed
  ]

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
      {/* Table Section */}
      <div className='col-span-1 lg:col-span-1 bg-white shadow-md rounded-lg p-4'>
        <h2 className='text-lg font-semibold mb-4'>Items</h2>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr>
              <th className='border-b-2 p-2'>ID</th>
              <th className='border-b-2 p-2'>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className='cursor-pointer hover:bg-gray-100'
                onClick={() => setSelectedItem(item)}
              >
                <td className='border-b p-2'>{item.id}</td>
                <td className='border-b p-2'>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Information Section */}
      <div className='col-span-1 lg:col-span-2 bg-white shadow-md rounded-lg p-4'>
        {selectedItem ? (
          <>
            <h2 className='text-lg font-semibold mb-4'>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
          </>
        ) : (
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        )}
      </div>

      {/* Information Section */}
      <div className='col-span-1 lg:col-span-2 bg-white shadow-md rounded-lg p-4 pt-10'>
        {selectedItem ? (
          <>
            <h2 className='text-lg font-semibold mb-4'>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
          </>
        ) : (
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        )}
      </div>
      <div className='col-span-1 lg:col-span-1 bg-white shadow-md rounded-lg p-4'>
        <h2 className='text-lg font-semibold mb-4'>Items</h2>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr>
              <th className='border-b-2 p-2'>ID</th>
              <th className='border-b-2 p-2'>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className='cursor-pointer hover:bg-gray-100'
                onClick={() => setSelectedItem(item)}
              >
                <td className='border-b p-2'>{item.id}</td>
                <td className='border-b p-2'>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Section */}
      <div className='col-span-1 lg:col-span-1 bg-white shadow-md rounded-lg p-4'>
        <h2 className='text-lg font-semibold mb-4'>Items</h2>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr>
              <th className='border-b-2 p-2'>ID</th>
              <th className='border-b-2 p-2'>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className='cursor-pointer hover:bg-gray-100'
                onClick={() => setSelectedItem(item)}
              >
                <td className='border-b p-2'>{item.id}</td>
                <td className='border-b p-2'>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Information Section */}
      <div className='col-span-1 lg:col-span-2 bg-white shadow-md rounded-lg p-4'>
        {selectedItem ? (
          <>
            <h2 className='text-lg font-semibold mb-4'>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
          </>
        ) : (
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        )}
      </div>
    </div>
  )
}

export default TableSection
