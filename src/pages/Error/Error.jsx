import { useLocation } from 'react-router-dom';

function Error() {
  let location = useLocation();
  return (
    <h1 style={{ color: 'red' }}>
      Resource not found at {location.pathname}
    </h1>
  )
}
  
  export default Error;