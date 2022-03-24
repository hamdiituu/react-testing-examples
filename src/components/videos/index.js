function Videos({ videoList = [] }) {
  if (videoList.length === 0) {
    return <h3>Video Not Found!</h3>;
  }

  return (
    <ul>
      {videoList.map((v, i) => {
        return <li key={i}>{v}</li>;
      })}
    </ul>
  );
}

export default Videos;
