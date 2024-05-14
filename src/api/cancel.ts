const cancel = async (reservationId: string) => {
  const response = await fetch(`http://localhost:3001/reservation/cancel/${reservationId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
  const payload = await response.json();
  console.log(payload);
};

export default cancel;
