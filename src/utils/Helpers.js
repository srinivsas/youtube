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

const nameList = [
  "Brandon Turner",
  "Eric Young",
  "Richard Dawson",
  "Aaron Ochoa",
  "Michael Zuniga",
  "Bailey Hill",
  "Christopher Rodriguez",
  "Randy Mueller",
  "Erica Patel",
  "Sean Garcia",
  "Jason Perkins",
  "Christine Medina",
  "Travis Mills",
  "Daniel Horn",
  "Joseph Chapman",
  "Rachael Hernandez",
  "Keith Bradley",
  "Michelle Lee",
  "Caitlin Murphy",
  "April Reynolds",
  "Justin Lopez",
  "Jose Nguyen",
  "Marilyn May",
  "Felicia Galloway",
  "Benjamin Waters",
  "Ryan Anderson",
  "Jennifer Robinson",
  "Carolyn Valdez",
  "Mrs. Angela Jones",
  "Lisa Brooks",
  "Matthew Miller",
  "Danielle Marsh",
  "Lynn Rodriguez",
  "Bruce Ayers",
  "Christine Dickerson",
  "Michael Powell",
  "Lori Brown",
  "Shelly Rojas",
  "Deanna Mack",
  "Albert Morgan",
  "Brooke Pope",
  "Michael Shelton",
  "Gregory Butler",
  "Brian Gaines",
  "Sierra Woods",
  "Russell Rodriguez",
  "Mr. Richard Cameron",
  "Cheryl Andrews",
  "Heather Duncan",
  "Elizabeth Reed",
  "Timothy Jackson",
  "Melissa Rose",
  "Eric Cooper",
  "Megan Lewis",
  "Douglas Collins",
  "Amanda Shah",
  "Jeremy Castro",
  "Melissa Jones",
  "Cynthia Mcdaniel",
  "Valerie Larson",
  "Jeffrey Meyer",
  "Elizabeth Morton",
  "Scott Leon",
  "Steven Douglas",
  "Brenda Goodman",
  "David Young",
  "Jeffrey Conrad",
  "Kyle Conner",
  "Denise Hinton",
  "Dorothy Sullivan",
];
export function generate() {
  const finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}
