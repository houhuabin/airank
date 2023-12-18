import React from 'react'

interface Props{
    params:{id:number, photoId:number}
}
const PhotoDetail = ({params:{id,photoId}}: Props) => {
  return (
    <div>PhotoDetail {photoId}</div>
  )
}

export default PhotoDetail