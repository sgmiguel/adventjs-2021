/*
  ¡Es hora de poner el árbol de navidad en casa! 🎄

  Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

  Si le pasamos el argumento 5, se pintaría esto:

  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
  Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
  Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

  Otro ejemplo con un árbol de altura 3:

  __*__
  _***_
  *****
  __#__
  __#__
  Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/

export default function createXmasTree(height) {
  const SPACE_CHAR = '_'
  const LEAF_CHAR = '*'
  const TRUNK_CHAR = '#'

  const TRUNK_SIZE = 2
  const MAX_WIDTH = height * 2 - 1
  const HALF_WIDTH = MAX_WIDTH / 2

  let tree = ''
  for (let i = 0; i < height; i++) {
    const spaces = SPACE_CHAR.repeat(HALF_WIDTH - i)
    const leaves = LEAF_CHAR.repeat(1 + i * 2)
    tree += spaces + leaves + spaces + '\n'
  }

  const spaces = SPACE_CHAR.repeat(HALF_WIDTH)
  const trunk = spaces + TRUNK_CHAR + spaces + '\n'
  tree += trunk.repeat(TRUNK_SIZE)

  return tree.slice(0, -1)
}