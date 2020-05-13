import React from "react"

import {Input,Grid,Button} from "semantic-ui-react"

const Search = ({search,setSearch,searchUser,loading}) => {


	return (

			<div>
			<Grid centered={true} textAlign="center" verticalAlign="bottom">
			<Grid.Row>
				<Input loading={loading} focus placeholder="search" value={search} onChange={e=>setSearch(e.target.value)} />
				<Button disabled={loading} onClick={searchUser}>Search</Button>
			</Grid.Row>
			</Grid>
			</div>
		)
}

export default Search