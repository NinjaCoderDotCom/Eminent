import Video from './assets/SampleVideo.mp4'

const App = () => {
  return (
    <video width="1280px" height="720px" controls>
      <source src={Video} />
    </video>
  );
}

export default App;