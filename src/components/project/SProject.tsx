import React from 'react'
import { useParams } from 'react-router-dom'
import useMyQuery from '../../useQuery';

const SProject = (): React.JSX.Element => {
    type projectType = {
        id: number,
        link: string,
        title: string,
        image: string,
        video: string,
        ldescription: string,
        bdescription: string
    }
    const { id } = useParams();
    const { data } = useMyQuery<projectType>(`/projects/${id}`);
    console.log(data);

    return (
        <div>SProject</div>
    )
}

export default SProject