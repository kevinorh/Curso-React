import PropTypes from 'prop-types';

export const FirstApp = ( {
  title, 
  subtitle,
  name
}) => {
  // console.log({title});
  return (
    <>
        <h1 data-testid="test-title"> {title} </h1>
        <h2>{subtitle}</h2>
        <h2>{subtitle}</h2>
        <h3>{name}</h3>
    </>
  )
}

FirstApp.propTypes ={
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps ={
  // title: 'No hay ningun título',
  subtitle: 'No hay subtitulo',
  name: 'Kevin Ore'
}