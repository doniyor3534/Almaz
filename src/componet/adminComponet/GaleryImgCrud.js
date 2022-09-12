import { Button, Col, Image, Row, Tooltip } from 'antd'
import React, { useState } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const GaleryImgCrud = () => {
    const [visible, setVisible] = useState(false);
    const imgAll = (val) => {
        console.log(val);
    }
    return (
        <div>
            <div className="files">
                <input type="file" onChange={imgAll} multiple />
                <Row>
                    <Col xxl={4} xl={6} md={8} sm={12}>
                        <div className='imgItem'>
                            <Image
                                preview={{
                                    visible: false,
                                }}
                                width='100%'
                                style={{
                                    height: "300px",
                                    objectFit: 'cover'
                                }}
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                onClick={() => setVisible(true)}
                            />
                            <div className="imgItemCrud">
                            <Tooltip title="Tahrirlash">
                                <Button type="primary" icon={<EditOutlined />} />
                            </Tooltip>
                            <Tooltip title="O`chirish">
                                <Button type="danger" icon={<DeleteOutlined />} />
                            </Tooltip>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="filesss" style={{ display: "none" }}>

                    <Image.PreviewGroup
                        preview={{
                            visible,
                            onVisibleChange: (vis) => setVisible(vis),
                        }}
                    >
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                    </Image.PreviewGroup>

                </div>
            </div>
        </div>
    )
}

export default GaleryImgCrud