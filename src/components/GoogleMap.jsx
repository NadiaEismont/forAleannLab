const GoogleMap = ({ lat, long }) => {
  return (
    <img
      src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&size=402x218&
markers=color:D8D8D8%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyASTZHvfmoSHr9CPVXcCYQLQSeuzyRLEEc`}
    />
  );
};

export default GoogleMap;
