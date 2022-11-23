const GoogleMap = ({ location }) => {
  const { lat, long } = location;
  return (
    <img
      alt=""
      src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&size=402x218&
markers=color:0xD8D8D8%7Clabel:S&key=AIzaSyASTZHvfmoSHr9CPVXcCYQLQSeuzyRLEEc`}
    />
  );
};

export default GoogleMap;
