export const getContent = () => {
  fetch(
    "https://dha.health-ce.wolterskluwer.com/v1/contents/videos/EM_9839.json",
    {
      method: "GET",
      // Request headers
      headers: {
        "Cache-Control": "no-cache",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IndXQ1dRZmZWRkNtVy1hdlQ0WHdYbXVVajgxQ2hWeFFweFo2R3BQXzh3OWciLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiI0ZjU1MDZmYS0zNDA3LTRkYWYtYWIzMy00YjA2ZWNiNmI3NDYiLCJvaWQiOiI0ZjU1MDZmYS0zNDA3LTRkYWYtYWIzMy00YjA2ZWNiNmI3NDYiLCJlbWFpbCI6InNhbXVlbC5hYnJhaGFtQG1lZGVjaXNpb24uY29tIiwibmFtZSI6IlNhbSBBYnJhaGFtIiwiZ2l2ZW5fbmFtZSI6IlNhbSIsImZhbWlseV9uYW1lIjoiQWJyYWhhbSIsInRpZCI6ImI1NjQ2N2YyLTM3NDAtNDcyNC1hNjE2LTI3MzhhZjMyMjE4OCIsInRmcCI6IkIyQ18xQV9ESEExX2RldnBvcnRhbF9zaWdudXBfc2lnbmluIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwiYXpwIjoiMDBlYWY3OWQtZDRhNi00Y2M1LWE3MTItNzgwYzYyMjJkYjQyIiwidmVyIjoiMS4wIiwiaWF0IjoxNjgxNDM2MTUxLCJhdWQiOiI2Zjc5ZTI4Ni0zZmQ1LTRlM2YtOTJmNy0zYWFjMzllOWZjNDQiLCJleHAiOjE2ODE0Mzk3NTEsImlzcyI6Imh0dHBzOi8vdXB0b2RhdGVwcm9kLmIyY2xvZ2luLmNvbS9iNTY0NjdmMi0zNzQwLTQ3MjQtYTYxNi0yNzM4YWYzMjIxODgvdjIuMC8iLCJuYmYiOjE2ODE0MzYxNTF9.pJaCVYkIXBiAtMNJ5aBLJXmz0-pZaSDYyw0hPCZv2CmsKI5xjvXWxeDxbLsgHDCQn6-NUFXqdoNpl8uAM8D8OZDRaYYu_0KCKcEX7vlt7_089oxzSPJqkR3hbJkCKVZ7ZdNzOlpuT7pJuEAP0jrOUTvAOS3JH9JnpIuFfc54xUlHK1irR9IRJsKnLhhCEmpxTpuAOjvrpJ9A1rafJqAmx51IEi4qWQ5x8rnrzv7Kg7X_q7M-ASkPYExNYGVDwq-BNIV_etFFh51z9ZwX-KE6cmPYIi6FKOEYCRZM_kqx3sxwjZAWwHFMGJXHDsAdPIoqihyOj_nHQHMzWhFHmFtf3A",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Kilo", data);
    })
    .catch((err) => console.error(err));
};
