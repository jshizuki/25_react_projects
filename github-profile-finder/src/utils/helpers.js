export const formatJoinDate = (dateString) => {
  const date = new Date(dateString);
  console.log(date)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const formatSingularPlural = (follower) => {
  return follower === 1 ? `follower` : `followers`
}
