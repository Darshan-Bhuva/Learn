function App() {
  return (
    <div>
      <h2>Let's get started with APP</h2>
    </div>
  );
}

function MyName() {
  return (
    <div>
      <h1>my name is darshan</h1>
    </div>
  );
}

// non default export must be in this {}
export  {MyName};

// It can be imported with any custom name
export default App    
