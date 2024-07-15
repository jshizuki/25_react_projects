export const formatJoinDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const formatSingularPlural = (follower) => {
  return follower === 1 ? `follower` : `followers`
}
