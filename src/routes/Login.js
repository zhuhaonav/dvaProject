import React from 'react';
import PropTypes from 'prop-types'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import query from '../services/example';

const FormItem = Form.Item
class Logins extends React.Component{

    handleSubmit = (e) => {//提交表单
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          query(values);
          //location.href = location.origin+'#/main'
        }
      });
    }
    render(){
      const uri = 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png'
      const { getFieldDecorator } = this.props.form;
      return(
        <div style={styles.login}>
          <div style={styles.loginView}>
            <div style={styles.loginHead}>
              <img style={styles.loginImg} src={uri}></img>
              <span style={styles.loginText}>Dva Login</span>
            </div>
            <div style={styles.loginBody}>
              <Form style={{width:'80%',}}>
                <FormItem>
                  {getFieldDecorator('username', {
                    rules: [{required: true}],
                  })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />)}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{required: true}],
                  })(<Input prefix={<Icon type="password" style={{ fontSize: 13 }} />} placeholder="Password" />)}
                </FormItem>
                <Button style={styles.loginButton} type="primary" size="large" onClick={this.handleSubmit}>
                  登录
                </Button>
              </Form>
            </div>
          </div>
        </div>
      )
    }
}
const Login = Form.create()(Logins);
Login.propTypes = {//检测数据类型
  form: PropTypes.object,
  app: PropTypes.object,
  dispatch: PropTypes.func,
}

const styles = {
  login:{
    display:'flex',
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  loginView:{
    width:320,height:320,
    boxShadow:'0 0 100px rgba(0,0,0,.1)',
  },
  loginHead:{
    width:320,
    height:'20%',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  loginImg:{
    width:40,
    marginRight:8,
  },
  loginText:{
    fontSize:18
  },
  loginBody:{
    height:'80%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  loginButton:{
    width:'100%'
  }
}
export default Login;