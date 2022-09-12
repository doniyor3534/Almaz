import React, { useState } from "react";
import { Modal,Empty  } from 'antd';
import { useSelector,useDispatch } from "react-redux/es/exports";
import { DavlatAddFun, DavlatDelFun, DavlatEditFun } from "../../redux/action/profileAction";
import '../Doniyor.css'
import { ToastContainer, toast } from 'react-toastify';
import { isDisabled } from "@testing-library/user-event/dist/utils";



const Davlat = () => {
  const { davlatlar } = useSelector((state) => state.profileReducer)
  const dispatch =useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // ///////////////form
  const [result,setResult]=useState(true)
  const [input,setInput]=useState({
    id:'',
    name:'',
    sana:'',
    progres:'',
    bayroq:''
  })
  const inputfun=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const bayroqfil=davlatlar.find(val=>val.bayroq===input.bayroq)
  const namefil=davlatlar.find(val=>val.name===input.name)
  const progresfil=davlatlar.find(val=>val.progres===input.progres)
  const sanafil=davlatlar.find(val=>val.sana===input.sana)
  const send=(e)=>{
    e.preventDefault()
    if(result && !bayroqfil && !namefil && !progresfil && !sanafil && !input.bayroq && !input.name && !input.progres && !input.sana ){
      dispatch(DavlatAddFun({...input,id:new Date().getTime()}))
      setInput({
        id:'',
        name:'',
        sana:'',
        progres:'',
        bayroq:''
      })
      toast.success('Malumot yuklandi')
      setIsModalOpen(false);
    }if (!result){
      dispatch(DavlatEditFun(input))
      setResult(true)
      toast.success('Edit qilindi')
      setIsModalOpen(false);
    }
    
  }

  // ///////////////delet
   const deletfun=(id)=>{
       dispatch(DavlatDelFun(id))
       toast.error(`Malumot o'chirildi`)
   }
  // ///////////////edit
  const editfun=(val)=>{
     setInput( {
      id:val.id,
      name:val.name,
      sana:val.sana,
      progres:val.progres,
      bayroq:val.bayroq
    })
    setIsModalOpen(true);
    setResult(false)
  }
  // ///////////////
  return (
    <div className="container">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-head d-flex justify-content-between p-3">
            <div className="left">
              <h4 className="card-title">Bizda mavjud Davlatlar</h4>
              <p className="card-description text-secondary fw-bold"> Hamkor davlat qoshing:
              </p>
            </div>
            <button className="btn btn-primary rounded-2" onClick={showModal}>new</button>
          </div>
          <div className="card-body ">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th> Bayrog' </th>
                  <th> Name </th>
                  <th> Progress </th>
                  <th> Tavarlar </th>
                  <th> kelgan sana </th>
                  <th className="ps-5"> ED/Del </th>
                </tr>
              </thead>
              <tbody>
                {
                  davlatlar.length > 0?
                  davlatlar.map((val) => (
                    <tr key={val.id}>
                      <td className="py-1">
                        <span className={`w-100  fi fi-${val.bayroq}`} ></span>
                      </td>
                      <td> {val.name}</td>
                      <td>
                        <div className="progress">
                          <div className={`progress-bar bg-${val.progres < 30 ? 'error':val.progres < 50?  "warning":'success'}`} role="progressbar" style={{ width: `${val.progres}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                      <td> $ 757.99 </td>
                      <td> {val.sana} </td>
                      <td className="gap-2"> 
                         <button className="btn btn-warning rounded mx-3" onClick={()=>editfun(val)}>edit</button>   
                         <button  className="btn btn-danger rounded"onClick={()=>deletfun(val.id)}>delete</button>   
                      </td>
                    </tr>
                  ))
                  :<Empty/>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Davlat qo'shish</h4>
              <p className="card-description"> davlat kiriting:</p>
              <form className="forms-sample" onSubmit={send}>
                <div className="form-group row my-1">
                  <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Bayroq</label>
                  <div className="col-sm-9">
                    <input style={bayroqfil ?{ border:'1px solid red'}:input.bayroq ?{ border:'1px solid green'}:{}} type="text" onChange={inputfun}  value={input.bayroq} name='bayroq' className="form-control" id="exampleInputUsername2" placeholder="namuna: uz=Uzbekiston" />
                  </div>
                </div>
                <div className="form-group row my-1">
                  <label for="exampleInputEmail2" className="col-sm-3 col-form-label">Nomi</label>
                  <div className="col-sm-9">
                    <input  style={namefil ?{ border:'1px solid red'}:input.name ?{ border:'1px solid green'}:{}} type="text" onChange={inputfun} value={input.name} name='name' className="form-control " id="exampleInputEmail2" placeholder="Dalat Nomi" />
                  </div>
                </div>
                <div className="form-group row my-1">
                  <label for="exampleInputMobile" className="col-sm-3 col-form-label">Progres</label>
                  <div className="col-sm-9">
                    <input style={input.progres ?{ border:'1px solid green'}:{}} type="number" onChange={inputfun} value={input.progres} name='progres' className="form-control" id="exampleInputMobile" placeholder="faollik %...." />
                  </div>
                </div>
                <div className="form-group row my-1">
                  <label for="exampleInputPassword2" className="col-sm-3 col-form-label">bugungi sana</label>
                  <div className="col-sm-9">
                    <input style={input.sana ?{ border:'1px solid green'}:{}} type="Date" onChange={inputfun} value={input.sana} name='sana' className="form-control" id="exampleInputPassword2" placeholder="Password" />
                  </div>
                </div>
                <button type="submit"  className={bayroqfil || namefil || progresfil || sanafil || !input.bayroq || !input.name || !input.progres || !input.sana ? 'btn-danger btn me-2 rounded-2':"btn btn-primary me-2 rounded-2"}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer/>
    </div>
  )
}
export default Davlat;