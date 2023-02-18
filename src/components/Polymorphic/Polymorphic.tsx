import React from 'react'
type PolymorphicOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
} 
type PolymorphicProps<E extends React.ElementType> = PolymorphicOwnProps<E> & Omit<React.ComponentProps<E>, keyof PolymorphicOwnProps<E>>

const Polymorphic = <E extends React.ElementType = 'div'>({size,color,children, as}: PolymorphicProps<E>) => {
  const Component = as || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}

export default Polymorphic