function StudentCard(props) {
  return (
    <div className="StudentCard">
      <p>
        <b>Name:</b> {props.name}
      </p>
      <p>
        <b>Cohort:</b> {props.info.course} - {props.info.city}
      </p>
      <p>
        <b>Current week: {props.week}</b>
      </p>
      <br />
    </div>
  );
}

export default StudentCard;
