/**
 * This code has been taken from the react-easy-chart npm package
 * available at https://github.com/rma-consulting/react-easy-chart.
 * The code has been modified for the specific needs of the AvantGarde
 * project.
 */
import hash from 'object-hash';

export function createUniqueID(o) {
  return hash(o);
}
