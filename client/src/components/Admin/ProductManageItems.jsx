import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTable, usePagination, useSortBy, useGlobalFilter, useAsyncDebounce, useFilters } from 'react-table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as checkFont from "@fortawesome/free-solid-svg-icons";
import { changeDataFullFormat, changeDataFullFormat_DDMMYYYY,  changeDataToDDMMYYYY } from '../../units/supportDate';
// import { useSelector } from 'react-redux';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// Define a default UI for filtering
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <div className="d-flex align-items-center mb-2" style={{ margin: 'auto' }}>
            <h4 > Search:{' '}</h4>
            <input
                className="ml-2 search_input"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder="Enter here key search"
            />
        </div>
    )
}

function Table({ columns, data, search, showIconOnName, selectIndex,
    supportFunction1, type, listMenu, onOpenEditProduct}) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page
        state,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },


    } = useTable(
        {
            columns,
            data,
            showIconOnName,
            initialState: { pageIndex: 0 },
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        onOpenEditProduct
    )

    function checkHeader(value, cell, i) {
        switch (value) {
            case "Time":  
                return (changeDataFullFormat_DDMMYYYY(cell.value));
            case "Activate":
                return <div style={{color: cell.value ? "":"red"}}>{cell.value.toString()}</div>
            case "Button": 
                return (<a href={"" + cell.value} target="_blank" rel="noreferrer">
                    {cell.column.buttonName}
                </a>);
            case "Price": case "Sale Price":
                return (<div>{Number(cell.value).toLocaleString()}</div>)
            case "Edit":
                return (<FontAwesomeIcon
                  onClick={() => onOpenEditProduct(pageIndex * 10 + i)}
                  style={{
                      width: '15px',
                      color: 'green',
                      fontSize: '1.4rem',
                      cursor: 'pointer',
                  }}
                  className={(cell.column.Header === "Name" && showIconOnName) ? "btn__add_icon icon mr-2" : "op-hidden"}
                  icon={checkFont["faEdit"]}
              />)  
              case "History": 
                  return <FontAwesomeIcon
                  onClick={() => onOpenHistory(pageIndex * 10 + i)}
                  style={{
                      width: '15px',
                      color: 'blueviolet',
                      fontSize: '1.4rem',
                      cursor: 'pointer',
                  }}
                  className={(cell.column.Header === "Name" && showIconOnName) ? "btn__add_icon icon mr-2" : "op-hidden"}
                  icon={checkFont["faHistory"]}
              />
              case "size": case "color":
                 return <div></div>//(<div>{cell.value.toString()}</div>)
            case "Check In": case "Check Out": case "Birth Day": case "Birthday":
                return (cell.value === "" || cell.value === undefined)? cell.value: (changeDataToDDMMYYYY(cell.value));
            default: return cell.render('Cell');
        }
    }

    useEffect(()=>{
        if (type === "guestCheckIn") {
            onChangeSelectIndex(pageIndex*10 + 0)
            onChangeSelectIndex2(pageIndex*10 + 0)
        } 
    },[pageIndex])

    // Render the UI for your table
    return (
        <>
            <div className={(search || search === undefined) ? "pagination" : "op-hidden"}>
                <div
                    colSpan={visibleColumns.length}
                    style={{
                        textAlign: 'center',
                        alignItems: "center"
                    }}>
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter} />
                </div>
                <div>
                    <button onClick={() =>  gotoPage(0)} 
                        disabled={!canPreviousPage}>
                        {'<<'}
                    </button>{' '}
                    <button onClick={() => {
                        previousPage()
                    }} 
                    disabled={!canPreviousPage}>
                        {'<'}
                    </button>{' '}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>{' '}
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </button>{' '}
                </div>

                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span className="ml-5">
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>

            <table {...getTableProps()} className="mt-3"
                style={{ margin: "auto" }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>

                            {headerGroup.headers.map(column => {
                               // console.log("column: ", column)
                                return (
                                    <th
                                        // style={{ color: "red" }}
                                        className={column.class}
                                        // style={column.style}
                                        {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        {/* <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span> */}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        //console.log("i", i)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                  //  console.log("cell.column.Header", cell.column.Header)
                                    return (
                                        <td style={{ fontSize: '1.4rem', background: (type === "guestCheckIn" && selectIndex === pageIndex*10+i) ? 'aqua' : "" }}
                                            {...cell.getCellProps()} >
                                            <div className="d-flex justify-content-between align-items-center" >
                                                <span className="ml-2"
                                                    style={{...cell.column.style}}>
                                                        {/*  { textAlign: 'left' } */}
                                                    {checkHeader(cell.column.Header, cell, i)}
                                                    {/* {cell.render('Cell')} */}
                                                </span>
                                                {/* <div>
                                                    <FontAwesomeIcon
                                                        onClick={() => onOpenEditCompany(pageIndex * 10 + i)}
                                                        style={{
                                                            width: '15px',
                                                            color: 'green',
                                                            fontSize: '1.4rem',
                                                            cursor: 'pointer',
                                                        }}
                                                        className={(cell.column.Header === "Name" && showIconOnName) ? "btn__add_icon icon mr-2" : "op-hidden"}
                                                        icon={checkFont["faEdit"]}
                                                    />
                                                    <FontAwesomeIcon
                                                        onClick={() => onOpenHistory(pageIndex * 10 + i)}
                                                        style={{
                                                            width: '15px',
                                                            color: 'blueviolet',
                                                            fontSize: '1.4rem',
                                                            cursor: 'pointer',
                                                        }}
                                                        className={(cell.column.Header === "Name" && showIconOnName) ? "btn__add_icon icon mr-2" : "op-hidden"}
                                                        icon={checkFont["faHistory"]}
                                                    />
                                                </div> */}

                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

function ProductManageItems(props) {
    const { supportFunction1, listMenu,} = props;
    // const auth = useSelector(state => state.auth);
    // const { role } = auth.user;

    const [selectIndex, setSelectIndex ] =useState(0);

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    const data = React.useMemo(() => props.data);

    const COLUMNS_SELECT = {
        product: [
            // {
            //     Header: 'Product ID',
            //     accessor: 'id',
            //     class: 'with-70',
            //     style: { fontSize: '1.4rem', width: '120px', textAlign: 'center' }
            // },
            {
                Header: 'Product Code',
                accessor: 'productCode',
                class: 'with-70',
                style: { fontSize: '1.4rem', width: '70px', textAlign: 'center' }
            },
            {
                Header: 'Category',
                accessor: 'category',
                class: 'with-70',
                style: { fontSize: '1.4rem', width: '100px', textAlign: 'center' }
            },
            {
                Header: 'Product Type',
                accessor: 'productType',
                class: 'with-70',
                style: { fontSize: '1.4rem', width: '100px', textAlign: 'center' }
            },
            {
                Header: 'Product Name',
                accessor: 'productName',
                class: 'with-70',
                style: { fontSize: '1.4rem', width: '240px', }
            },
            {
                Header: 'Amount',
                accessor: 'amount',
                class: 'with-70',
                style: { fontSize: '1.4rem', width: '70px', textAlign: 'center' }
            },
            {
                Header: 'Price',
                accessor: 'price',
                class: 'with-70',
                style: { fontSize: '1.4rem', width: '70px', textAlign: 'center' }
            },
            {
                Header: 'Sale Price',
                accessor: 'saleprice',
                class: 'with-70',
                style: { fontSize: '1.4rem', width: '70px', textAlign: 'center' }
            },
            {
                Header: 'rate',
                accessor: 'rate',
                class: 'with-70',
                style: { fontSize: '1.4rem', width: '70px', textAlign: 'center' }
            },
            // {
            //     Header: 'size',
            //     accessor: 'size',
            //     class: 'with-70',
            //     style: { fontSize: '1.4rem', width: '70px', textAlign: 'center' }
            // },
            // {
            //     Header: 'color',
            //     accessor: 'color',
            //     class: 'with-70',
            //     style: { fontSize: '1.4rem', width: '70px', textAlign: 'center' }
            // },
            {
                Header: 'Activate',
                accessor: 'activate',
                class: 'with-70',
                style: { fontSize: '1.4rem', width: '70px', textAlign: 'center' }
              },
            {
              Header: 'Edit',
              accessor: 'edit',
              class: 'with-70',
              style: { fontSize: '1.4rem', width: '70px', textAlign: 'center' }
            },
            {
              Header: 'History',
              accessor: 'history',
              class: 'with-70',
              style: { fontSize: '1.4rem', width: '70px', textAlign: 'center' }
            }
            
        ],
    };

    return (
        <Styles>
            <Table
                columns={COLUMNS_SELECT[props.type]}
                type = {props.type}
                data={data}
                listMenu = {listMenu}
                selectIndex = {selectIndex}
                supportFunction1={supportFunction1}
                search={props.search}
                showIconOnName={true}
                onOpenEditProduct={props.onOpenEditProduct}
            />
        </Styles>
    );
}

export default ProductManageItems
