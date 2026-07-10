"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  words: string[]
  speed?: number
  delayBetweenWords?: number
  cursor?: boolean
  cursorChar?: string
  /** When false, the text is typed out once and then stops (no deleting/looping). */
  loop?: boolean
  /** A substring of the word to render in an accent color. */
  highlight?: string
  /** Classes applied to the highlighted substring. */
  highlightClassName?: string
}

export function Typewriter({
  words,
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
  loop = true,
  highlight,
  highlightClassName,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const currentWord = words[wordIndex]

  useEffect(() => {
    // When not looping, stop once the current word is fully typed.
    if (!loop && !isDeleting && charIndex === currentWord.length) {
      return
    }

    const timeout = setTimeout(
      () => {
        // Typing logic
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            // Word is complete, wait before deleting
            setTimeout(() => {
              setIsDeleting(true)
            }, delayBetweenWords)
          }
        } else {
          // Deleting logic
          if (charIndex > 0) {
            setDisplayText(currentWord.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            // Word is deleted, move to next word
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, currentWord, isDeleting, speed, delayBetweenWords, wordIndex, words, loop])

  // Cursor blinking effect
  useEffect(() => {
    if (!cursor) return

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [cursor])

  // Split the typed text so a portion can be rendered in an accent color.
  const highlightIndex = highlight ? currentWord.indexOf(highlight) : -1
  const normalText = highlightIndex >= 0 ? displayText.slice(0, highlightIndex) : displayText
  const accentText = highlightIndex >= 0 ? displayText.slice(highlightIndex) : ""

  return (
    <div className="inline-block">
      <span>
        {normalText}
        {accentText && <span className={highlightClassName}>{accentText}</span>}
        {cursor && (
          <span className="ml-1 transition-opacity duration-75" style={{ opacity: showCursor ? 1 : 0 }}>
            {cursorChar}
          </span>
        )}
      </span>
    </div>
  )
}
