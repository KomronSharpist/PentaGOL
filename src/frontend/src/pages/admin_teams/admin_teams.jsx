import React from "react";
import AdminSidebar from "../../components/admin_sidebar/admin_sidebar";import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
function AdminTems() {
  const [data, setdata] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  const submit = (e) => {
    e.preventDefault();

    setdata([
      ...data,
      {
        name: e.target[0].value,
        img: e.target[1].value,
        liga: e.target[2].value,
        total: e.target[3].value,
        id: data.length + 1,
      },
    ]);
  };

  const sendData = (id) => {
    data.filter((el) => {
      if (el.id == id) {
        console.log(el);
        fetch("", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(el),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
    });
  };

  const deleteData2 = (id) => {
    setdata(data.filter((el) => el.id !== id));
  };
  console.log(data);
  return (
    <div className="admin_page ">
      <AdminSidebar />
      <div className="admin_workspace ">
        <div className="page_name">
          <h1 className="page_name">Tems</h1>
         
          <div>
            <Button variant="outlined" onClick={handleClickOpen}>
              Add new
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <form className="form_input" onSubmit={submit}>
              <input type="text" placeholder="NAME" name="name" />
                <input type="text" placeholder="IMG PATH" name="img" />
                <input type="text" placeholder="LIGAND" name="ligand" />
                <input type="text" placeholder="TOTALSCORE" name="total" />
                <div className="butons">
                  <Button variant="outlined" type="submit">
                    ADD
                  </Button>
                </div>
              </form>
            </Dialog>
          </div>
        </div>
      <div className="admin_news_wrap">
      {data.length > 0
          ? data.map((el) => (
              <div className="admins">
                
                <h2>{el.name}</h2>
                <img src={el.img} alt="img" />
                <p>Liga :{el.liga}</p>
                <p>Total score :{el.total}</p>
                <div className="butom_mf">
                <Button variant="outlined" onClick={() => sendData(el.id)}>Send</Button>
                <Button variant="outlined" onClick={() => deleteData2(el.id)}>delete</Button>
                </div>
            
              </div>
            ))
          : ""}
      </div>

        

      </div>
    </div>
  );
}

export default AdminTems;
