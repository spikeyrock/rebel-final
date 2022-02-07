import React, { useMemo, useRef, useEffect } from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import useStore from './store'
import rebel from '././images/icon.png'

export default function Hud() {
  const points = useStore((state) => state.points)
  const sound = useStore((state) => state.sound)
  const toggle = useStore((state) => state.actions.toggleSound)


  const score = useMemo(() => (points >= 1000 ? (points / 1000).toFixed(1) + 'K' : points), [points])
  return (
    <>
      <UpperLeft>
        <a href="#">about us</a>
        <br />
        <a href="#">characters</a>
      </UpperLeft>
      <UpperRight>
        <a href="#">roadmap</a>
        <br />
        <a href="#">utilities</a>
      </UpperRight>
      <LowerLeft>
        <img src={rebel} />
      </LowerLeft>
      <Global />
      <LowerRight>
        <a href="https://discord.gg/JUwHqtQxZj">Discord</a>
        <br />
        <a href="https://twitter.com/rebelxcrew">Twitter</a>
        <br />
        <a href="https://instagram.com/rebelxcrew">Instagram</a>
      </LowerRight>
    </>
  )
}

const base = css`
  font-family: 'Teko', sans-serif;
  position: absolute;
  text-transform: uppercase;
  font-weight: 900;
  font-variant-numeric: slashed-zero tabular-nums;
  line-height: 1em;
  pointer-events: none;
  color: #7bff00 !important;
`

const UpperLeft = styled.div`
  ${base}
  top: 40px;
  left: 50px;
  font-size: 3em;
  pointer-events: all;
  cursor: pointer;
  & > a {
    color: #7bff00;
    text-decoration: none;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`

const UpperRight = styled.div`
  ${base}
  text-align: right;
  top: 40px;
  right: 50px;
  font-size: 3em;
  pointer-events: all;
  cursor: pointer;
  & > a {
    color: #7bff00;
    text-decoration: none;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`

const LowerLeft = styled.div`
  ${base}
  bottom: 1.5rem;
  left: 3rem;
  transform: scale(120%);
 
  @media only screen and (max-width: 420px) {
    bottom: 0.75rem;
    left: 0.75rem;
    transform: scale(75%);
  }
`

const LowerRight = styled.div`
  ${base}
  bottom: 30px;
  right: 50px;
  text-align: right;
  font-size: 3em;

  pointer-events: all;
  cursor: pointer;
  & > a {
    color: #7bff00;
    text-decoration: none;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow: hidden;
  }

  #root {
    overflow: auto;
    padding: 0px;
  }

  body {
    position: fixed;
    overflow: hidden;
    overscroll-behavior-y: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    color: black;
    background: white;
  }
`
