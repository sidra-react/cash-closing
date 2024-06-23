const LanguageOption = ({ onChange }) => {
    return (
      <div style={{
  position: 'absolute',
  bottom: 0 ,
  left:0,
  marginTop: '50px'
}}>
  <select onChange={onChange}>
    <option>Select Language</option>
    <option value={'en'}>English</option>
    <option value={'braz'}>Portuguese</option> 
  </select>
</div>
    );
  };
export default LanguageOption;  