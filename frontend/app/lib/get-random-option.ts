export function getRandomOption(options: { value: string }[]) {
  return options[Math.floor(Math.random() * options.length)].value;
}
