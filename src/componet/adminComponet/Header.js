import { Card, Col, Row } from 'antd'
import React from 'react'

const Header = () => {
    return (
        <div>
            <Row>
                <Col xl={8} xxl={8} md={12} sm={24}>
                    <Card
                        hoverable
                    >
                        <h1>Nimadir</h1>
                    </Card>
                </Col>
                <Col xl={8} xxl={8} md={12} sm={24}>
                    <Card
                        hoverable
                    >
                        <h1>Nimadir</h1>
                    </Card>
                </Col>
                <Col xl={8} xxl={8} md={12} sm={24}>
                    <Card
                        hoverable
                    >
                        <h1>Nimadir</h1>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default Header