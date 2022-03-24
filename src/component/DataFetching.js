import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
	const [posts, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios//make the GET request from axion
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)//get data from URL with the value of id

			.then(res => {
        console.log(res)
        setPost(res.data)
			})//that is the get request return promise
            
			.catch(err => {
				console.log(err)
			})//log the error if have any

	}, [idFromButtonClick])//dependency on the id and click

	const handleClick = (e) => {
		setIdFromButtonClick(id)//get the input and set it to this.state.id
        e.preventDefault()
	}

	return (
		<form>
			<input type="text" value={id} onChange={e => setId(e.target.value)} />
			<button type="submit" onClick={handleClick}>Fetch Post</button>
			<div>{posts.title}</div>
			{/* <ul>
				{posts.map(post => (<li key={post.id}>{post.title}</li> ))}
			</ul> */}
		</form>
	)
}

export default DataFetching