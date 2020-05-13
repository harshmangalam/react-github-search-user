import React from "react";
import Search from "./Search";
import User from "./User"
import { Segment } from "semantic-ui-react";
import axios from "axios";
const Home = () => {
	const [search, setSearch] = React.useState("harshmangalam");
	const [data, setData] = React.useState(null);
	const [loading,setLoading] = React.useState(false)

	const searchUser = (event)=> {
		event.preventDefault()
		setLoading(true)
		axios.get(`https://api.github.com/users/${search}`)
		.then(res=>{
			setLoading(false)
			console.log(res.data)
			setData(res.data)
		})
		.catch(err=>{
			setLoading(false)
		})
	}

React.useEffect(()=>{
	axios.get(`https://api.github.com/users/${search}`)
		.then(res=>{
			setLoading(false)
			console.log(res.data)
			setData(res.data)
		})
		.catch(err=>{
			setLoading(false)
			console.log(err.response.data)
		})
	},[])

	return (
		<div>
			<Segment>
				<Search search={search} setSearch={setSearch} searchUser={searchUser} loading={loading} />
				
				{loading ? ("<center>please wait...</center>") : (<User data={data}/>)}
			</Segment>
		</div>
	);
};

export default Home;
