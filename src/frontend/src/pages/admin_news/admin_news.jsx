import React from 'react'
import AdminSidebar from '../../components/admin_sidebar/admin_sidebar'
function AdminNews(){
  return (
    <div className='admin_page'>
    <AdminSidebar />
    <div className='admin_workspace'>
        <div className="page_name">
            <h1 className='page_name'>News</h1>
            <button>Add new</button>
        </div>
        <table className='page_table'>
            <thead>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Desciption</th>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, repellendus animi quaerat deleniti magnam assumenda alias pariatur sed facilis voluptates repudiandae, enim inventore accusantium at sequi sapiente incidunt vero explicabo recusandae aliquid amet. Et quos quia sed quasi. Aut voluptate ullam accusamus repudiandae officia asperiores aliquid reprehenderit atque praesentium, quia temporibus facilis quam nostrum non labore expedita dicta id accusantium veniam natus. Earum fuga quaerat ipsum dicta ratione numquam, tenetur consequuntur modi. Error rem ducimus nam. Eius exercitationem, porro maiores voluptatibus corrupti perspiciatis tempora sed voluptas ipsam amet dolores cupiditate laboriosam impedit labore. Repellat, dolorem vel nesciunt omnis veritatis voluptate?</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default AdminNews
