import {useState,useEffect} from "react";
import {getAllStudents} from "./client";
import StudentDrawerForm from "./StudentDrawerForm";
import {Layout, Menu, Breadcrumb, Table,Spin,Avatar, Empty, Button, Badge, Tag} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined, LoadingOutlined, PlusOutlined,
} from '@ant-design/icons';

import './App.css';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



function App() {

    const [Students,setStudents]=useState([]);
    const [collapsed,setCollapsed]=useState(false);
    const [fetching,setFetching]=useState(true);
    const {size}=useState('small');
    const [showDrawer, setShowDrawer] = useState(false);

    const Theavatar=  ({name}) =>{

        let trim = name.trim();
        if(trim.length===0)
        {
         return <Avatar icon ={<UserOutlined/>}/>
        }
        if(trim.split(" ").length===1)
        {
            return <Avatar>{name.charAt(0)}</Avatar>
        }
        return <Avatar>
            {`${name.charAt(0)}${name.charAt(name.length-1)}`}</Avatar>
    }
    const columns = [
        {
          title: '',
          dataIndex: 'avatar',
          key: 'avatar',
          render: (text,student)=>
             <Theavatar name={student.name}/>


        },
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
    ];

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const fetchStudents = () => {

        getAllStudents()
            .then(response=>response.json())
            .then(data =>{
            console.log(data);
            setStudents(data)
            setFetching(false)
        });
    }

    useEffect(()=>{
        console.log("component is mounted")
        fetchStudents();
    },[])

  const renderStudent=()=>{
        if(fetching)
        {
            return <Spin indicator={antIcon} />;
        }
        if(Students.length<=0)
        {
            return <Empty/>;
        }
        return <>

            <StudentDrawerForm
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                fetchStudents={fetchStudents}
            />

           <Table dataSource={Students}
                      columns={columns}
                      bordered
                      title={() =>
                          <>

                          <Tag style={{marginLeft:"10px"}}>Number of students</Tag>
                          <Badge
                              className="site-badge-count-4"
                              count={Students.length}

                          />
                          <br/><br/>
                          <Button
                          onClick={()=>setShowDrawer(!showDrawer)}
                          type="primary" shape="round" icon={<PlusOutlined/>} size={size}>
                          Add Student
                         </Button>


                          </>

                      }
                      pagination={{ pageSize: 50 }}
                      scroll={{ y: 500 }}
                      rowKey={(student=>student.id)}/>
            </>
  }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {renderStudent()}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>By Elias.G</Footer>
            </Layout>
        </Layout>
    );


}

export default App;
