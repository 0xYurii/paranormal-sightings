// notice we are now using "with" instead of "assert"
import data from '../data/data.json' with { type: 'json' };

export default function getData() {
  // Return the data, which is already a JavaScript object
  return data;
}