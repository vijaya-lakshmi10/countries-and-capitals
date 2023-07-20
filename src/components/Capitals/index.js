import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component{
  state = {activeCapitalId:countryAndCapitalsList[0].id}

  onChangeCapitalValue=(event)=>{
    this.setState({activeCapitalId:event.target.value})
  }

  getCountryNameForCorrespondingCapital=()=>{
    const {activeCapitalId}=this.state
    const getCountry=countryAndCapitalsList.find(name=>(name.id===activeCapitalId))
    return getCountry.country
  }

  render(){
    const {activeCapitalId}=this.state
    const countryName=this.getCountryNameForCorrespondingCapital(activeCapitalId)
    return(
      <div className="bg-container">
      <div className="capitals-container">
      <h1 className="heading">Countries And Capitals</h1>
      <div className="dropdown-container">
      <select className="capitals" onChange={this.onChangeCapitalValue} value={activeCapitalId}>
      {countryAndCapitalsList.map(eachName=>(
        <option className="capital-options" key={eachName.id} value={eachName.id}>{eachName.capitalDisplayText}</option>
      ))}
      </select>
      <p className="desc">is capital of which country?</p>
      </div>
      <p className="output">{countryName}</p>
      </div>
      </div>
    )

  }
}
export default Capitals
