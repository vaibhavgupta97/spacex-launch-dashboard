import React, {useEffect,useState} from 'react';
import axios from "axios";
import { Table, DatePicker, Select } from 'antd';
import "antd/dist/antd.css";
import "./Launches.css";
import Modal from 'antd/lib/modal/Modal';
const { RangePicker } = DatePicker;
const { Option } = Select;
const columns = [
    {
        title: 'Flight',
        dataIndex: 'flight_number',
        key: 'flight_number',
    },
    {
        title: 'Mission name',
        dataIndex: 'mission_name',
        key: 'mission_name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Launch Year',
        dataIndex: 'launch_year',
        key: 'launch_year',
    },
]

function Launches() {
    const [launch,setLaunch]=useState([]);
    const [openModal,setOpenModal]=useState(false);
    const [selectedLaunch, setSelectedLaunch] = useState(null);
    const [getDataLoader, setGetDataLoader] = useState(true);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [launchType, setLaunchType] = useState('all')
useEffect(()=>{
getData("all");
},[])
console.log(launch);
async function getData(launchType, date){
    console.log('start', date)
    let start="";
    let end="";
    let res=[];
    if (date) {
        start=date[0];
        end=date[1];
    }
    setGetDataLoader(true);
    if (launchType === 'all') {
        console.log('all')
         res=await axios.get(`https://api.spacexdata.com/v3/launches?start=${start}&end=${end}`)
    } else if (launchType === 'past') {
        console.log('passt')
         res=await axios.get(`https://api.spacexdata.com/v3/launches/past?start=${start}&end=${end}`)
    } else if (launchType === 'upcoming') {
         res=await axios.get(`https://api.spacexdata.com/v3/launches/upcoming?start=${start}&end=${end}`)
    }
    //console.log(res.data[5].flight_number);
    setLaunch(res.data);
    setGetDataLoader(false);
    return res;
    }
return (
<div className="launch">
<div style={{ display: 'flex'}}>
<Select value={launchType} style={{ marginRight: '12px', width: 190, marginLeft: '12px' }} onChange={value  => {
    console.log('value', value)
    getData(value, [startDate, endDate])
setLaunchType(value);
}}>
<Option value="past">Past Launches</Option>
<Option value="upcoming">Upcoming Launches</Option>
<Option value="all">All Launches</Option>
</Select>
<RangePicker format="YYYY-MM-DD" placeholder={['Start Date', 'End Date']} onChange={(date, dateString) => {
    console.log('dateString', dateString)
    getData(dateString);
    setStartDate(dateString[0])
    setEndDate(dateString[1])
}}/>
</div>
<Table columns={columns} dataSource={launch} loading={getDataLoader} onRow={record => ({
    onClick: () => {
        setOpenModal(true);
        setSelectedLaunch(record.flight_number)
    },
})} />
{!!openModal && (
    <Modal
    visible={openModal}
    title="Launch Details"
    onCancel={() => setOpenModal(false)}
    >
    {launch.filter(i => i.flight_number === selectedLaunch).map(flight => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span> Flight Number: {flight.flight_number}</span>
        <span>Mission Name: {flight.mission_name}</span>
        <span>Upcoming: {flight.upcoming ? 'yes': 'no'}</span>
        <span>Launch Year: {flight.launch_year}</span>
        <span>Rocket name: {flight.rocket.rocket_name}</span>
        <span>Rocket Type: {flight.rocket.rocket_type}</span>
        <span>Launch Site: {flight.launch_site.site_name}</span>
        </div>
    ))}
    </Modal>
)} 
</div>
)
}

export default Launches;