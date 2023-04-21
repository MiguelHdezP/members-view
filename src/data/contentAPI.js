export const getContent = () => {
  return fetch(
    "https://dha.health-ce.wolterskluwer.com/v1/contents/videos/EM_9839.json",
    {
      method: "GET",
      // Request headers
      headers: {
        "Cache-Control": "no-cache",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IndXQ1dRZmZWRkNtVy1hdlQ0WHdYbXVVajgxQ2hWeFFweFo2R3BQXzh3OWciLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiI0ZjU1MDZmYS0zNDA3LTRkYWYtYWIzMy00YjA2ZWNiNmI3NDYiLCJvaWQiOiI0ZjU1MDZmYS0zNDA3LTRkYWYtYWIzMy00YjA2ZWNiNmI3NDYiLCJlbWFpbCI6InNhbXVlbC5hYnJhaGFtQG1lZGVjaXNpb24uY29tIiwibmFtZSI6IlNhbSBBYnJhaGFtIiwiZ2l2ZW5fbmFtZSI6IlNhbSIsImZhbWlseV9uYW1lIjoiQWJyYWhhbSIsInRpZCI6ImI1NjQ2N2YyLTM3NDAtNDcyNC1hNjE2LTI3MzhhZjMyMjE4OCIsInRmcCI6IkIyQ18xQV9ESEExX2RldnBvcnRhbF9zaWdudXBfc2lnbmluIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwiYXpwIjoiMDBlYWY3OWQtZDRhNi00Y2M1LWE3MTItNzgwYzYyMjJkYjQyIiwidmVyIjoiMS4wIiwiaWF0IjoxNjgyMDU1ODU2LCJhdWQiOiI2Zjc5ZTI4Ni0zZmQ1LTRlM2YtOTJmNy0zYWFjMzllOWZjNDQiLCJleHAiOjE2ODIwNTk0NTYsImlzcyI6Imh0dHBzOi8vdXB0b2RhdGVwcm9kLmIyY2xvZ2luLmNvbS9iNTY0NjdmMi0zNzQwLTQ3MjQtYTYxNi0yNzM4YWYzMjIxODgvdjIuMC8iLCJuYmYiOjE2ODIwNTU4NTZ9.Fy8LuPGVN5K0mDWspmjuzhkO9WdkK2_n4wQMXMjgWQBZ46FjmwO645pOPCSvjEvFHDbQ_aeRwLPl9L1wGrQ-Jf4R2ljjV4kA9myePzDbkF876VVE4gVEiK4CLgY9OE45toXmxv8XZsYd72cpromxRm4nr3W9d49ub_38jKMlDLXLMvJLPQf1dQihOBHmhfMtpZzQYpZR3xX5rHLqKAgZXnRerXCK2t5OkPXf-BK2hpzlJvy63B02RkAH4nvElb_2T0xm4TPS__CSAjyJXZsFFdZZm-4Kdkh3dkBBH-dJ28wNdQIfOE8lfHbJeCbXg4zv9_IvVjYEStPZKaIBU7_z6w",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err))
    .then((response) => console.log("Lolo: ", response));
};
