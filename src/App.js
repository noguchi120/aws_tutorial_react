import React from 'react';

const App = () => {
  const fileUrl = 'https://aws-tutorial-react.s3.amazonaws.com/test.txt';

  return (
    <div>
      <h1>File Display</h1>
      <a href={fileUrl} target="_blank" rel="noopener noreferrer">View File</a>
      <iframe src={fileUrl} width="100%" height="500px" title="test.txt"></iframe>
    </div>
  );
};

export default App;