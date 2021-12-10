import axios from 'axios';

export const queryClassifications = async () => {
	const {
		data
	} = await axios.get('/api/index.php?c=WallPaper&a=getAllCategories')
	return data
}

export const queryWallList = async(id, start) => {
	const {
		data
	} = await axios.get(`/api/index.php?c=WallPaper&a=getAppsByCategory&cid=${id}&start=`+start)
	return data
}