import React from 'react';
import {useNavigate}  from 'react-router-dom';
import { Button, Result } from 'antd';

const Erorr = () => {
    const path = useNavigate()
    return (
        <Result
            status="404"
            title="404"
            subTitle="Kechirasiz, siz qdirgan sahifa topilmadi."
            extra={<Button type="primary"
            onClick={()=>path('/')}
            size='large'>Ortga qaytish</Button>}
        />
    )
};

export default Erorr;