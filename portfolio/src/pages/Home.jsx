import { useState, useEffect } from 'react';

function Home() {
  const [followerStyle, setFollowerStyle] = useState({
    position: 'absolute',
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    cursor: 'pointer',
    transition: 'all 0.5s ease-out',
    transform: 'translate(-50%,-50%)'
    // top: 0,
    // left: 0
  });
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setFollowerStyle((prevStyle) => ({
        ...prevStyle,
        top: e.clientY + 'px',
        left: e.clientX + 'px'
      }));
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
    //   document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    setIsFullscreen((prevFullscreen) => {
      const newFullscreen = !prevFullscreen;
      setFollowerStyle((prevStyle) => ({
        ...prevStyle,
        width: newFullscreen ? '100vw' : '50px',
        height: newFullscreen ? '100vh' : '50px'
      }));
      return newFullscreen;
    });
  };

  return (
    <div className='w-full h-full overflow-hidden'>
    <div className='w-full h-[200px]  relative overflow-hidden'>
      <div
        className=''
        style={followerStyle}
        onClick={handleClick}
      >
      </div>
    </div>
      <div>
        <span  className='font-Utara text-[100px] font-bold'>PORTFOLIO</span>
      </div>
    </div>
  );
}

export default Home;
