const Profile = (url1) => {
  
  return (
    <div>
      <div className=''>
                    <img className='rounded-full w-48 h-48' src={props.url2} alt='img'/>
                </div>
                <div className='w-full p-2'>
                    <div className='rounded w-full h-72'>
                        <img className='w-full h-full' src={props.url1} alt='img' />
                    </div>
                </div>
    </div>
  )
}

export default Profile