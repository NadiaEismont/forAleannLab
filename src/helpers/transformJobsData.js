export const transformJobsData = data => {
  return data.map(
    ({ id, name, title, address, location, pictures, createdAt }) => ({
      id,
      name,
      title,
      address,
      location,
      pictures: pictures[0],
      createdAt
    }),
  );
};
