import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err: any = useRouteError();

  const { status, statusText } = err;
  
  return (
    <>
      <h2>Some error occured!</h2>
      <h3>Status: {status}</h3>
      <h4>Message: {statusText}</h4>
    </>
  );
};

export default Error;
