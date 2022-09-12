import { Button, Form, Input, Modal, Table, Tooltip } from 'antd'
import React, { useState } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector,useDispatch } from 'react-redux';
import { galeryAdd, galeryDelete, galeryEdit } from '../../redux/action/galeryAction';
import Swal from 'sweetalert2';
const GaleryCrud = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
 
  const dispatch = useDispatch();
  const {galery} = useSelector(state=>state.galeryReducer)
  const [form] = Form.useForm();
  const [editAdd, setEditAdd] = useState(false)
  const [visible, setVisible] = useState(false)
  const onFinish = (e) => {
    console.log(e);
    if(editAdd){
      dispatch(galeryEdit(e))
      Toast.fire({
        icon: 'success',
        title: 'Malumot ozgartirildi'
      })
    }else{
      dispatch(galeryAdd({ ...e, key: new Date().getTime(),id: new Date().getTime() }))
      Toast.fire({
        icon: 'success',
        title: 'Malumot qoshildi'
      })
    }
    setVisible(false)
    form.resetFields();
  }
  // open modal
  const openModal = () => {
    form.resetFields();
    setVisible(true)
  }
  // edit
  const editGalery = (e) => {
    console.log(e);
    setEditAdd(true)
    form.setFieldsValue({
      title: e.title,
      desc: e.desc,
      // img: e.img,
      id: e.id
    });
    setVisible(true)
  }
  const deleteGalery = (id) =>{
    dispatch(galeryDelete(id))
    Toast.fire({
      icon: 'success',
      title: 'Malumot o`chirildi'
    })
  }
  
  // colum
  const columns = [
    {

      title: 'key',
      dataIndex: 'key',
      key: 'key',
      render: (values, i) => <p>5</p>
    },
    {
      title: 'Sarlavha',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Izoh',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'img',
      dataIndex: 'img',
      key: 'img',
    },
    {
      title: 'activatsiya',
      render: (values) => <div className="crud_btn">
        <Tooltip title="Tahrirlash">
          <Button type="primary" onClick={() => editGalery(values)} icon={<EditOutlined />} />
        </Tooltip>
        <Tooltip title="O`chirish">
          <Button type="danger" onClick={() =>deleteGalery(values.id)} icon={<DeleteOutlined />} />
        </Tooltip>

      </div>,
    }
  ];
  return (
    <div>
      <Button type='primary' onClick={openModal}>Galery qoshish</Button>
      <Modal
        title={editAdd ? "Galery malumotlarni yangilash" : "Galery qoshish"}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={false}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          size="large"
          form={form}
        >
          <Form.Item
            name="title"
            rules={[{ required: true, message: 'Iltimos sarlavha kiriting!' }]}
            hasFeedback
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            name="desc"
            rules={[{ required: true, message: 'Iltimos izoh kiriting!' }]}
            hasFeedback
          >
            <Input.TextArea placeholder="Descrptin" />
          </Form.Item>
          <Form.Item
            name="img"
            // rules={[{ required: true, message: 'Iltimos img kiriting!' }]}
            hasFeedback
          >
            <Input type="file" />
          </Form.Item>
          
          <Form.Item
            name='id'
          >

            <Input placeholder="maoshini" type='hidden' />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              {editAdd ? "Yangilash" : "Qo'shish"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table loading={galery.length === 0 ? true : false}
        columns={columns} dataSource={galery} />
    </div>
  )
}

export default GaleryCrud