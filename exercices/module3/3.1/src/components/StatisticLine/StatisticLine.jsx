const StatisticLine = (props) => {
  const name = props.name;
  const formula = props.formula;
  return(
      <tr>
          <td>{name}</td>
          <td>{formula}</td>
      </tr>
  )
}

export default StatisticLine