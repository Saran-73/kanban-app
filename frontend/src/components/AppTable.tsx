import React, { cloneElement } from 'react'
import {
  Table,
  Thead,
  Tbody,
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
import { BiTrash, BiEditAlt } from 'react-icons/bi';

// @ts-ignore
function AppTable({ tableData, handleEdit, handleDelete }) {

  type TableDataType = {
    _id: string
    goalname: string
    createdAt: string
  }
  const columnHelper = createColumnHelper<TableDataType>()

  const getTime = (input: string | number | Date) => {
    const date = new Date(input);
    const month = date.getMonth();
    const year = date.getUTCFullYear();
    return date.getDate() + ":" + month + ":" + year
  }

  const columns = [
    columnHelper.accessor('_id', {
      header: () => "ID",
      // cell: info => info.getValue(),
    }),
    columnHelper.accessor("goalname", {
    }),
    columnHelper.accessor('createdAt', {
      header: () => "Created At",
      cell: info => getTime(info.getValue()),
    }),
    columnHelper.display({
      id: "edit",
      cell: () => <button onClick={handleEdit}><BiEditAlt /></button>
    }),
    columnHelper.display({
      id: "delete",
      cell: ({ cell: { row } }) => <button onClick={() => handleDelete(row.original)}><BiTrash /></button>
    })
  ];

  const [data, setData] = React.useState(() => [...tableData])
  // const rerender = React.useReducer(() => ({}), {})[1]


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  const rowsCount = table.getRowModel().rows.length;
  return (
    <>
      <TableContainer borderRadius="0.75em" bg="whiteAlpha.700" my="3em">
        <Table variant='simple' width="100%">
          <Thead bg="blue.700">
            {table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th key={header.id} color="whiteAlpha.900">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id} borderColor={(rowsCount - 1 === rowIndex) ? "whiteAlpha.50" : "blue.500"}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AppTable