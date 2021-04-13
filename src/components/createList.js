import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {  HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class CreateListComponent extends React.Component {
    render() {
        return(
            <Layout className="layout">
                <Header>
                <Menu theme="dark" mode="horizontal">
                <Menu.Item key="Home">Home</Menu.Item>
                    <SubMenu title="Produce">
                        <Menu.ItemGroup title="Vegetables">
                            <Menu.Item key="Tomatoes">Tomatoes</Menu.Item>
                            <Menu.Item key="Onions">Onions</Menu.Item>
                            <Menu.Item key="Potatoes">Potatoes</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Fruits">
                            <Menu.Item key="Apples">Apples</Menu.Item>
                            <Menu.Item key="Grapes">Grapes</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu title="Dairy">
                        <Menu.Item key="Milk">Milk</Menu.Item>
                        <Menu.Item key="Eggs">Eggs</Menu.Item>
                        <Menu.Item key="Cheese">Cheese</Menu.Item>
                        <Menu.Item key="Yogurt">Yogurt</Menu.Item>
                    </SubMenu>
                    <SubMenu title="Bakery">
                        <Menu.Item key="Bread">Bread</Menu.Item>
                        <Menu.Item key="Cookies">Cookies</Menu.Item>
                        <Menu.Item key="Bagels">Bagels</Menu.Item>
                    </SubMenu>
                    <SubMenu title="Meat">
                        <Menu.Item key="Chicken">Chicken</Menu.Item>
                        <Menu.Item key="Fish">Fish</Menu.Item>
                        <Menu.Item key="Bacon">Bacon</Menu.Item>
                    </SubMenu>
                </Menu>
                
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Create list</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}></Footer>
            </Layout>
        );
    }
}

export default CreateListComponent