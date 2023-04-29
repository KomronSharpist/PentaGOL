import React from 'react'
import AdminSidebar from '../../components/admin_sidebar/admin_sidebar'
function AdminTeams(){
  return (
    <div className='admin_page'>
    <AdminSidebar />
    <div className='admin_workspace'>
        <div className="page_name">
            <h1 className='page_name'>Teams</h1>
            <button>Add new</button>
        </div>
        <table className='page_table'>
            <thead>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Liga ID</th>
                <th>Total Game</th>
                <th>Total Score</th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p>abc</p>
                    </td>
                    <td>
                        <img src="" alt="" />
                    </td>
                    <td>
                        <p>abc</p>
                    </td>
                    <td>
                        <p>abc</p>
                    </td>
                    <td>
                        <p>abc</p>
                    </td>
                    <td>
                        <p>abc</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default AdminTeams
