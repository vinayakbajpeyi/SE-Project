import {
    CTableDataCell,
    CTableRow,
    CDropdown,
    CDropdownItem,
    CDropdownDivider,
    CDropdownMenu,
    CButton,
    CDropdownToggle
  } from '@coreui/react'
function MRT(props) {
    return <>
    {JSON.parse(props.tData).map((item, index) => (
        <CTableRow v-for="item in tableItems" key={index}>
          <CTableDataCell className="text-center">
            <p>{item.Mr_no}</p>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>{item.Created_on}</div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>{item.Issue_description}</div>
          </CTableDataCell >
          <CTableDataCell className="text-center">
            <div>{item.Facility}</div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>{item.Issue_tag}</div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>
            <CDropdown variant="btn-group">
                <CButton color="secondary" size="sm">
                  Assign
                </CButton>
                <CDropdownToggle color="secondary" size="sm" split />
                <CDropdownMenu>
                {JSON.parse(props.mData).map((item2, idx) => (
                  <CDropdownItem value={item2.email}>{item2.name}</CDropdownItem>
                ))}
                </CDropdownMenu>
              </CDropdown>
            </div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Assigned_personnel} </div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.U_email} </div>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
}

export default MRT;