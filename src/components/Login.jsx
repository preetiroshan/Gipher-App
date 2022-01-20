import { Form, Input as InputAntd, Button, notification } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components'
import gif from './assets/giphy4.gif'
import brandgif from './assets/text.gif'

const Input = styled(InputAntd)`
background-color: #d1d1d1;

`;

const FormWrapper = styled.div`
position:static;
top:50%;left:200%;
max-width:50%
overflow:hidden;
padding:3em;

background-color:#eee;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

`

const Backdrop = styled.img`
position:absolute;
width:100vw;
height:120vh;
left:0;
top:0;
overflow:hidden
`
const Brand = styled.div`
position: fixed;
top:5vw;
left:5vw;
overflow-x: hidden
`

const Login = () => {

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    fetch('http://localhost:3001/auth/v1', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    }).then((data) => {
      notification.success({ message: "Successfully Logged in" })
      localStorage.setItem('token', data['token']);
      setLoading(false);
      window.location.replace("/");


    }).catch((error) => {
      setLoading(false);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Backdrop src={gif} alt="loading-img" />


      <div className="container mt-5 col-sm-4 col-xs-3">

        <div className="row">
          <FormWrapper className="col-md-12"  >

            <Form className="container mt-4"

              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <img src={brandgif} alt="brand" />
              <h3>Login to Continue</h3>
              <Form.Item

                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder="Username" size="large" />
              </Form.Item>

              <Form.Item

                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password placeholder="Password" style={{ backgroundColor: "#d1d1d1" }} size="large" />
              </Form.Item>

              <Form.Item >
                <Button type="primary" loading={loading} htmlType="submit" style={{ width: "100%", float: "left" }}>
                  Submit
                </Button>
              </Form.Item>
            </Form>

          </FormWrapper>
        </div>
      </div>
    </>

  );
};

export default Login;
