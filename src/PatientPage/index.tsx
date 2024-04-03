import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../state';

const PatientPage = () => {
  const { id } = useParams();
  const [{patients}] = useStateValue()

  const patient = Object.values(patients).find(p => p.id === id)
  
  return <div className="App">
    <Typography>{patient?.name}</Typography>
    <Typography>{patient?.gender}</Typography>
    <Typography>{patient?.ssn}</Typography>
    <Typography>{patient?.occupation}</Typography>
  </div>;
};

export default PatientPage;
