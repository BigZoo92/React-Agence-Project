import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
 
   useEffect(() => {
    // fetchData()
    setDataLoading(true)
    fetch(`http://localhost:8000/survey`).then((response) =>
      response.json().then(({ surveyData }) => {
        setSurveyData(surveyData)
        setDataLoading(false)
      })
    )
  }, [])
 
     return (
    <section>
      <h1>Question {questionNumber}</h1>
      {isDataLoading ? (
        <p>waiting</p>
      ) : (
        <p>{surveyData[questionNumber]}</p>
      )}
      <div>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </div>
    </section>
  )
}

export default Survey