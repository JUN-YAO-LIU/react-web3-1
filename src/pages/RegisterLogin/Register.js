import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
    Layout,
    Menu,
    Button,
    Typography,
    Card,
    Form,
    Input,
    Checkbox,
} from "antd"
import  CreateAccount from "../../components/wallet/CreateWeb3Account"
import  SendTransaction from "../../components/wallet/SendTransaction"

const { Header, Footer, Content } = Layout;


const GetVerificationBtn = () => {

    return (
        <Form name="customized_form_controls" layout="inline" style={{ margin: '23px 0' }}>
            <span>
                <Input
                    type="text"
                    style={{
                        width: 350,
                    }}
                    placeholder="email"
                />
                <Button type="primary" htmlType="submit" style={{
                    width: 80,
                    margin: '0 auto',
                    marginLeft: '20px'
                }}>
                    Get Code
                </Button>
            </span>
        </Form>
    );
};

const CreateWeb3Account = () => {
    CreateAccount()
}


const Register = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
        CreateWeb3Account();
    };

    const onFinishFailed = (errorInfo) => {
       //  console.log("Failed:", errorInfo);
        SendTransaction()
    };

    return (
        <>
            <div className="register">
                <Content>
                    <Card
                        className="card-signup header-solid h-full ant-card pt-0"
                        title={<h5>Register With</h5>}
                        bordered="false"
                    >

                        <GetVerificationBtn />

                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            className="row-col"
                        >

                            <Form.Item
                                name="Name"
                                rules={[
                                    { required: true, message: "Please input your verification code!" },
                                ]}
                            >
                                <Input placeholder="verification code" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: "Please input your password!" },
                                ]}
                            >
                                <Input placeholder="Passwoed" />
                            </Form.Item>

                            {/* 只是要多加空格而已
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>
                                    I agree the{" "}
                                    <a href="#pablo" className="font-bold text-dark">
                                        Terms and Conditions
                                    </a>
                                </Checkbox>
                            </Form.Item> */}

                            <Form.Item>
                                <Button
                                    style={{ width: "100%" }}
                                    type="primary"
                                    htmlType="submit"
                                >
                                    REGISTER
                                </Button>
                            </Form.Item>
                        </Form>
                        <p className="font-semibold text-muted text-center">
                            Already have an account?{" "}
                            <Link to="/sign-in" className="font-bold text-dark">
                                Sign In
                            </Link>
                        </p>
                    </Card>
                </Content>
            </div>
        </>
    )

}


export default Register