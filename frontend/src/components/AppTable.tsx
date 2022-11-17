import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

 const defaultData = [
  {
    id: 1,
    time: "3:00",
    goalname: 'sharingan'
  },
  {
    id: 2,
    time: "4:00",
    goalname: 'shadowclone'
  },
  {
    id: 3,
    time: "9:00",
    goalname: 'hokage'
  },
]

const columnHelper = createColumnHelper()

const columns = [
//@ts-ignore
  columnHelper.accessor('id', {
  cell: info => info.getValue()
  }),
//@ts-ignore
  columnHelper.accessor('goalname', {
    cell: info => info.getValue()
  }),
//@ts-ignore
    columnHelper.accessor('time', {
      cell: info => info.getValue()
      }),
]








function AppTable() {

//@ts-ignore
  const table = useReactTable({defaultData, columns,  getCoreRowModel: getCoreRowModel()})
// console.log(table)
  return (
    <div>
      <TableContainer  borderRadius="0.75em" bg="whiteAlpha.700">
        <Table variant='simple'>
          <Thead bg="blue.700">
            {table.getHeaderGroups().map(headGroup => (<Tr key={headGroup.id}>
              {headGroup.headers.map(header => <Th color="whiteAlpha.900" key={header.id}>{flexRender(
                        header.column.columnDef.header,
                        header.getContext()
              )}</Th>)              
              }
            </Tr>))}
          </Thead>
          <Tbody>
            {/* {table.getRowModel().rows.map(eachrow => (<Tr key={eachrow.id}>
              {eachrow.getVisibleCells().map(cell => (
                <Td borderColor="blue.700" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>))}
            </Tr>))} */}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AppTable