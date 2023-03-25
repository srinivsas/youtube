export const dateformater = (today, givendate) => {
  const dataformate =
    (today - givendate) / (1000 * 60 * 60) <= 24
      ? `${Math.round((today - givendate) / (1000 * 60 * 60))} hours ago`
      : Math.round((today - givendate) / (1000 * 60 * 60 * 24)) <= 31
      ? `${Math.round((today - givendate) / (1000 * 60 * 60 * 24))} days ago`
      : Math.round((today - givendate) / (1000 * 60 * 60 * 24 * 30)) <= 12
      ? `${Math.round(
          (today - givendate) / (1000 * 60 * 60 * 24 * 30)
        )} months ago`
      : `${Math.round(
          (today - givendate) / (1000 * 60 * 60 * 24 * 30 * 365)
        )} years ago`;

  return dataformate;
};

export const viewersCount = count => {
  const value =
    count >= 1000000
      ? `${Math.floor(count / 1000000)}M `
      : `${Math.floor(count / 1000)}K `;

  return value;
};
