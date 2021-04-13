import React from 'react'
import 'antd/dist/antd.css';
import { Slider, InputNumber, Row, Col, Checkbox } from 'antd';
import { Layout, Breadcrumb, Button, Tooltip } from 'antd';
import {  HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';


const { Header, Content, Footer } = Layout;


class HomePage extends React.FC {
  constructor(props) {
    super(props);
    this.state = {
      radius: 1,
      latitude : 0,
      longitude: 0,
      checkboxArray: []
    };
  }

  onChange =  (value) => {
    this.setState({
      radius: value
    })
  }

  onChangeBox = (e, i) => {
    let checkBoxCurrentState = this.state.checkboxArray;
    checkBoxCurrentState[i] = !checkBoxCurrentState[i];
    this.setState({
      checkboxArray: checkBoxCurrentState
    });
  };

  //Create function that runs on onclick of button
  //Array filter and create list to store
  //Call prop function with array as parameter
  onSetStoresClick = () => {
    let selected = this.props.data.filter((e, i) => {
      if(this.state.checkboxArray[i])
        return e;
    })
    this.props.setStores(selected);
    let history = useHistory();
    history.push('/list');
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position =>
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }),
      err => console.log(err)
    );
  }
  render (){
    return (
      <>
        <Layout className="layout">
          <Header>
          <div className="icon-wrapper">
            <HomeOutlined style={{ fontSize: '1.5rem', color: '#fff' }}/>
          </div>
          </Header>
          <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Select stores</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
          <Row>
            <div className="separation-div"></div>
          </Row>
          <Row>
            <Col span={6}>
              <div className="text-description">Select distance</div>
            </Col>
            <Col span={12}>
              <Slider
                min={0}
                max={5}
                defaultValue={1} 
                onChange={this.onChange}
                value={typeof this.state.radius === 'number' ? this.state.radius : 0}
              />
            </Col>
            <Col span={6}>
                <InputNumber
                  min={1}
                  max={5}
                  style={{ margin: '0 16px' }}
                  value={this.state.radius}
                  onChange={this.onChange}
                />
            </Col>
          </Row>
          <Row>
            <Col span = {6}></Col>
            <Col span = {8}>
              <Button block onClick={this.position}> Detect location </Button>
            </Col>
            <Col span={1}></Col>
            <Col span={3}>
              <Button type="primary" icon={<SearchOutlined />} onClick={() => this.props.change(this.state.radius, this.state.latitude, this.state.longitude )}>
                  Search
              </Button>
            </Col>
            <Col span={6}></Col>
          </Row>
          <Row>
            <div className="separation-div"></div>
          </Row>
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
            {
              this.props.data && this.props.data.map((data,index) => {
              return (
                <div className="store-item"  key = {index}>
                  <Row>
                    <Col span = {2}>
                      <Checkbox
                        checked={this.state.checkboxArray[index] ? true : false}
                        onChange={e => this.onChangeBox(e, index)}
                        value={index}
                      >
                      </Checkbox>
                    </Col>
                    <Col span = {22}>
                      <Row>
                        Store name : {data.name}
                      </Row>
                      <Row>
                        Address : {data.address}
                      </Row>
                    </Col>
                  </Row>
                </div>
              )
            })}
            </Col>
          </Row>
          <Row>
            <Col span={18}></Col>
            <Col span={2}>
              <Button type='primary' block onClick={() => this.onSetStoresClick()}> Submit </Button>
            </Col>
          </Row>
          </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
      
        </>

    );
  }
}
export default HomePage;
