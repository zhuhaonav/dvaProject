import React from 'react';
import PropTypes from 'prop-types'
import { Button, Row, Form, Input } from 'antd';
const FormItem = Form.Item
const Login = ({
  app,
  dispatch,
}) => {
    const {loginLoading} = app;
    const uri = 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png'
    return(
      <div style={styles.login}>
        <div style={styles.loginView}>
          <div style={styles.loginHead}>
            <img style={styles.loginImg} src={uri}></img>
            <span style={styles.loginText}>Dva Login</span>
          </div>
          <div style={styles.loginBody}>
            <form style={{width:'80%',}}>

            </form>
          </div>
        </div>
      </div>
    )
}

Login.propTypes = {
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
    boxShadow:'0 0 100px rgba(0,0,0,.08)',
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