import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { DataContext } from "./contaxtAPi/DataContext";
import QrCode from "qrcode";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined, UserAddOutlined, EditOutlined, DeleteOutlined, PrinterOutlined } from '@ant-design/icons';
import { Avatar, Modal, Tooltip, Button, Form, Input, DatePicker, Table } from "antd";
import { Typography } from 'antd';
import axios from "axios";
import Swal from "sweetalert2";
import moment from 'moment';
const { Title } = Typography;
export const Nav = () => {
    const [menu, setMenu] = useState(false)
    const toggleBtn = () => setMenu(!menu)
    return (
        <nav>
            <div className="nav-menu">
                <Link to="/admin">LOGO</Link>
                <div className="menus">
                    <div className="mobile">
                        <Profile />
                    </div>
                    <button className="nav_btn" onClick={toggleBtn}>
                        {menu ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                    </button>
                </div>
            </div>
            <ul className={menu ? "nav_item activ" : "nav_item"}>
                <li><Link to="/admin">Bosh sahifa</Link></li>
                <li><Link to="/hodim">Hodimlar</Link></li>
                <li><Link to="/davomat">Davomat</Link></li>
                <li><Link to="/hisobot">Hisbot</Link></li>
                <div className="desktop">
                    <Profile />
                </div>
            </ul>
        </nav>
    )
}
export const Profile = () => {
    const [visible, setVisible] = useState(false);
    const { profile, setProfile } = useContext(DataContext);
    const path = useNavigate()
    const logoutProfile = (e) => {
        e.preventDefault();
        axios.get('sanctum/csrf-cookie').then(() => {
            axios.post('api/logout')
                .then((res) => {
                    if (res.data.status === 200) {
                        Swal.fire(
                            'Tabriklayman!',
                            'Muvofiqiyatli panelga chiqdingiz!',
                            'success'
                        )
                        setProfile({ user: null })
                        localStorage.clear()
                        path("/")
                    } else {

                    }
                })
        });
    }
    return (
        <div className="profile">
            <Tooltip title={profile.username}>
                <Avatar size={36} icon={<UserOutlined />} onClick={() => setVisible(true)} />
            </Tooltip>
            <Modal
                title="Profile"
                centered={true}
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={false}
            >
                <div className="profile_body">
                    <Avatar size={36} icon={<UserOutlined />} />
                    <Title level={5}>{profile.username}</Title>
                    <div className="btns">
                        <Tooltip title="Tizimdan chiqish">
                            <Button type="danger" onClick={logoutProfile}>
                                <LogoutOutlined />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export const HodimlarCrud = () => {
    const { addWorker, visible, deleteWorker,setVisible, worker, form, load,editAdd,setEditAdd } = useContext(DataContext);
    const onFinish = (values) => {
        console.log('Success:', values);
        const rangeValue = values['birth_date'].format('YYYY/MM/DD');
        let data = {
            full_name: values.full_name,
            phone: values.phone,
            birth_date: rangeValue,
            worker_position: values.worker_position,
            salary: values.salary,
        }
        if(editAdd){
            addWorker({...data,id:values.id});
        }else{
            addWorker(data);
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
   
    // table ustuni
    const [qrcode, setQrcode] = useState([]);
    const columns = [
        {
            title: 'I.F.SH',
            dataIndex: 'full_name',
            key: 'full_name',
            fixed: 'left',
        },
        {
            title: 'Telefon',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Tug`ulgan yili',
            dataIndex: 'birth_date',
            key: 'birth_date',
        },
        {
            title: 'Lavozimi',
            dataIndex: 'worker_position',
            key: 'worker_position',
        },
        {
            title: 'Maoshi',
            dataIndex: 'salary',
            key: 'salary',
        },
        {
            title: 'activatsiya',
            render: (values) => <div className="crud_btn">
                <Tooltip title="Tahrirlash">
                    <Button type="primary" onClick={() => editWorker(values)} icon={<EditOutlined />} />
                </Tooltip>
                <Tooltip title="O`chirish">
                    <Button type="danger" onClick={()=>deleteWorker(values.id)} icon={<DeleteOutlined />} />
                </Tooltip>

            </div>,
        }
    ];
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows, ssss) => {
            console.log(ssss);
            console.log(selectedRowKeys);
            for (let key of selectedRowKeys) {
                QrCode.toDataURL(key.key).then(function (res) {
                    setQrcode([...qrcode, { id: key.id, img: res }])
                })
                console.log(qrcode);

            }
        },

    };
    const printIng = () => {
        window.print()
    }
    const editWorker = (e) => {
        setVisible(true);
        setEditAdd(true);
        form.setFieldsValue({
            full_name: e.full_name,
            phone:e.phone,
            birth_date:moment(e.birth_date),
            salary:e.salary,
            worker_position:e.worker_position,
            id:e.id
        });
    }

    const hodimAdd = () =>{
        setEditAdd(false);
        setVisible(true)
    }
    return (
        <div className="hodimlar">
            <div className="flex">
                <Title level={2}>Hodimlar</Title>
                <div className="btn_hodim">
                    <Button size="large" type="primary" onClick={printIng}>
                        <PrinterOutlined />
                        Qr code chiqarish
                    </Button>
                    <Button size="large" type="primary" onClick={hodimAdd}>
                        <UserAddOutlined />
                        Hodim qoshish
                    </Button>
                </div>
            </div>
            {/* hodimlar add va edit=>editAdd ager shu true bolsa edit qiladi false bolsa qoshadi  */}
            <Modal
                title={editAdd ? "Hodim malumotlarni yangilash" : "Hodim qoshish"}
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
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    size="large"
                    form={form}
                >
                    <Form.Item
                        name="full_name"
                        rules={[{ required: true, message: 'Iltimos I.F.SH kiriting!' }]}
                        hasFeedback
                    >
                        <Input placeholder="I.F.SH" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Iltimos telefon raqmingizni kiritng!' }]}
                        hasFeedback
                    >
                        <Input placeholder="Telefon" type="tel" />
                    </Form.Item>

                    <Form.Item
                        name="birth_date"
                        rules={[{ required: true, message: 'Iltimos tug`ulgan yil/oy/kun  kiritng!' }]}
                        hasFeedback
                    >
                        <DatePicker format="YYYY/MM/DD" />
                    </Form.Item>
                    <Form.Item
                        name="worker_position"
                        rules={[{ required: true, message: 'Iltimos lavozimini kiritng!' }]}
                        hasFeedback
                    >
                        <Input placeholder="Lavozimi" />
                    </Form.Item>
                    <Form.Item
                        name="salary"
                        rules={[{ required: true, message: 'Iltimos maoshini kiritng!' }]}
                        hasFeedback
                    >
                        <Input placeholder="maoshini" type='number' />
                    </Form.Item>
                    <Form.Item
                        name={editAdd ? "id" : ""}
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
            {/* hodimlar data */}
            <Table loading={load} rowSelection={{
                type: 'checkbox',
                ...rowSelection,
            }} columns={columns} dataSource={worker} />
            {/* print */}
            <div id="print">
                {qrcode.map((vals, i) =>
                (
                    <div key={i}>
                        <img src={vals.img} alt="" />
                    </div>
                )
                )}

            </div>
        </div>
    )
}