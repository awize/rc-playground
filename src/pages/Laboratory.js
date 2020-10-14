import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { MEDICAL_ANALYSIS } from "../utils/constants"
import FuzzySearch from "fuzzy-search"

const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 640px;
  max-width: 100%;
`
const InputStyled = styled.input`
  border: 2px solid black;
  background-color: #fff;
  padding: 10px 20px;
  font-size: 20px;
  color: black;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
`

const RowStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 10px 15px;
  box-sizing: border-box;
  &:nth-child(even) {
    background-color: rgb(255 190 190 / 50%);
  }
  color: ${({ color }) => color};
  flex-direction: ${({ column }) => column && "column"};
`

const CodeStyled = styled.span`
  background-color: rgba(0, 0, 0);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
`

const DescriptionStyled = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 4px;
`
const Laboratory = (props) => {
  const [keySearch, setKeySearch] = useState("")
  const [match, setMatch] = useState("")

  useEffect(() => {
    const searcher = new FuzzySearch(MEDICAL_ANALYSIS, ["name"], {
      caseSensitive: false,
    })
    const result = searcher.search(keySearch)
    setMatch(result)
  }, [keySearch])

  return (
    <ContainerStyled>
      <div style={{ padding: 10 }}>
        <InputStyled
          type="text"
          value={keySearch}
          onChange={(e) => {
            setKeySearch(e.target.value)
          }}
        ></InputStyled>
      </div>
      <div>
        Letras en: Negro: mismo dia en la tarde Azul: resultado en 9 dias Rojo:
        resultado en dos semanas
      </div>
      <hr />
      <div>NO AGENDAR CULTIVOS LOS JUEVES NI LOS VIERNES</div>
      <div>
        Más de 4 estudios en la misma solicitud deben estar autorizados por jefe
        de consulta
      </div>
      {match
        ? match.map(({ name, code, details, color }) => {
            return (
              <RowStyled
                color={color}
                column
                style={{ borderBottom: "1px solid gray" }}
              >
                <RowStyled full>
                  <span>{name.toUpperCase()}</span>
                  <CodeStyled>{code}</CodeStyled>
                </RowStyled>
                {details && <DescriptionStyled>{details}</DescriptionStyled>}
              </RowStyled>
            )
          })
        : ""}
    </ContainerStyled>
  )
}

Laboratory.propTypes = {}

export default Laboratory
