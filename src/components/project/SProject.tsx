import React from 'react'
import { useParams } from 'react-router-dom'
import useMyQuery from '../../useQuery';

const SProject = () => {
    const params = useParams();
    console.log(params);
    const {data}  = useMyQuery("/projects/param");
    
  return (
    <div>SProject</div>
  )
}

export default SProject