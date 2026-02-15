"use client"

import { useState, useEffect } from 'react'

export function useFlipState() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Load flip state from localStorage on mount
  useEffect(() => {
    try {
      const savedFlipState = localStorage.getItem('freesauce-flip-state')
      if (savedFlipState !== null) {
        setIsFlipped(JSON.parse(savedFlipState))
      }
    } catch (error) {
      // If localStorage is not available or parsing fails, use default state
      console.warn('Could not load flip state from localStorage:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Save flip state to localStorage when it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('freesauce-flip-state', JSON.stringify(isFlipped))
      } catch (error) {
        // If localStorage is not available, continue without persistence
        console.warn('Could not save flip state to localStorage:', error)
      }
    }
  }, [isFlipped, isLoading])

  const toggleFlip = () => {
    setIsFlipped(prev => !prev)
  }

  const resetFlip = () => {
    setIsFlipped(false)
  }

  return {
    isFlipped,
    isLoading,
    toggleFlip,
    resetFlip
  }
}